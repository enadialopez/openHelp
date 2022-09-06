import Home from './components/Home'
import About from './components/About'
import Member from './components/Member'
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import Step from './components/Step'
import './App.css'

function App() {
    
  return (
    <>
      <NavBar />
      <div className='main_sections'>
        <Home />
        <About />
        <Cards />
        <Step />
        <Member />
      </div>
    </>
  );
}

export default App;
