import { useState } from 'react';

//Paginas
import MainPage from "./pages/home/mainPage"
import Signup from './pages/auth/signup';

//Modulos firebas
import FirebaseConfig from './api/firebase.config';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import Login from './pages/auth/login';
const auth = getAuth(FirebaseConfig);


function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth,(usuarioFirebase) => 
  {
    if (usuarioFirebase)
    {
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null);
    }

  });

  return (
    <body className="w-screen h-full min-h-screen bg-[#0d0d0d]">
      <Login/>
    </body>
    
  )
}

export default App;
