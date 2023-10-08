import React, { useEffect } from "react";
import { logo } from "../utils/constants";
import { avatar } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //console.log("header");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error"); //this component needs to be made
      });
  };

  useEffect(() => {
    //console.log("effect")//why eefect is logged twice consecutively
    //The useEffect hook is called twice when the component is mounted and you are in development mode with StrictMode enabled.
    // Note that Strict Mode is only applied in development.
    // It won't render your components or run your effects twice in production.

    //whenever authentication state changes sign in, singn up, sing out this function gets called from firebase
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(toggleGptSearchView());
        navigate("/"); //React Router Dom useNavigate() causes reload/re-render of the whole application and thereby clearing all state
       
      }
    });
    return () => unsubsribe(); //when component unloads/unmounts we need to return unsubscribe
    //unsubcribe to the onauthstatechanged callback when component only unmounts
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange=(e)=>{
  //dispatching and updating redux store by new language
   dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between">
      {/**default black for mobile ,basically default is sm
     * sm for tab, if my screen is greater than small, basically it's medium
     * md for dektop,if my screen size is greater than medium, basically it's large
     */}
      {/** absolute to overlap the netflix logo with the login page
       * bg-gradient is from top towards botton in black
       */}
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && <select className="p-2 m-2 bg-slate-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((supported_language) => (
              <option
                key={supported_language.identifier}
                value={supported_language.identifier}
              >
                {supported_language.name}
              </option>
            ))}
          </select>}
          <button
            className="px-4 py-2 mx-0 md:mx-8 my-2 bg-red-500 text-white rounded-xl hover:bg-opacity-80"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="hidden md:block w-12 h-12" src={avatar} alt="avatar-icon" />
          <button onClick={handleSignOut} className="text-white font-bold mx-2 md:mx-0">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
