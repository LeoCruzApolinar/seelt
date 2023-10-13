import React from 'react';
import logo from '../../src/images/logoS.svg';
import { useNavigate } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Obtén el usuario actual

  const NavegarLogin = () => {
    navigate('/login'); // Redirige al usuario a la página de inicio de sesión
  };
  const NavegarHome = () => {
    navigate('/'); // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <div className="bg-black w-full fixed top-0 left-0 flex justify-between items-center p-4 px-10 z-50">
      <div>
      <img
        onClick={NavegarHome}
        className="w-12"
        src={logo}
        alt="Logo"
        style={{
          cursor: 'pointer', // Cambia el cursor al puntero en el hover
          transition: 'transform 0.2s', // Agrega una transición suave a la transformación
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Escala la imagen en el hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Restaura la escala original al salir del hover
        }}
      />
      </div>
      <div className="flex sm:space-x-4">
        {["Series", "Peliculas", "Videos"].map((label, index) => (
          <button key={index} className="text-white text-sm sm:text-base py-2 px-4 rounded-lg transition hover:opacity-80">
            {label}
          </button>
        ))}
      </div>
      {user ? ( // Si hay un usuario logueado, muestra AccountMenu
        <AccountMenu />
      ) : ( // Si no hay usuario logueado, muestra el botón Log in
        <button onClick={NavegarLogin} className="bg-[#0196ea] text-xs sm:text-base py-2 px-4 rounded-lg text-white transition focus:outline-none hover:bg-blue-700">
          Log in
        </button>
      )}
    </div>
  );
};

export default Navbar;
