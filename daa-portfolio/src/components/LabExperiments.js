import React, { useState } from 'react';
import './LabExperiments.css';
import { motion } from 'framer-motion';
import ImagePopup from './ImagePopup'; // Import the popup component

function LabExperiments() {
  const [activeExperiment, setActiveExperiment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  
  // Complete experiments array with all your DAA lab experiments
  const experiments = [
    { 
      id: '1a', 
      name: 'Insertion Sort', 
      description: 'A simple sorting algorithm that builds the final sorted array one item at a time.',
      complexity: 'Time: O(n²) | Space: O(1)'
    },
    { 
      id: '1b', 
      name: 'Bubble Sort', 
      description: 'A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements and swaps them.',
      complexity: 'Time: O(n²) | Space: O(1)'
    },
    { 
      id: '2', 
      name: 'Linear & Binary Search', 
      description: 'Two fundamental search algorithms - one sequential and one using divide-and-conquer approach.',
      complexity: 'Linear Search: O(n) | Binary Search: O(log n)'
    },
    { 
      id: '3', 
      name: 'Merge Sort', 
      description: 'An efficient, stable, comparison-based, divide-and-conquer sorting algorithm.',
      complexity: 'Time: O(n log n) | Space: O(n)'
    },
    { 
      id: '4', 
      name: 'Quick Sort', 
      description: 'An efficient sorting algorithm that uses divide-and-conquer strategy with a pivot element.',
      complexity: 'Time: O(n log n) average, O(n²) worst | Space: O(log n)'
    },
    { 
      id: '5', 
      name: 'Strassen Matrix Multiplication', 
      description: 'An algorithm for matrix multiplication that is faster than the standard matrix multiplication algorithm.',
      complexity: 'Time: O(n^2.81) | Space: O(n²)'
    },
    { 
      id: '6', 
      name: 'Max-Min & Convex Hull', 
      description: 'Finding extrema in arrays and computing the convex hull of a set of points in the plane.',
      complexity: 'Max-Min: O(n) | Convex Hull: O(n log n)'
    },
    { 
      id: '7a', 
      name: 'Huffman Coding', 
      description: 'A lossless data compression algorithm that uses variable-length encoding for different characters.',
      complexity: 'Time: O(n log n) | Space: O(n)'
    },
    { 
      id: '7b', 
      name: 'Knapsack (Greedy)', 
      description: 'A problem in combinatorial optimization to maximize value while keeping weight under a limit.',
      complexity: 'Time: O(n log n) | Space: O(1)'
    },
    { 
      id: '8', 
      name: 'Longest Common Subsequence', 
      description: 'Finding the longest subsequence common to all sequences in a set of sequences.',
      complexity: 'Time: O(m×n) | Space: O(m×n)'
    },
    { 
      id: '9', 
      name: 'N Queens Problem', 
      description: 'The challenge of placing N chess queens on an N×N chessboard so that no two queens threaten each other.',
      complexity: 'Time: O(n!) | Space: O(n)'
    },
    { 
      id: '10', 
      name: 'Travelling Salesman Problem', 
      description: 'Finding the shortest possible route that visits each city exactly once and returns to the origin city.',
      complexity: 'Time: O(n!) | Space: O(n²)'
    },
    { 
      id: '11', 
      name: 'Randomized Quicksort', 
      description: 'A variation of quicksort where the pivot is chosen randomly to improve average-case performance.',
      complexity: 'Time: O(n log n) expected | Space: O(log n)'
    },
    { 
      id: '12', 
      name: 'String Matching Algorithms', 
      description: 'Algorithms for finding occurrences of a pattern string within a main text string.',
      complexity: 'KMP: O(n+m) | Rabin-Karp: O(n+m) average'
    }
  ];

  const handleCardClick = (id) => {
    setActiveExperiment(activeExperiment === id ? null : id);
  };
  
  const handleLearnMore = (e, exp) => {
    e.stopPropagation(); // Prevent card flip when clicking Learn More
    
    // Use the same two index page images for all experiments
    setPopupImages([
      { 
        src: "/assets/index-page-1.jpg", 
        alt: "Lab Experiment Index Page 1" 
      },
      { 
        src: "/assets/index-page-2.jpg", 
        alt: "Lab Experiment Index Page 2" 
      }
    ]);
    
    setShowPopup(true);
  };

  return (
    <section id="experiments" className="lab-experiments">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          DAA Lab Experiments
        </motion.h2>
        
        <div className="experiments-grid">
          {experiments.map((exp, index) => (
            <motion.div 
              className={`experiment-card ${activeExperiment === exp.id ? 'active' : ''}`}
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCardClick(exp.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="exp-number">{exp.id}</div>
                  <h3>{exp.name}</h3>
                  <div className="algorithm-visual">
                    <div className={`algo-animation animation-${exp.id.replace(/[a-z]/g, '')}`}></div>
                  </div>
                </div>
                <div className="card-back">
                  <h3>{exp.name}</h3>
                  <p>{exp.description}</p>
                  <div className="complexity">
                    <span>Complexity: {exp.complexity}</span>
                  </div>
                  
                  {/* Add Learn More button */}
                  <button 
                    className="learn-more-btn"
                    onClick={(e) => handleLearnMore(e, exp)}
                  >
                    Learn More
                  </button>
                  
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Add the popup component */}
      <ImagePopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        images={popupImages}
      />
    </section>
  );
}

export default LabExperiments;
