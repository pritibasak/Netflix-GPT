import React from 'react'
import {logo} from "../utils/constants";
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        {/** absolute to overlap the netflix logo with the login page
         * bg-gradient is from top towards botton in black
        */}
        <img className="w-44" src={logo} alt="logo" />
    </div>
  )
}

export default Header
