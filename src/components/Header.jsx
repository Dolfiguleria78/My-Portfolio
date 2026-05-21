import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Home, User, Briefcase, Mail, Share2, LinkIcon } from '../icons/lucideIcons'
import { motion } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/dolfi-guleria-a53201292', icon: LinkIcon },
    { name: 'GitHub', url: 'https://github.com/Dolfiguleria78', icon: Share2 },
  ]

  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  }

  const navItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: 'spring' },
    }),
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <span className="text-glow">D</span>olfi
          </Link>

          <button 
            className="menu-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      {isSidebarOpen && (
        <motion.div
          className="sidebar-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSidebar}
        />
      )}

      <motion.aside
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isSidebarOpen ? 'visible' : 'hidden'}
      >
        <div className="sidebar-content">
          {/* Profile Section */}
          <motion.div className="sidebar-profile">
            <div className="profile-avatar">D</div>
            <h3>Dolfi Guleria</h3>
            <p>Full Stack Developer</p>
          </motion.div>

          {/* Navigation Links */}
          <nav className="sidebar-nav">
            {navLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.path}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate={isSidebarOpen ? 'visible' : 'hidden'}
                >
                  <Link
                    to={link.path}
                    className="sidebar-nav-link"
                    onClick={closeSidebar}
                  >
                    <Icon size={20} />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Social Links */}
          <div className="sidebar-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          {/* Contact Info */}
          <div className="sidebar-contact">
            <p><strong>Phone:</strong><br />+91-7876834865</p>
            <p><strong>Email:</strong><br />dolfiguleria130@gmail.com</p>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
