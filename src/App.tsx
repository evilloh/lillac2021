import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calvary from './components/Calvary/Calvary';
import NewGame from './components/NewGame';
import Homepage from './components/Homepage';
import Earth from './components/geoguessr/Earth';

const lilac2021 = localStorage.getItem('lilac');

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      {lilac2021 ? <Route path='/' element={<Homepage/>}/> : <Route path='/' element={<NewGame/>}/>}
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/calvary' element={<Calvary/>}/>
      <Route path='/earth' element={<Earth/>}/>
    </Routes>
  </Router>
);
}

export default App;
