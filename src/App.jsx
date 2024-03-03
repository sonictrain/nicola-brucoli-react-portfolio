import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Bio from './components/Bio'
import Footer from './components/Footer'
import ContactForm from './pages/ContactForm';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import "inter-ui/inter.css";

function App() {
  return (
    <div className='grid grid-cols-2 h-dvh bg-midnightBlue-200 text-stone-200'>
      <Router>
        <div className='overflow-y-auto flex flex-col h-screen justify-between p-20'>
          <div>
            <Bio />
            <Navigation />
          </div>
            <Footer />
        </div>
        <div className='overflow-y-auto px-20 pt-20'>
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