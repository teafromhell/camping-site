import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: null,
//   token: null,
//   id: null,
// };

const initialUser = localStorage.getItem('acc')
  ? JSON.parse(localStorage.getItem('acc'))
  : null

  const initialComments = localStorage.getItem('comments')
  ? JSON.parse(localStorage.getItem('comments'))
  : []

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
    comments: initialComments,
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
    commentsUser(state,action) {
      state.comments = action.payload;
      localStorage.setItem('comments', JSON.stringify(action.payload));
    }
  },
});

export const { setUser, removeUser, commentsUser } = userSlice.actions;

export default userSlice.reducer;
