import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BioCard from './components/BioCard'
import ContactForm from './pages/ContactForm';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import '@fontsource/inter';

function App() {
  return (
    <div className='grid grid-cols-2 h-dvh'>
      <Router>
        <div className='bg-blue-400 overflow-y-auto flex flex-col h-screen justify-center'>
          <BioCard />
          <Navigation />
        </div>
        <div className='bg-blue-200 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contactForm' element={<ContactForm />} />
            <Route path='projects' element={<Projects />} />
            <Route path='skills' element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;