import React from 'react';
import logo from '../../src/images/logoS.svg';

const Navbar = () => {
  return (
    <div className="bg-black w-full fixed top-0 left-0 flex justify-between items-center p-4 px-10">
      <div>
        <img className="w-12" src={logo} alt="Logo" />
      </div>
      <div className="flex sm:space-x-4">
        {["Series", "Peliculas", "Videos"].map((label, index) => (
          <button key={index} className="text-white text-sm sm:text-base py-2 px-4 rounded-lg transition hover:opacity-80">
            {label}
          </button>
        ))}
      </div>
      <button className="bg-[#0196ea] text-xs sm:text-base py-2 px-4 rounded-lg text-white transition focus:outline-none hover:bg-blue-700">Log in</button>
    </div>
  );
}

export default Navbar;
