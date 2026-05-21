import { motion } from 'framer-motion'
import { Code, Zap, BookOpen } from '../icons/lucideIcons'
import './About.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  }

  const stats = [
    { number: '2+', label: 'Years Experience', icon: BookOpen },
    { number: '2', label: 'Major Projects', icon: Code },
    { number: '12+', label: 'Technologies', icon: Zap },
  ]

  const skills = [
    {
      category: 'Languages',
      icon: '💻',
      techs: ['Java', 'C++', 'JavaScript', 'React.js'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      techs: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
      category: 'Frontend',
      icon: '🎨',
      techs: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      techs: ['Git', 'Docker', 'Render', 'VS Code'],
    },
  ]

  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <p className="section-subtitle">Building digital experiences with passion and precision</p>
          </motion.div>

          <div className="about-grid">
            {/* Left Column - Bio & Stats */}
            <motion.div className="about-left" variants={itemVariants}>
              {/* Bio */}
              <motion.div className="bio-card" variants={itemVariants}>
                <h3>Software Developer</h3>
                <p>
                  I'm a Computer Science undergraduate from Maharishi Markandeshwar Engineering College with expertise in Java, C++, Spring Boot, and React.js. Passionate about building scalable web applications and solving complex problems with clean, efficient code. Currently focused on backend development with REST APIs and modern software development practices.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div className="stats-grid" variants={containerVariants}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div key={index} className="stat-card" variants={itemVariants}>
                      <Icon className="stat-icon" size={32} />
                      <h4>{stat.number}</h4>
                      <p>{stat.label}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div className="about-right" variants={itemVariants}>
              <motion.div className="skills-grid" variants={containerVariants}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h4>{skill.category}</h4>
                    </div>
                    <div className="skill-techs">
                      {skill.techs.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
