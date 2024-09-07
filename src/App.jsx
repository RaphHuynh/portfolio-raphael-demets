import './App.css'
import NavBar from "./components/navBar"
import NavLink from './components/navLink';
import Competence from './pages/competence';
import Home from './pages/home';
import Work from './pages/work';
import Princing from './pages/princing';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Assurez-vous que le chemin correspond à votre configuration
import { motion } from 'framer-motion';
import AnimatedWaves from './components/waves';

// Initialisez AOS
AOS.init({
  once: true,
});

function App() {

  return (
    <>
      <div className='w-full'>
        <AnimatedWaves />
        <NavBar />
        <Home />
        <Competence />
        <Work />
        <Princing />
        <NavLink />
      </div>
    </>
  )
}

export default App;
