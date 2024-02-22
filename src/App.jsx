import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BioCard from './components/BioCard'
import ContactForm from './pages/ContactForm';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './App.css';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} disableEqualOverflow={true}>
            <Grid xs={12} md={6}>
              <BioCard />
              <Navigation />
            </Grid>
            <Grid xs={12} md={6}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='contactForm' element={<ContactForm />} />
                <Route path='projects' element={<Projects />} />
                <Route path='skills' element={<Skills />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </>
  )
}

export default App;