import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Navigation from './components/navigation'
import About from './pages/about'
import Contacts from './pages/contacts'
import Projects from './pages/projects'
import Skills from './pages/skills'
import './App.css'

function App() {
  return (
    <>
      <h1>Nicola Brucoli</h1>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
