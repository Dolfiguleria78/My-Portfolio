import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, ArrowRight, MapPin, Phone, ExternalLink } from '../icons/lucideIcons'
import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Dolfiguleria78' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/dolfi-guleria-a53201292' },
    { icon: Mail, label: 'Email', url: 'mailto:dolfiguleria130@gmail.com' },
  ]

  return (
    <section className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header - CTA Style */}
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">Ready to <span className="highlight">Work Together?</span></h2>
            <p className="section-subtitle">
              I'm always interested in hearing about new projects and opportunities. Let's connect!
            </p>
          </motion.div>

          <motion.div className="contact-main" variants={itemVariants}>
            {/* Contact Form */}
            <div className="contact-form-section">
              <motion.div className="contact-form-wrapper" variants={itemVariants}>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{submitted ? 'Message Sent ✓' : 'Send Message'}</span>
                    {!submitted && <ArrowRight size={18} />}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div className="contact-info-grid" variants={itemVariants}>
                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>Kangra, Himachal Pradesh, India</p>
                  </div>
                  <ExternalLink size={20} className="external-icon" />
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href="mailto:dolfiguleria130@gmail.com">dolfiguleria130@gmail.com</a>
                  </div>
                  <ExternalLink size={20} className="external-icon" />
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <a href="tel:+917876834865">+91-7876834865</a>
                  </div>
                  <ExternalLink size={20} className="external-icon" />
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <Linkedin size={24} />
                  </div>
                  <div className="info-content">
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/in/dolfi-guleria-a53201292" target="_blank" rel="noopener noreferrer">
                      /in/dolfi-guleria-a53201292
                    </a>
                  </div>
                  <ExternalLink size={20} className="external-icon" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
