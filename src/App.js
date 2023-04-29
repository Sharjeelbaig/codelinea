import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
   
 
        <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        </Routes>
 
   
  );
}

export default App;
