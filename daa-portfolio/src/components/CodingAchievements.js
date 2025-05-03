import React from 'react';
import './CodingAchievements.css';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserGraduate, FaTrophy } from 'react-icons/fa';

function CodingAchievements() {
  const categories = [
    { name: 'Sorting & Searching', count: 8 },
    { name: 'Dynamic Programming', count: 7 },
    { name: 'Graph Algorithms', count: 6 },
    { name: 'Greedy Algorithms', count: 5 },
    { name: 'Divide & Conquer', count: 4 }
  ];

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
                <div className="stat-number">30+</div>
                <div className="stat-title">DAA Problems Solved</div>
              </div>
            </div>
            
            <div className="achievement-description">
              <p>
                I have successfully completed over 30 algorithmic challenges on our college coding platform, 
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
                    <span>5 Hard Problems</span>
                    <span>Solved complex algorithmic challenges</span>
                  </div>
                </div>
                <div className="mini-stat">
                  <div className="mini-icon"><FaUserGraduate /></div>
                  <div className="mini-info">
                    <span>Top 15% in Class</span>
                    <span>Based on problem-solving rate</span>
                  </div>
                </div>
                <div className="mini-stat">
                  <div className="mini-icon"><FaTrophy /></div>
                  <div className="mini-info">
                    <span>3 Weekly Challenges</span>
                    <span>Won coding competitions</span>
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
            <div className="showcase-image">
              <div className="placeholder-showcase">
                <span>Coding Platform Achievements</span>
                <p>Screenshot of completed DAA problems on college platform</p>
              </div>
              <div className="image-overlay">
                <span>30+ Problems Solved</span>
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
                    <div className="category-count">{category.count} problems</div>
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
