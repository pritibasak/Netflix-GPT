import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);

  const toggleSignInForm = function () {
    setIsSigninForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="BG" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-md text-white bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4 px-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-sm p-4 my-4 w-full font-normal text-sm  bg-zinc-800"
          />
        )}

        <input
          type="text"
          placeholder="Email address"
          className="rounded-sm p-4 my-4 w-full font-normal text-sm bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="rounded-sm p-4 my-4 w-full font-normal text-sm  bg-zinc-800"
        />
        <button
          type="submit"
          className="rounded-lg cursor-pointer p-4 my-6 w-full bg-red-500"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered! Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
