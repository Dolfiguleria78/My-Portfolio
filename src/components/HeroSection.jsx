import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from '../icons/lucideIcons'
import Button from './Button'
import './HeroSection.css'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="greeting">
            <span>I am Dolfi Guleria</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="hero-title">
            Software Developer | Java & C++
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-description">
            Highly skilled Software Developer proficient in Java, C++, Spring Boot, and React.js, with extensive experience in creating high-performance backends and interactive frontends. Experienced in REST API design and software architecture
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <Button variant="primary">
              <Download size={18} />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="hero-socials">
            <a 
              href="https://linkedin.com/in/dolfi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/dolfiguleria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div 
          className="hero-image"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="profile-frame">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop" 
              alt="Dolfi Guleria Profile" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
