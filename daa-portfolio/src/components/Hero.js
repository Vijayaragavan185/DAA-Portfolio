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
          
          <div className="student-info">
            <h4>Vijayaragavan S</h4>
            <p className="reg-number">RA2311003010595</p>
            <p className="semester">4th Semester</p>
          </div>
          
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
          {/* Option 1: Using imported image */}
          <div className="algo-visual" style={{
            backgroundImage: `radial-gradient(
              circle,
              rgba(100, 255, 218, 0.1) 0%,
              rgba(100, 255, 218, 0.05) 50%,
              transparent 70%
            )`
          }}>
            <div className="rotating-image" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Profile1.png)`,
            }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
