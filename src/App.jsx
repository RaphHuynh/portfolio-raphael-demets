import './App.css'
import NavBar from "./components/navBar"
import NavLink from './components/navLink';
import Competence from './pages/competence';
import Home from './pages/home';
import Work from './pages/work';
import Princing from './pages/princing';

function App() {

  return (
    <>
      <div className='w-full'>
      <NavBar/>
      <Home/>
      <Competence/>
      <Work/>
      <Princing/>
      <NavLink/>
    </div>
    </>
  )
}

export default App;
