import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Getcontact from './components/Getcontact';
import Bottom from './components/Bottom';
import Welcome from './components/Welcome';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/welcome" element={<Welcome/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/skills" element={<Tech/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/contact" element={<Getcontact/>}></Route>
          <Route exact path="/resume" element={<Resume/>}></Route>
          <Route exact path="/bottom" element={<Bottom/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;