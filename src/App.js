import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Paginas
import MainPage from "./pages/home/mainPage"
import Signup from './pages/auth/signup';


//Modulos firebas
import Login from './pages/auth/login';
import { AuthProvider } from './context/AuthContext';
import CrearCanal from './pages/editar-perfil/CrearCanal';



function App() {
  return (
    <AuthProvider>
    <Router>
      <body className="w-screen h-full min-h-screen bg-[#0d0d0d] -z-10">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/crearcanal" element={<CrearCanal />} />
        </Routes>
      </body>
    </Router>
    </AuthProvider>
  )
}

export default App;
