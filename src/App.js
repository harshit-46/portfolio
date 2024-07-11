import './App.css';

import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Getcontact from './components/Getcontact';
import Bottom from './components/Bottom';

//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Tech />
      <Projects />
      <Getcontact />
      <Bottom />
    </div>
  );
}

export default App;