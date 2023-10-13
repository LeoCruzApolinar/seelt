import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './sidebar';  // Adjust the path to match the location of Sidebar.js

const NavbarLogin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-black w-full fixed top-0 left-0 flex justify-between items-center p-4 px-10 z-50">
      <div className="flex space-x-2 sm:space-x-4">
        {["Series", "Peliculas", "Videos"].map((label, index) => (
          <button key={index} className="text-white text-sm sm:text-base py-2 rounded-lg transition hover:opacity-80">
            {label}
          </button>
        ))}
      </div>
      <div className='flex sm:w-[60%] md:w-[40%] bg-transparent justify-center items-center'>
        <input placeholder='Buscar...' className='rounded-full text-white bg-[#484848] w-full p-2 px-4 m-1 sm:mr-36' type='text' />
      </div>
      <div ref={buttonRef} className="relative flex justify-center items-center">
        <button
          onClick={toggleSidebar}
          className="text-xs sm:text-base w-10 h-10 rounded-full text-white bg-[#484848]"
        ></button>
        {isSidebarOpen && <div className="absolute top-full right-0"><Sidebar /></div>}
      </div>
    </div>
  );
};

export default NavbarLogin;
