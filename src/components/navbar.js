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
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  const NavegarCategoria = (categoria) => {
    // Si el usuario no está logueado, redirige a /login
    if (!user) {
      NavegarLogin();
      return;
    }
    // Si el usuario está logueado, redirige a la categoría seleccionada
    navigate(`/allvideos?categoria=${categoria}`);
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
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
      <div className="flex sm:space-x-4">
        {["peliculas", "videos"].map((label, index) => (
          <button
            key={index}
            onClick={() => NavegarCategoria(label)}
            className="text-white text-sm sm:text-base py-2 px-4 rounded-lg transition hover:opacity-80"
          >
            {label}
          </button>
        ))}
      </div>
      {user ? (
        <AccountMenu />
      ) : (
        <button onClick={NavegarLogin} className="bg-[#0196ea] text-xs sm:text-base py-2 px-4 rounded-lg text-white transition focus:outline-none hover:bg-blue-700">
          Log in
        </button>
      )}
    </div>
  );
};

export default Navbar;
