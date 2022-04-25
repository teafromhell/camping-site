import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: null,
//   token: null,
//   id: null,
// };

const initialUser = localStorage.getItem('acc')
  ? JSON.parse(localStorage.getItem('acc'))
  : null

console.log(localStorage.getItem('acc'))
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('acc', JSON.stringify(action.payload));
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem('acc');
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
