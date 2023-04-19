import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addevent from './components/Addevent/Addevent';
import Navigation from './components/Navigation/Navigation';
import Events from './components/Events/Events';
import Editevent from './components/Editevent/Editevent';
import Deletevent from './components/Deletevent/Deletevent';


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
          <Routes>
              <Route path='/' element={<Addevent />} />
              <Route path='/events' element={<Events />} />
              <Route path='/edit' element={<Editevent />} />
              <Route path='/delete' element={<Deletevent />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
