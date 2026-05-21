import { Github, Linkedin, Mail, Phone, MapPin } from '../icons/lucideIcons'
import { useState } from 'react'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const contactInfo = [
    { icon: Phone, label: '+91 7876834865' },
    { icon: Mail, label: 'dolfiguería130@gmail.com' },
    { icon: MapPin, label: 'Kangra, Himachal Pradesh' },
    { icon: Phone, label: 'Mon - Fri / 9am-10pm' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Dolfiguleria78' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/dolfi-guleria-a53201292' },
    { icon: Mail, label: 'Email', url: 'mailto:dolfiguería130@gmail.com' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section - Left */}
        <div className="footer-brand-section">
          <div className="footer-brand-icon">A</div>
          <div className="footer-brand-info">
            <h3 className="footer-brand-name">Dolfi Guleria</h3>
            <p className="footer-brand-subtitle">Full-Stack Developer & Tech Enthusiast</p>
          </div>
          <p className="footer-brand-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Navigation</h4>
          <ul className="footer-links">
            {navigationLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="footer-link">› {link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Contact</h4>
          <ul className="footer-contact-list">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <li key={idx} className="contact-item">
                  <Icon size={16} className="contact-icon" />
                  <span>{info.label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section footer-newsletter">
          <h4 className="footer-section-title">Get the latest information</h4>
          <p className="newsletter-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">→</button>
            </div>
            {subscribed && <p className="subscription-message">✓ Thanks for subscribing!</p>}
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright © 2024 Saira by RosThemes. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#" className="bottom-link">Terms & Service</a>
          <span className="link-divider">|</span>
          <a href="#" className="bottom-link">Privacy Policy</a>
        </div>

        <div className="footer-social">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title={social.label}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
