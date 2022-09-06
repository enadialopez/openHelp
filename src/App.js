import Home from './components/Home'
import About from './components/About'
import Member from './components/Member'
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
        <Member />
      </div>
    </>
  );
}

export default App;
