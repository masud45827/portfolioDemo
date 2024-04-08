import React from 'react';
import Navbar from './Navbar';
import logo from "../assets/image2.png"
const Header = () => {
    return (
        <div className=' pr-5 h-[100px] relative flex justify-between items-center bg-cyan-400'>
            <img className='w-30 h-12' src={logo} alt='logo'/>
           <Navbar/> 
        </div>
    );
};

export default Header;