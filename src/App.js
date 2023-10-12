import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Paginas
import MainPage from "./pages/home/mainPage"
import Signup from './pages/auth/signup';


//Modulos firebas
import FirebaseConfig from './api/firebase.config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './pages/auth/login';
const auth = getAuth(FirebaseConfig);


function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null);
    }

  });

  return (
    <Router>
      <body className="w-screen h-full min-h-screen bg-[#0d0d0d] -z-10">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </body>
    </Router>
  )
}

export default App;
