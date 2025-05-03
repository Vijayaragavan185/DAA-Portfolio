import React, { useState } from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import { FaChartLine, FaClock, FaRobot, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Problem Statement',
      content: 'In financial markets, identifying the period of maximum cumulative returns is crucial for optimal entry and exit points in trading.',
      image: 'assets/problem-statement.jpg' // You'll need to add this image
    },
    {
      title: 'Maximum Subarray Algorithm',
      content: 'The algorithm efficiently finds the contiguous subarray within a one-dimensional array of numbers which has the largest sum.',
      image: 'assets/algorithm.jpg'
    },
    {
      title: 'Application to Trading',
      content: 'By analyzing price fluctuations as an array of differences, we identify the period with maximum potential profit.',
      image: 'assets/trading-app.jpg'
    },
    {
      title: 'Implementation',
      content: 'Implemented Kadane\'s algorithm with O(n) time complexity, making it suitable for real-time market data analysis.',
      image: 'assets/implementation.jpg'
    },
    {
      title: 'Results & Insights',
      content: 'The algorithm accurately identified optimal trading windows in historical data, with a 72% success rate in test scenarios.',
      image: 'assets/results.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="project" className="project">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Real-World Application
        </motion.h2>
        
        <div className="project-subtitle">
          <h3>Maximum Subarray Algorithm in Trading Applications</h3>
        </div>
        
        <div className="project-content">
          <motion.div 
            className="project-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              In this project, I applied the Maximum Subarray algorithm to financial market data to identify optimal 
              trading opportunities. This algorithm helps traders determine the best entry and exit points by finding 
              periods of maximum cumulative returns.
            </p>
            
            <div className="project-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaChartLine />
                </div>
                <h4>Market Analysis</h4>
                <p>Identifies optimal trading windows in volatile markets</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaClock />
                </div>
                <h4>Efficient Algorithm</h4>
                <p>O(n) time complexity using Kadane's algorithm</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaRobot />
                </div>
                <h4>Algorithmic Trading</h4>
                <p>Powers automated decision support systems</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="project-slideshow"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="slide-content">
                    <h4>{slide.title}</h4>
                    <p>{slide.content}</p>
                    <div className="slide-image">
                      {/* Replace with actual image sources */}
                      <div className="placeholder-image">
                        <span>{slide.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="slideshow-controls">
                <button className="slide-btn prev" onClick={prevSlide}>
                  <FaArrowLeft />
                </button>
                <div className="slide-indicators">
                  {slides.map((_, index) => (
                    <span 
                      key={index} 
                      className={`indicator ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                <button className="slide-btn next" onClick={nextSlide}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Project;
