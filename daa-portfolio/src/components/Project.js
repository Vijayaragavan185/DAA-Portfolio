// // Project.js
// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import './Project.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// function Project() {
//   const slideImages = [
//     {
//       title: 'Problem Statement',
//       description: 'The Maximum Subarray Problem involves finding the contiguous subarray within a one-dimensional array of numbers that has the largest possible sum. This is crucial in financial analysis for identifying optimal trading windows.',
//       url: '/assets/problem-statement.png'
//     },
//     {
//       title: 'Motivation & Applications',
//       description: 'This algorithm has direct applications in financial technology like Zerodha Streak momentum scanner, helping traders identify stock momentum patterns and determine optimal entry/exit points.',
//       url: '/assets/motivation.png'
//     },
//     {
//       title: 'Implementation in Trading',
//       description: 'In trading platforms, the algorithm continuously processes price data for stocks, ranks them based on momentum strength, and presents top stocks to traders in a watchlist with mobile notifications.',
//       url: '/assets/trading-implementation.png'
//     },
//     {
//       title: 'Algorithm Implementation',
//       description: 'Using Kadane\'s algorithm with O(n) time complexity, the system tracks price changes as percentages and identifies the strongest continuous upward momentum period.',
//       url: '/assets/algorithm.png'
//     },
//     {
//       title: 'Performance Analysis',
//       description: 'Kadane\'s Algorithm achieves O(n) linear time complexity compared to O(n²) for brute force approaches, making it suitable for real-time market data analysis of thousands of stocks.',
//       url: '/assets/performance.png'
//     }
//   ];

//   // Custom arrow components
//   const buttonStyle = {
//     background: 'rgba(0,0,0,0.2)',
//     border: '0px',
//     borderRadius: '50%',
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     color: '#64ffda',
//   };

//   const properties = {
//     duration: 3000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     scale: 1.0,
//     arrows: true,
//     autoplay: false,  // Disable autoplay initially for testing
//     canSwipe: true,
//     prevArrow: <button style={buttonStyle}><FaArrowLeft /></button>,
//     nextArrow: <button style={buttonStyle}><FaArrowRight /></button>
//   };

//   return (
//     <section id="project" className="project">
//       <div className="container">
//         <h2>Real-World Application</h2>
//         <h3>Maximum Subarray Algorithm in Trading Applications</h3>
        
//         <div className="slideshow-container">
//           <Slide {...properties}>
//             {slideImages.map((slideImage, index) => (
//               <div key={index} className="each-slide">
//                 <div className="slide-content">
//                   <h4>{slideImage.title}</h4>
//                   <p>{slideImage.description}</p>
//                   <img 
//                     src={slideImage.url} 
//                     alt={slideImage.title}
//                     className="slide-image-content"
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slide>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Project;
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Project.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Project() {
  // Custom arrow components
  const buttonStyle = {
    background: 'rgba(0,0,0,0.2)',
    border: '0px',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#64ffda',
  };

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: false, // Changed to false to avoid the empty slide issue
    indicators: true,
    scale: 1.0,
    arrows: true,
    autoplay: false,
    canSwipe: true,
    prevArrow: <button style={buttonStyle}><FaArrowLeft /></button>,
    nextArrow: <button style={buttonStyle}><FaArrowRight /></button>
  };

  return (
    <section id="project" className="project">
      <div className="container">
        <h2>Real-World Application</h2>
        <h3>Maximum Subarray Algorithm in Trading Applications</h3>
        
        <div className="slideshow-container">
          <Slide {...properties}>
            {/* Directly rendering each slide instead of mapping from an array */}
            <div className="each-slide">
              <div className="slide-content">
                <h4>Problem Statement</h4>
                <p>The Maximum Subarray Problem involves finding the contiguous subarray within a one-dimensional array of numbers that has the largest possible sum. This is crucial in financial analysis for identifying optimal trading windows.</p>
                <img 
                  src="/assets/problem-statement.png" 
                  alt="Problem Statement"
                  className="slide-image-content"
                />
              </div>
            </div>
            
            <div className="each-slide">
              <div className="slide-content">
                <h4>Motivation & Applications</h4>
                <p>This algorithm has direct applications in financial technology like Zerodha Streak momentum scanner, helping traders identify stock momentum patterns and determine optimal entry/exit points.</p>
                <img 
                  src="/assets/motivation.png" 
                  alt="Motivation & Applications"
                  className="slide-image-content"
                />
              </div>
            </div>
            
            <div className="each-slide">
              <div className="slide-content">
                <h4>Implementation in Trading</h4>
                <p>In trading platforms, the algorithm continuously processes price data for stocks, ranks them based on momentum strength, and presents top stocks to traders in a watchlist with mobile notifications.</p>
                <img 
                  src="/assets/trading-implementation.png" 
                  alt="Implementation in Trading"
                  className="slide-image-content"
                />
              </div>
            </div>
            
            <div className="each-slide">
              <div className="slide-content">
                <h4>Algorithm Implementation</h4>
                <p>Using Kadane's algorithm with O(n) time complexity, the system tracks price changes as percentages and identifies the strongest continuous upward momentum period.</p>
                <img 
                  src="/assets/algorithm.png" 
                  alt="Algorithm Implementation"
                  className="slide-image-content"
                />
              </div>
            </div>
            
            <div className="each-slide">
              <div className="slide-content">
                <h4>Performance Analysis</h4>
                <p>Kadane's Algorithm achieves O(n) linear time complexity compared to O(n²) for brute force approaches, making it suitable for real-time market data analysis of thousands of stocks.</p>
                <img 
                  src="/assets/performance.png" 
                  alt="Performance Analysis"
                  className="slide-image-content"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Project;
