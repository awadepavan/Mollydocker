import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Events from './pages/Events.jsx';
import Shopwines from './pages/Shopwines.jsx';
import MollyClubs from './pages/MollyClubs.jsx';
import './App.css'
import CellarDoors from './pages/CellarDoors.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shopwines" element={<Shopwines />} />
        <Route path="/mollyclubs" element={<MollyClubs />} />
        <Route path="/cellardoors" element={<CellarDoors />} />
      </Routes>
    </Router>
  );
}

export default App;





