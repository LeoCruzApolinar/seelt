import React, { useState } from 'react';
import logo from '../../images/logoS.svg';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseConfig from '../../api/firebase.config';
import { LogDeUsuario } from '../../api/SeeltApi';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../components/LoadingScreen'; // Importa el componente LoadingScreen

const FullScreenCentered = ({ className }) => (
  <div className={`fixed w-full h-full flex flex-col justify-center items-center ${className}`} />
);

const Login = () => {
  const [isLoading, setIsLoading] = useState(false); // Agrega el estado isLoading

  const auth = getAuth(FirebaseConfig);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;

    // Muestra la pantalla de carga mientras espera a que se complete el inicio de sesión
    setIsLoading(true);

    try {
      const User = await signInWithEmailAndPassword(auth, email, password);
      await LogDeUsuario(User.user.uid);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert("Verifique el correo o la contraseña");
    } finally {
      // Oculta la pantalla de carga después del intento de inicio de sesión, ya sea exitoso o no
      setIsLoading(false);
    }
  };

  const NavegarSignup = () => {
    navigate('/signup');
  };

  const NavegarHome = () => {
    navigate('/');
  };

  return (
    <>
      {isLoading && <LoadingScreen />} {/* Muestra la pantalla de carga cuando isLoading es true */}
      <FullScreenCentered className="bg-back-movies z-0" />
      <FullScreenCentered className="bg-black opacity-90 z-20" />
      <div className="fixed z-50 w-full h-full flex flex-col justify-center items-center space-y-10">
        <img onClick={NavegarHome} className="w-44" src={logo} alt="Logo" />
        <h1 className="text-white text-5xl">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-5 w-full">
        <div className="flex flex-col w-1/2 sm:w-1/4 space-y-1">
            <label htmlFor="email" className="text-white text-sm sm:text-lg font-thin">Correo electronico</label>
            <input id="email" type="email" className="py-2 px-5 rounded-lg" />
          </div>
          <div className="flex flex-col w-1/2 sm:w-1/4 space-y-1">
            <label className="text-white text-sm sm:text-lg font-thin">Contraseña</label>
            <input id="pass" type="password" className="py-2 px-5 rounded-lg" />
          </div>
          <p className="text-white text-sm underline cursor-pointer hover:text-[#0196eb]">Olvide mi contraseña</p>
          <p
            onClick={NavegarSignup}
            className="text-white text-sm underline cursor-pointer transition hover:text-[#0196eb]"
          >
            No tienes una cuenta? Registrate!!
          </p>
          <button type="submit" className="bg-[#0196eb] text-xl w-fit text-white py-2 px-8 rounded-lg mt-5">Acceder</button>
        </form>
      </div>
    </>
  );
}

export default Login;
