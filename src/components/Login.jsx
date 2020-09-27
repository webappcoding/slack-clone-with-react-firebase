import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { auth, provider } from "../config/firebase";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { user } = useAuth();
  const history = useHistory();
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch((res) => console.log(res));
  };

  useEffect(() => {
    if (user) {
      history.push("/room");
    }
  }, [user, history]);

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white py-10 px-12 w-1/3 rounded-lg shadow-lg text-center">
        <img
          src="/slack-226533.png"
          alt="slack clone"
          className="w-24 mx-auto mb-3"
        />
        <h1 className="text-3xl">Sign in with Google</h1>

        <button
          className="p-4 w-64 bg-slack-600 rounded-lg text-white mt-12 focus:outline-none hover:bg-slack-700 shadow  text-lg"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
