import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BioCard from './components/BioCard'
import Footer from './components/Footer'
import ContactForm from './pages/ContactForm';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import '@fontsource/inter';

function App() {
  return (
    <div className='grid grid-cols-2 h-dvh bg-blue-900 text-slate-200'>
      <Router>
        <div className='overflow-y-auto flex flex-col h-screen justify-between p-20'>
          <div>
          <BioCard />
          <Navigation />
          </div>
          <Footer />
        </div>
        <div className='overflow-y-auto'>
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

// px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0