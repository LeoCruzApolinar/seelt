import React from 'react';
import Login from './pages/auth/login';
import { AuthContextProvider, UserAuth } from './context/AuthContext.jsx';


function App() {
 // const {user, logOut} =  UserAuth();

  <AuthContextProvider>
    <div className="w-screen h-screen bg-blackx">
      <Login />
    </div>
  </AuthContextProvider>
  
}

export default App;
