import React from 'react';
import AnimatedCursor from "react-animated-cursor"
import './App.css';
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import AboutUs from './components/AboutUs/AboutUs'
import ProjDom from './components/ProjDom/ProjDom';
import Particle from './components/Particle/Particle';

function App() {
  return (
    <div className="App">
      <Particle />
      <AnimatedCursor 
        innerSize={8}
        outerSize={35}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
        hasBlendMode={true} 
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      <Nav />
      <Landing />
      <AboutUs />
      <ProjDom />
    </div>
  );
}

export default App;
