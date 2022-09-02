import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Step from './components/Step';
import Participant from './components/Participant';
import NavBar from './components/NavBar';

function App() {
    

  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <Step />
      <Participant />
    </BrowserRouter>
  );
}

export default App;
