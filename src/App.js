import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import AboutUs from './components/AboutUs/AboutUs'
import ProjDom from './components/ProjDom/ProjDom';
import Particle from './components/Particle/Particle';
import WebCursor from './components/WebCursor/WebCursor';
import UnderBuild from './components/UnderBuild/UnderBuild'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Particle />
        <WebCursor />
        <Nav />
          <Routes>
            <Route path = "/" element={
              <>
                <Landing />
                <AboutUs />
                <ProjDom />
              </>
            } />
            <Route path = "/underConstruction" element={
              <UnderBuild/>
            } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
