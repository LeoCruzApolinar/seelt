import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Paginas
import MainPage from "./pages/home/mainPage"
import Signup from './pages/auth/signup';
import VideoPlayer from './pages/home/videoPlayer';
import CrearCanal from './pages/editar-perfil/CrearCanal';
import SubsPage from './pages/home/subs';
import Perfil from './pages/editar-perfil/perfil';
import AllVideos from './pages/home/allVideos';


//Modulos firebas
import Login from './pages/auth/login';
import { AuthProvider } from './context/AuthContext';




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
            <Route path="/video/:videoId" element={<VideoPlayer />} />
            <Route path="/subs" element={<SubsPage />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/allvideos" element={<AllVideos />} />
          </Routes>
        </body>
      </Router>
    </AuthProvider>
  )
}

export default App;
