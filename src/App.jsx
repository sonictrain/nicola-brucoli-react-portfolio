import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Bio from './components/Bio'
import Footer from './components/Footer'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ThemeSwitch from './components/ThemeSwitch';
import "inter-ui/inter.css";

// App component
const App = () => {
  return (
    // responsive grid
    <div className='bg-midnightBlue-200 text-stone-200 flex flex-col md:flex-row'>
      <ThemeSwitch />
      {/* Router setup */}
      <Router>
        {/* Left column */}
        <div className='h-screen basis-1/2 flex flex-col justify-between md:sticky md:top-0 p-10 lg:p-20'>
          <div>
            <Bio />
            <Navigation />
          </div>
          <div className='hidden md:block'>
            {/* Footer for big screen only */}
            <Footer />
          </div>
        </div>
        {/* Right column */}
        <div className='min-h-screen basis-1/2 p-10 lg:p-20'>
          {/* Routes list */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='skills' element={<Skills />} />
          </Routes>
        </div>
        <div className='mt-auto md:hidden p-10'>
            {/* Footer for small screen only */}
            <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;