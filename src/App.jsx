import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About'
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './App.css';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

function App() {
  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} disableEqualOverflow={true}>
            <Grid xs={12} md={6}>
              <Navigation />
            </Grid>
            <Grid xs={12} md={6}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contacts' element={<Contacts />} />
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