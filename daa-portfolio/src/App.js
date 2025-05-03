import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LabExperiments from './components/LabExperiments';
import Project from './components/Project';
import CodingAchievements from './components/CodingAchievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <LabExperiments />
      <Project />
      <CodingAchievements />
      <Footer />
    </div>
  );
}

export default App;
