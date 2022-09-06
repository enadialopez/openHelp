import Home from './components/Home'
import About from './components/About'
import Member from './components/Member'
import NavBar from './components/NavBar'
import Step from './components/Step';

import Donate from './components/temporal/Donate';
import MyNFT from './components/temporal/MyNFT';

import './App.css'
function App() {
    

  return (
    <>
      <NavBar />
      <div className='main_sections'>
        <Home />
        <About />
        <Step />
        {/* <Participant /> */}
        <Donate />
        <MyNFT />
      </div>
    </>
  );
}

export default App;
