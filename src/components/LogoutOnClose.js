import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación
import { signOut } from 'firebase/auth';

const LogoutOnInactivity = () => {
  const { user } = useAuth();
  const [logoutTimer, setLogoutTimer] = useState(null);
  const inactivityDuration = 10 * 60 * 1000; // 10 minutos de inactividad antes del cierre de sesión (en milisegundos)

  useEffect(() => {
    if (user) {
      // Si hay un usuario autenticado, comienza el temporizador de inactividad
      const timer = setTimeout(() => {
        // Cerrar la sesión después de la inactividad
        signOut(user.auth);
      }, inactivityDuration);

      setLogoutTimer(timer);
    }

    const handleUserActivity = () => {
      // Restablecer el temporizador en cada actividad del usuario
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }

      // Comienza un nuevo temporizador
      const newTimer = setTimeout(() => {
        // Cerrar la sesión después de la inactividad
        signOut(user.auth);
      }, inactivityDuration);

      setLogoutTimer(newTimer);
    };

    // Agrega escucha para la actividad del usuario
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    // Limpia el temporizador y el escucha cuando el componente se desmonta
    return () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }

      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [user, logoutTimer]);

  return null; // No renderiza nada en el DOM
};

export default LogoutOnInactivity;


