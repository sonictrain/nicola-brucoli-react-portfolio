import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Bio from './components/Bio'
import Footer from './components/Footer'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import "inter-ui/inter.css";

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-midnightBlue-200 text-stone-200'>
      <Router>
        <div className='overflow-y-auto flex flex-col md:h-screen justify-between p-10 md:p-14 lg:p-20'>
          <div>
            <Bio />
            <Navigation />
          </div>
          <div className='hidden md:block'>
            <Footer />
          </div>
        </div>
        <div className='px-10 pt-10 md:px-14 md:pt-14 lg:px-20 lg:pt-20 md:h-screen md:overflow-y-scroll'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='skills' element={<Skills />} />
          </Routes>
        </div>
        <div className='p-10 mt-auto md:p-14 lg:p-20 md:hidden'>
            <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;