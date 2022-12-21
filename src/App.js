import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './screens/Home/Home';
import Project from './screens/Project/Project';
import { motion, AnimatePresence } from 'framer-motion';

function App() {

  const location =  useLocation();

  //console.log(location);

  return (
    <div className="App">
       <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
          </Routes>
       </AnimatePresence>
    </div>
  );
}

export default App;
