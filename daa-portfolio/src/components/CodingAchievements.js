import React from 'react';
import './CodingAchievements.css';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserGraduate, FaTrophy } from 'react-icons/fa';


function CodingAchievements() {
  // Updated categories based on your specific completed problems
  const categories = [
    { name: 'Searching Techniques', count: 5, easy: 3, medium: 1, hard: 1 },
    { name: 'Sorting Techniques', count: 5, easy: 3, medium: 1, hard: 1 },
    { name: 'Divide & Conquer', count: 5, easy: 3, medium: 1, hard: 1 },
    { name: 'Greedy Algorithms', count: 3, easy: 3, medium: 0, hard: 0 },
    { name: 'Dynamic Programming', count: 3, easy: 3, medium: 0, hard: 0 },
    { name: 'Backtracking', count: 4, easy: 3, medium: 1, hard: 0 },
    { name: 'Randomized Quicksort', count: 3, easy: 3, medium: 0, hard: 0 }
  ];

  // Calculate total problems
  const totalProblems = categories.reduce((sum, category) => sum + category.count, 0);

  return (
    <section id="coding" className="coding-achievements">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Coding Achievements
        </motion.h2>
        
        <div className="achievements-content">
          <motion.div 
            className="achievements-summary"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="achievement-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaCode />
                </div>
                <div className="stat-number">{totalProblems}</div>
                <div className="stat-title">DAA Problems Solved</div>
              </div>
            </div>
            
            <div className="achievement-description">
              <p>
                I have successfully completed {totalProblems} algorithmic challenges on our college coding platform, 
                demonstrating proficiency in a wide range of algorithm design paradigms and problem-solving techniques.
              </p>
              <p>
                Each problem required careful analysis of time and space complexity constraints, 
                implementation of efficient data structures, and optimization of solution approaches.
              </p>
              
              <div className="additional-stats">
                <div className="mini-stat">
                  <div className="mini-icon"><FaLaptopCode /></div>
                  <div className="mini-info">
                    <span>3 Hard Problems</span>
                    <span>Solved complex algorithmic challenges</span>
                  </div>
                </div>
                
                <div className="mini-stat">
                  <div className="mini-icon"><FaTrophy /></div>
                  <div className="mini-info">
                    <span>4 Medium Problems</span>
                    <span>Tackled intermediate difficulty challenges</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="achievements-showcase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="achievement-image">
              <img 
                src={`${window.location.origin}/assets/daa-achievements.png`} 
                alt="DAA Problem Solving Visualization" 
                className="achievement-screenshot"
              />
              <div className="image-overlay">
                <span>{totalProblems} Problems Solved</span>
              </div>
            </div>
            
            <div className="problem-categories">
              {categories.map((category, index) => (
                <motion.div 
                  className="category-item" 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="category-info">
                    <div className="category-name">{category.name}</div>
                    <div className="category-details">
                      <span className="difficulty easy">{category.easy} Easy</span>
                      {category.medium > 0 && <span className="difficulty medium">{category.medium} Medium</span>}
                      {category.hard > 0 && <span className="difficulty hard">{category.hard} Hard</span>}
                    </div>
                  </div>
                  <div className="category-bar">
                    <div 
                      className="category-fill" 
                      style={{ width: `${(category.count / 8) * 100}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CodingAchievements;
