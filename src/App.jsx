import { Routes, Route, Link } from "react-router-dom";
import './App.css'

import Home from './component/Home';
import Blue from './component/Blue';
import Red from './component/Red';


function App() {


  return (
    
    <div id="container">
    
    <div id="navbar">
        <Link to="/home">home</Link>
        <Link to="/blue">blue</Link>
       <Link to="/red">red</Link>
      
    </div>
    <div id="main-section">
      <Routes>
       <Route path="/blue" element={<Blue />} />
       <Route path="/red" element={<Red />} />
       <Route path="/home" element={<Home />} />
      </Routes>
      </div>
    </div>
     
  )
}

export default App


