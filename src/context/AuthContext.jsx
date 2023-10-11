import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  EmailAuthProvider, // Importa EmailAuthProvider
  signInWithRedirect,
  signInWithEmailAndPassword, // Importa signInWithEmailAndPassword
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../api/firebase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  
  const emailSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const currentUser = userCredential.user;
      setUser(currentUser);
    } catch (error) {
      console.error("Error al iniciar sesión con correo y contraseña:", error);
    }
  };
  
  const logOut = () => {
    signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <AuthContext.Provider value={{ googleSignIn, emailSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
