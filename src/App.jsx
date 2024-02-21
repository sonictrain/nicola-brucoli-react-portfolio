import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About'
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
        </Routes>
      </Router>
    </>
  )
}

export default App