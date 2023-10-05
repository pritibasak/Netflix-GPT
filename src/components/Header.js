import React from 'react'
import {logo} from "../utils/constants";
import { avatar } from '../utils/constants';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store => store.user);
  //console.log(user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');//this component needs to be made
    });
  }

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
