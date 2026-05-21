import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Home } from '../icons/lucideIcons'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
    ],
    Connect: [
      { label: 'Email', href: 'mailto:dolfiguleria130@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/Dolfiguleria78' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/dolfi-guleria-a53201292' },
      { label: 'Contact', href: '#contact' },
    ],
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Dolfiguleria78' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/dolfi-guleria-a53201292' },
    { icon: Mail, label: 'Email', url: 'mailto:dolfiguleria130@gmail.com' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="brand-icon">
              <Home size={32} />
            </div>
            <div>
              <h3>Dolfi</h3>
              <p>Full-Stack Developer & Tech Enthusiast</p>
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="footer-links-grid">
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} className="footer-links-section" variants={itemVariants}>
                <h4>{category}</h4>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        target={link.href.startsWith('http') ? '_blank' : '_self'} 
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Section */}
            <motion.div className="footer-links-section" variants={itemVariants}>
              <h4>Follow</h4>
              <div className="footer-social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-icon"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon size={22} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div className="footer-divider" variants={itemVariants}></motion.div>

        {/* Bottom Footer */}
        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Dolfi Guleria. All rights reserved.</p>
            <p className="footer-tech">Built with React • Vite • Framer Motion</p>
          </div>

          <motion.button
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  )
}
