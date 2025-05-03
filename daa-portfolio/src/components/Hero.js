import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Design & Analysis of Algorithms</h1>
          <h3>B.Tech CSE Core | SRM University</h3>
          <p>
            Welcome to my portfolio showcasing my journey through algorithm implementations,
            real-world applications, and problem-solving achievements in DAA.
          </p>
          <div className="hero-buttons">
            <a href="#experiments" className="btn">View My Work</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="algo-visual"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
