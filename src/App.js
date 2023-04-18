import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addevent from './components/Addevnt/Addevent';
import Navigation from './components/Navigation/Navigation';
import Events from './components/Events/Events';


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
          <Routes>
              <Route path='/' element={<Addevent />} />
              <Route path='/events' element={<Events />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
