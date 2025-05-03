import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Project.css';

function Project() {
  // Create slideshow content based on your PowerPoint presentation
  const slideImages = [
    {
      title: 'Problem Statement',
      description: 'The Maximum Subarray Problem involves finding the contiguous subarray within a one-dimensional array of numbers that has the largest possible sum. This is crucial in financial analysis for identifying optimal trading windows.',
      url: '/assets/problem-statement.png'
    },
    {
      title: 'Motivation & Applications',
      description: 'This algorithm has direct applications in financial technology like Zerodha Streak momentum scanner, helping traders identify stock momentum patterns and determine optimal entry/exit points.',
      url: '/assets/motivation.png'
    },
    {
      title: 'Implementation in Trading',
      description: 'In trading platforms, the algorithm continuously processes price data for stocks, ranks them based on momentum strength, and presents top stocks to traders in a watchlist with mobile notifications.',
      url: '/assets/trading-implementation.png'
    },
    {
      title: 'Algorithm Implementation',
      description: 'Using Kadane\'s algorithm with O(n) time complexity, the system tracks price changes as percentages and identifies the strongest continuous upward momentum period.',
      url: '/assets/algorithm.png'
    },
    {
      title: 'Performance Analysis',
      description: 'Kadane\'s Algorithm achieves O(n) linear time complexity compared to O(n²) for brute force approaches, making it suitable for real-time market data analysis of thousands of stocks.',
      url: '/assets/performance.png'
    }
  ];

  // Modified slideshow properties
  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: false,  // Try disabling autoplay
    canSwipe: true,   // Enable manual swiping
    pauseOnHover: true
  };

  return (
    <section id="project" className="project">
      <div className="container">
        <h2>Real-World Application</h2>
        <h3>Maximum Subarray Algorithm in Trading Applications</h3>
        
        <div className="slideshow-container">
          <Slide {...properties}>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="each-slide">
                <div className="slide-content">
                  <h4>{slideImage.title}</h4>
                  <p>{slideImage.description}</p>
                  <img 
                    src={process.env.PUBLIC_URL + slideImage.url} 
                    alt={slideImage.title}
                    className="slide-image-content"
                  />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Project;
