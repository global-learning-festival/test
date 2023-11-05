import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineInfoCircle } from 'react-icons/ai';
import isate from "../images/isate2024-logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div className='bg-[#FFF] flex justify-between items-center h-20 mt-auto px-4 text-black'>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className='md:hidden pt-2'>
            <h3 className=''><AiOutlineInfoCircle size={25}/></h3>
        </div>
      <ul className={nav ? 'fixed left-0 top-20 w-[60%] h-full bg-[#EDF1F4] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h3 className='w-full font-bold text-[#000] pt-10 '>Emily Bieber</h3>
        <p className='font-bold text-[grey]'>UX Designer</p>
          <li className='p-4'>Home</li>
          <li className='p-4'>Map</li>
          <li className='p-4'>Announcement</li>
          <li className='p-4 border-b border-gray-600'>Connect</li>
          <li className='p-4'>Help</li>
          <li className='p-4'>Settings</li>
      </ul>
      
      <div className='hidden md:flex ml-10'>
        <img className='object-fit h-12 w-36' src={isate} alt="istate" />
      </div>
      <ul className='hidden md:flex mr-20 pt-3'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Map</li>
        <li className='p-4'>Announcement</li>
        <li className='p-4'>Connect</li>
        <li className='p-4'><AiOutlineInfoCircle size={25}/></li>
      </ul>
    </div>
  );
};

export default Navbar;