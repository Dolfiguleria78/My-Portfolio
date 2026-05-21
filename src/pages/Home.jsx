import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../icons/lucideIcons'
import HeroSection from '../components/HeroSection'
import './Pages.css'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' },
    },
  }

  const skills = [
    { name: 'React.js', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 78 },
  ]

  const projects = [
    {
      title: 'Weather Forecasting App',
      description: 'Real-time weather dashboard built with React.js and weather APIs',
      tags: ['React', 'API', 'CSS3'],
      icon: '🌤️',
    },
    {
      title: 'Hospital Management System',
      description: 'Frontend modules for patient registration and appointment scheduling',
      tags: ['React', 'Forms', 'UI/UX'],
      icon: '🏥',
    },
    {
      title: 'Job Seeking Portal',
      description: 'Full MERN stack job portal with listings and search workflows',
      tags: ['MERN', 'Node.js', 'MongoDB'],
      icon: '💼',
    },
  ]

  return (
    <div className="page page-home">
      <HeroSection />

      {/* Featured Projects Section */}
      <motion.section 
        className="featured-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="section-header">
            <h2>Featured Projects</h2>
            <p>A selection of my recent work and technical projects</p>
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="section-cta"
          >
            <Link to="/portfolio" className="btn btn-secondary">
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Preview Section */}
      <motion.section 
        className="skills-preview-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="section-header">
            <h2>Core Skills</h2>
            <p>Technologies and tools I work with regularly</p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="skill-bar">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="section-cta"
          >
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="cta-container">
          <motion.h2 variants={itemVariants}>Ready to Collaborate?</motion.h2>
          <motion.p variants={itemVariants}>
            Let's build something amazing together. I'm always interested in new projects and opportunities.
          </motion.p>
          <motion.div variants={itemVariants} className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <a href="mailto:dolfiguleria130@gmail.com" className="btn btn-secondary">Send Email</a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
