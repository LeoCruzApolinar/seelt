import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // Import the signOut function from Firebase

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  // Function to sign out a user
  const signout = () => {
    signOut(auth)
      .then(() => {
        // User has been signed out successfully
        setUser(null);
      })
      .catch((error) => {
        // Handle sign-out errors if needed
        console.error('Error signing out:', error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signout }}> {/* Provide the signout function */}
      {children}
    </AuthContext.Provider>
  );
};
