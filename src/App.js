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
import Login from './components/Login/Login';
import Gallery from './components/Gallery/Gallery';
/* import ComPrtn from './components/ComPrtn/ComPrtn'; */
import DownApp from './components/DownApp/DownApp';
import Archive from './components/Archive/Archive';
import Events from './components/EventsPage/EventsPage';
import Team from './components/Team/Team';
import Registration from './components/Registration/Registration';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import ViewUpcomingEve from './components/UpcomingEvents/ViewUpcomingEve/ViewUpcomingEve';
import TQResponse from './components/UpcomingEvents/ViewUpcomingEve/TQResponse/TQResponse';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Particle />
        {/* <WebCursor /> */}
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Landing />
              <UpcomingEvents />
              <AboutUs />
              <ProjDom />
              <Gallery />
              /* <ComPrtn /> */
            </>
          } />
          <Route path="/underConstruction" element={
            <UnderBuild />
          } />
          <Route path="/events" element={
            <Events />
          } />
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/register" element={
            <Registration />
          } />
          <Route path="/download-app" element={
            <DownApp />
          } />
          <Route path="/about-us-more" element={
            <UnderBuild />
          } />
          <Route path="/team" element={
            <Team />
          } />
          <Route path="/contact-us" element={
            <UnderBuild />
          } />
          <Route path="/archives" element={
            <Archive />
          } />
          <Route path="/view-event" element={
            <ViewUpcomingEve />
          } />
          <Route path="/thank-you-for-your-response" element={
            <TQResponse />
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
