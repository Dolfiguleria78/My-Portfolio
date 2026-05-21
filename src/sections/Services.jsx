import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Zap, Database, Cpu } from '../icons/lucideIcons'
import './Services.css'

export default function Services() {
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

  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Modern, responsive web interfaces with React, Vue, or vanilla JavaScript. Building engaging user experiences with smooth animations and interactions.',
      icon: Code,
      color: '#00d4ff',
    },
    {
      id: 2,
      title: 'Full Stack Development',
      description: 'Complete web applications from frontend to backend. MERN stack expertise with databases, APIs, and server-side logic.',
      icon: Zap,
      color: '#00ffcc',
    },
    {
      id: 3,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks beautiful on all devices. Cross-browser compatible and optimized performance.',
      icon: Smartphone,
      color: '#b026ff',
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'User-centered design solutions focusing on aesthetics and functionality. From wireframes to high-fidelity prototypes with Figma.',
      icon: Palette,
      color: '#ff006e',
    },
    {
      id: 5,
      title: 'API Integration',
      description: 'Seamless integration of RESTful APIs and third-party services. Real-time data management and secure data communication.',
      icon: Database,
      color: '#00d4ff',
    },
    {
      id: 6,
      title: 'Performance Optimization',
      description: 'Speed up your application with optimization techniques. Caching strategies, lazy loading, and code splitting for better performance.',
      icon: Cpu,
      color: '#00ffcc',
    },
  ]

  return (
    <section className="services">
      <div className="services-container">
        <motion.div
          className="services-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="services-header" variants={itemVariants}>
            <h2 className="section-title">Services I <span className="highlight">Offer</span></h2>
            <p className="section-subtitle">Comprehensive solutions tailored to your needs</p>
          </motion.div>

          {/* Services Grid */}
          <motion.div className="services-grid" variants={containerVariants}>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="service-header">
                    <div className="service-icon-wrapper" style={{ borderColor: service.color }}>
                      <Icon size={32} style={{ color: service.color }} />
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-number">0{service.id}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
