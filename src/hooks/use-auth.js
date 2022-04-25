import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export function useAuth() {
  const { user } = useSelector((state) => state.user);

  const [array, setArray] = useState([]);
  useEffect(() => {
    if (isNaN(user)) {
      setArray(user?.mail.split("@"));
    }
  }, [user]);
  return {
    isAuth: !!user?.mail,
    login: array[0],
  };
}
