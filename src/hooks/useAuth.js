import { auth } from "../config/firebase";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const isAuth = localStorage.getItem("isAuth");
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        localStorage.setItem("isAuth", true);
      } else {
        localStorage.setItem("isAuth", false);
      }
    });
  }, []);

  return { user, isAuth };
};

export default useAuth;
