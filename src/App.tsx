import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calvary from './components/Calvary';
import Homepage from './components/Homepage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/calvary' element={<Calvary/>}/>
      <Route path='/geoguessr' element={<Calvary/>}/>
    </Routes>
  </Router>
);

export default App;
