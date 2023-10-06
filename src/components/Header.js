import React, { useEffect } from 'react'
import {logo} from "../utils/constants";
import { avatar } from '../utils/constants';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store => store.user);
  console.log(user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');//this component needs to be made
    });
  }

  useEffect(() => {
    //whenever authentication state changes sign in, singn up, sing out this function gets called from firebase
    onAuthStateChanged(auth, (user) => {
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
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, []);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        {/** absolute to overlap the netflix logo with the login page
         * bg-gradient is from top towards botton in black
        */}
        <img className="w-44" src={logo} alt="logo" />
        {user && <div className='flex p-2'>
          <img className="w-12 h-12" src={avatar} alt="avatar-icon"/>
          <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
