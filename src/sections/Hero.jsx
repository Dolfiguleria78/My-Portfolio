import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from '../icons/lucideIcons'
import profileImage from '../assets/profile.jpg'
import './Hero.css'

export default function Hero() {
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
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Text - Left Side */}
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div className="hero-header" variants={itemVariants}>
              <motion.p className="hero-intro" variants={itemVariants}>
                I am Dolfi
              </motion.p>
              <motion.h1 className="hero-title" variants={itemVariants}>
                Software Developer <span className="title-separator">|</span> Java & C++
              </motion.h1>
            </motion.div>

            <motion.p className="hero-tagline" variants={itemVariants}>
              Highly skilled Software Developer proficient in Java, C++, Spring Boot, and React.js, with extensive experience in creating high-performance backends and interactive frontends. Experienced in REST API design and software architecture
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="https://drive.google.com/file/d/10XLdY954TmXv0i9OaduGEE0cpysVbibt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="hero-socials" variants={itemVariants}>
              <motion.a
                href="https://linkedin.com/in/dolfi-guleria-a53201292"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, translateY: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/Dolfiguleria78"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, translateY: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image - Right Side */}
          <motion.div className="hero-image-wrapper" variants={itemVariants}>
            <div className="hero-image-container">
              <img
                src={profileImage}
                alt="Dolfi Guleria - Software Developer"
                className="hero-image"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
