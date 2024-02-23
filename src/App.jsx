import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BioCard from './components/BioCard'
import ContactForm from './pages/ContactForm';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import '@fontsource/inter';


function App() {
  return (
    <>
      <CssVarsProvider>
        <CssBaseline />
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
      </CssVarsProvider>
    </>
  )
}

export default App;