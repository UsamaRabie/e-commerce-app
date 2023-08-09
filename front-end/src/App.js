import React from 'react'
import Header1 from './components/header/Header1'
import Header2 from './components/header/Header2'
import Header3 from './components/header/Header3'
import { ColorModeContext, useMode } from './Theme';
import { ThemeProvider } from '@emotion/react';
import {  CssBaseline } from '@mui/material';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import ScrollToTopFab from './components/scroll/Scroll';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header1/>
        <Header2/>
        <Header3/>
        <Hero/>
        <Main/>
        <Footer/>
        <ScrollToTopFab/>  
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App