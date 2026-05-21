import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Share2, LinkIcon } from '../icons/lucideIcons'
import './Pages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Form submitted:', formData)
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

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

  return (
    <div className="page page-contact">
      <div className="page-container">
        <motion.div
          className="page-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants}>Get In Touch</motion.h1>
          <motion.p variants={itemVariants}>I'd love to hear from you. Let's discuss your next project!</motion.p>
        </motion.div>

        <motion.div
          className="contact-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="contact-info">
            <motion.div variants={itemVariants} className="info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Mail size={24} color="#00d4ff" />
                <h3>Email</h3>
              </div>
              <p>
                <a href="mailto:dolfiguleria130@gmail.com" style={{ color: '#00d4ff' }}>
                  dolfiguleria130@gmail.com
                </a>
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px' }}>
                I'll respond within 24 hours
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Phone size={24} color="#00d4ff" />
                <h3>Phone</h3>
              </div>
              <p>
                <a href="tel:+917876834865" style={{ color: '#00d4ff' }}>
                  +91-7876834865
                </a>
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px' }}>
                Available for calls and messages
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <MapPin size={24} color="#00d4ff" />
                <h3>Location</h3>
              </div>
              <p>Kangra, Himachal Pradesh, India</p>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px' }}>
                Open to remote opportunities
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="info-box">
              <h3 style={{ marginBottom: '15px' }}>Connect With Me</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://linkedin.com/in/dolfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '8px',
                    border: '2px solid rgba(0, 212, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00d4ff',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 212, 255, 0.1)'
                    e.target.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.boxShadow = 'none'
                  }}
                  title="LinkedIn"
                >
                  <LinkIcon size={20} />
                </a>
                <a
                  href="https://github.com/dolfiguleria"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '8px',
                    border: '2px solid rgba(0, 212, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00d4ff',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 212, 255, 0.1)'
                    e.target.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.boxShadow = 'none'
                  }}
                  title="GitHub"
                >
                  <Share2 size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </motion.div>

            <motion.button 
              variants={itemVariants}
              type="submit" 
              className="btn btn-primary"
              disabled={submitted}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Additional Info */}
        <motion.section
          style={{ marginTop: '80px', textAlign: 'center' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '30px' }}>
            Availability
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.1rem',
              color: '#888888',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}
          >
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </motion.p>
        </motion.section>
      </div>
    </div>
  )
}
