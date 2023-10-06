import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Photo from "../assets/Photo.jpg";
import { avatar } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null); //returns an object
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = function () {
    setIsSigninForm(!isSignInForm);
  };

  const handleButtonClick = function () {
    //validate the form data
    //in console we will get reference of the email & password input boxes in the form of objects returned by useRef() hook
    //console.log(email);//email.current.value will give only our emailid
    //console.log(password);//password.current.value will give only our password
    const message = checkValidData(email.current.value, password.current.value); //extracting value from object & passing to function imported from validate.js
    //console.log(message)
    setErrorMessage(message);
    if (message !== null) return; //some error is there in name /email/password
    if (!isSignInForm) {
      //sign up logic
      //It's an API createUserWithEmailAndPassword. It will create the user & store in firebase
      //this API  returns a promise
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )  //promise of  createUserWithEmailAndPassword function
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Photo
          })
           //promise of  updateProfile function (it will work after promise completes its work)
            .then(() => {
              //Profile updated!
              console.log(user)
              const { uid, email, displayName, photoURL } = auth.currentUser; 
              //we can't use user while destructuring here because user doesn't have updated value as per Akhshaay
              //But I used use object it's working
              //updating redux store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //action={payload:{uid:uid,email:email,displayName:displayName}}-->this is being sent to redux store
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.code + "-" + error.message);
            });
          console.log(user); //if sign up successful automatically user sign in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage); //this errorMessage from line 49, this error in case from the API
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("in"+user); //if sign in successful
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="BG" />
      </div>
      <div
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-md text-white bg-opacity-80"
      >
        <h1 className="font-semibold text-3xl py-4 px-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="rounded-sm p-4 my-4 w-full font-normal text-sm  bg-zinc-800"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="rounded-sm p-4 my-4 w-full font-normal text-sm bg-zinc-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-sm p-4 my-4 w-full font-normal text-sm  bg-zinc-800"
        />
        <p className="text-red-500 font-semibold py-2 text-lg">
          {errorMessage}
        </p>
        <button
          className="rounded-lg cursor-pointer p-4 my-6 w-full bg-red-500"
          onSubmit={(e) => e.preventDefault()}
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered! Sign in now."}
        </p>
      </div>
    </div>
  );
};

export default Login;

//form validation is native to application
//if validation successful ie email & paasword must follow regEx and return null
// then only authentication i.e. link with firebase exiting or non exiting users
