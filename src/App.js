import React from 'react';
import MainPage from "./pages/home/mainPage"
import { AuthContextProvider, UserAuth } from './context/AuthContext.jsx';


function App() {
  // const {user, logOut} =  UserAuth();
  return (
    <AuthContextProvider>
      <body className="w-screen h-full min-h-screen bg-[#0d0d0d]">
        <MainPage />
      </body>
    </AuthContextProvider>


  )
}

export default App;
