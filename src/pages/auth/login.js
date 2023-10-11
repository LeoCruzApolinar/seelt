import React from 'react';
import logo from '../../images/logoS.svg';

const FullScreenCentered = ({ className }) => (
  <div className={`fixed w-full h-full flex flex-col justify-center items-center ${className}`} />
);

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);
  };

  return (
    <>
      <FullScreenCentered className="bg-back-movies -z-20" />
      <FullScreenCentered className="bg-black opacity-90 -z-10" />
      <div className="fixed z-50 w-full h-full flex flex-col justify-center items-center space-y-10">
        <img className="w-44" src={logo} alt="Logo" />
        <h1 className="text-white text-5xl">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-5 w-full">
          <div className="flex flex-col w-1/2 sm:w-1/4 space-y-1">
            <label htmlFor="email" className="text-white text-sm sm:text-lg font-thin">Correo electronico</label>
            <input id="email" type="email" className="py-2 px-5 rounded-lg" />
          </div>
          <div className="flex flex-col w-1/2 sm:w-1/4 space-y-1">
            <label className="text-white text-sm sm:text-lg font-thin">Contraseña</label>
            <input type="password" className="py-2 px-5 rounded-lg" />
          </div>
          <p className="text-white text-sm underline cursor-pointer">Olvide mi contraseña</p>
          <button type="submit" className="bg-[#0196eb] text-xl w-fit text-white py-2 px-8 rounded-lg mt-5">Acceder</button>
        </form>
      </div>
    </>
  );
}

export default Login;
