import React from 'react';
import logo from '../../images/logoS.svg';

const FullScreenCentered = ({ className }) => (
  <div className={`fixed w-full h-full flex flex-col justify-center items-center ${className}`} />
);

const PasswordReset = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <>
      <FullScreenCentered className="bg-back-movies -z-20" />
      <FullScreenCentered className="bg-black opacity-90 -z-10" />
      <div className="fixed z-50 w-full h-full flex flex-col justify-center items-center space-y-10">
        <img className="w-44" src={logo} alt="Logo" />
        <h1 className="text-white text-5xl">Recupedar contraseña</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-5 w-full">
          <div className="flex flex-col w-1/2 sm:w-1/4 space-y-1">
            <label htmlFor="email" className="text-white text-sm sm:text-lg font-thin">Correo electronico</label>
            <input id="email" type="email" className="py-2 px-5 rounded-lg" />
          </div>
          <div className='flex flex-row space-x-10 justify-center items-center'>
            <button type="button" className="bg-[#ff7042] text-xl w-fit text-white py-2 px-8 rounded-lg mt-5">Cancelar</button>
            <button type="submit" className="bg-[#0196eb] text-xl w-fit text-white py-2 px-8 rounded-lg mt-5">Acceder</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PasswordReset;
