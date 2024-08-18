import './App.css'
import NavBar from "./components/navBar"
import Competence from './pages/competence';
import Home from './pages/home';
import Work from './pages/work';

function App() {

  return (
    <>
      <div className='w-full'>
      <NavBar/>
      <Home/>
      <Competence/>
      <Work/>
    </div>
    </>
  )
}

export default App;
