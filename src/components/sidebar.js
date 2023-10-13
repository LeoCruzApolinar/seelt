import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-[#232323] text-white w-64 p-4 flex flex-col rounded-lg">
      <div className='mb-5'>
        <div className="flex flex-row items-center justify-between">
          <div className='text-xl font-bold text-[#ff7042]'>Johan Contreras </div>
          <div className='text-xs sm:text-base w-10 h-10 rounded-full text-white bg-[#484848]'></div>
        </div>
        <p className="text-xs">Manage Account</p>
      </div>
      <ul>
        <li className="mb-2">Tu Canal</li>
        <li className="mb-2">Subir a Set</li>
        <li className="mb-2">Cambiar Tema</li>
        <li className="mb-2">Suscripción</li>
      </ul>
      <button className="bg-[#0196eb] mt-5 text-xs sm:text-base py-2 px-4 rounded-lg text-white transition focus:outline-none">Cerrar sesión</button>
    </div>
  );
};

export default Sidebar;
