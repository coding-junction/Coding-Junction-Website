import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import AboutUs from './components/AboutUs/AboutUs'
import ProjDom from './components/ProjDom/ProjDom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <AboutUs />
      <ProjDom />
    </div>
  );
}

export default App;
