import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Destination' element={<Destination/>}/>
          <Route path='Crew' element={<Crew/>}/>
          <Route path='Technology' element={<Technology/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
