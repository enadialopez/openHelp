import Home from './components/Home'
import About from './components/About'
import Participant from './components/Participant'
import NavBar from './components/NavBar'
import Step from './components/Step';
import './App.css'
function App() {
    

  return (
    <>
      <NavBar />
      <div className='main_sections'>
        <Home />
        <About />
        <Step />
        <Participant />
      </div>
    </>
  );
}

export default App;
