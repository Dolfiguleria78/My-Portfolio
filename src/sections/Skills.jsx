import { motion } from 'framer-motion'
import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  }

  const skillsData = [
    { name: 'Java', level: 88, icon: '☕' },
    { name: 'C++', level: 85, icon: '⚙️' },
    { name: 'JavaScript', level: 87, icon: '📜' },
    { name: 'React.js', level: 85, icon: '⚛️' },
    { name: 'Spring Boot', level: 83, icon: '🌱' },
    { name: 'Node.js', level: 82, icon: '📦' },
    { name: 'Express.js', level: 82, icon: '🛣️' },
    { name: 'REST APIs', level: 85, icon: '🔌' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'Docker', level: 78, icon: '🐳' },
    { name: 'Git & GitHub', level: 88, icon: '🔀' },
    { name: 'DBMS', level: 82, icon: '🗄️' },
  ]

  return (
    <section className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">My <span className="highlight">Skills</span></h2>
            <p className="section-subtitle">Proficiencies in modern web development technologies</p>
          </motion.div>

          {/* Skills Icon Grid Container with Fixed Height */}
          <div className={`skills-grid-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <motion.div className="skills-icon-grid" variants={containerVariants}>
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.05 }}
                >
                  <div className="skill-card-inner">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-percentage-display">{skill.level}%</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient Fade Overlay */}
            {!isExpanded && <div className="skills-gradient-fade"></div>}
          </div>

          {/* View More / Show Less Button */}
          <div className="skills-button-container">
            <motion.button
              className="skills-view-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {isExpanded ? 'Show Less' : 'View More'}
              <span className={`arrow ${isExpanded ? 'up' : 'down'}`}>↓</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
