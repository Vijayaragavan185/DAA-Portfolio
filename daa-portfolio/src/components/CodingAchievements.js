import React from 'react';
import './CodingAchievements.css';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTrophy, FaAward } from 'react-icons/fa';

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

  // Codeforces problems data from your screenshot
  const codeforcesSolutions = [
    { id: '1178A', name: 'Prime Minister', date: 'May/04/2025', time: '46 ms' },
    { id: '1097A', name: 'Gennady and a Card Game', date: 'May/04/2025', time: '61 ms' },
    { id: '1080B', name: 'Margarite and the best present', date: 'May/04/2025', time: '46 ms' },
    { id: '1030A', name: 'In Search of an Easy Problem', date: 'May/04/2025', time: '61 ms' },
    { id: '1011A', name: 'Stages', date: 'May/04/2025', time: '62 ms' }
  ];

  // Calculate total problems
  const daaProblems = categories.reduce((sum, category) => sum + category.count, 0);
  const totalProblems = daaProblems + codeforcesSolutions.length;

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
                <div className="stat-title">Algorithm Problems Solved</div>
              </div>
            </div>
            
            <div className="achievement-description">
              <p>
                I have successfully completed {daaProblems} algorithmic challenges on our college coding platform and {codeforcesSolutions.length} problems on Codeforces, 
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
                
                <div className="mini-stat">
                  <div className="mini-icon"><FaAward /></div>
                  <div className="mini-info">
                    <span>5 Codeforces Problems</span>
                    <span>Competitive programming achievements</span>
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
            {/* Codeforces Problems Table */}
            <div className="codeforces-container">
              <h3>Codeforces Solutions</h3>
              <div className="codeforces-table">
                <div className="codeforces-header">
                  <div className="cf-col problem-id">Problem ID</div>
                  <div className="cf-col problem-name">Problem Name</div>
                  <div className="cf-col problem-date">Date</div>
                  <div className="cf-col problem-time">Time</div>
                </div>
                {codeforcesSolutions.map((problem, index) => (
                  <motion.div 
                    className="codeforces-row"
                    key={problem.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="cf-col problem-id">{problem.id}</div>
                    <div className="cf-col problem-name">{problem.name}</div>
                    <div className="cf-col problem-date">{problem.date}</div>
                    <div className="cf-col problem-time">{problem.time}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="achievement-image">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/daa-achievements.png`} 
                alt="DAA Problem Solving Visualization" 
                className="achievement-screenshot"
              />
              <div className="image-overlay">
                <span>{totalProblems} Problems Solved</span>
              </div>
            </div>
            
            <div className="problem-categories">
              <h3>College DAA Problems</h3>
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
