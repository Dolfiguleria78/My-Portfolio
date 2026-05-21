import { motion } from 'framer-motion'
import './Pages.css'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Weather Forecasting Web Application",
      description: "A responsive weather dashboard using React.js and third-party APIs to fetch real-time weather data. Displays temperature, humidity, wind speed, and weather conditions through dynamic UI rendering.",
      technologies: ['React.js', 'Weather API', 'CSS3', 'Responsive Design'],
      duration: 'Jul 2024 – Nov 2024',
      icon: '🌤️',
      highlights: [
        'Built with React.js and third-party APIs',
        'Real-time weather data integration',
        'Dynamic UI rendering',
        'Reusable components architecture',
        'Fully responsive design'
      ]
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "Frontend modules for patient registration, appointment scheduling, and record management. Designed structured form validation systems to ensure reliable data capture with modular UI components.",
      technologies: ['React.js', 'Form Validation', 'UI/UX', 'Data Management'],
      duration: 'Dec 2024 – Apr 2025',
      icon: '🏥',
      highlights: [
        'Patient registration module',
        'Appointment scheduling system',
        'Form validation systems',
        'Modular UI components',
        'Maintainable architecture'
      ]
    },
    {
      id: 3,
      title: "Job Seeking Portal (MERN Stack)",
      description: "Full-stack job portal built with MERN stack supporting job listings, user registration, and job search workflows. Developed React components and backend REST APIs using Node.js and Express with MongoDB integration.",
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      duration: 'Jul 2025 – Nov 2025',
      icon: '💼',
      highlights: [
        'Full MERN stack implementation',
        'Job listing management',
        'User authentication & registration',
        'Advanced search functionality',
        'MongoDB database design'
      ]
    }
  ]

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
    <div className="page page-portfolio">
      <div className="page-container">
        <motion.div
          className="page-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants}>My Projects</motion.h1>
          <motion.p variants={itemVariants}>Academic and Technical Projects</motion.p>
        </motion.div>

        <motion.div
          className="portfolio-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginTop: '40px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-detail-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                padding: '40px',
                background: 'rgba(0, 212, 255, 0.05)',
                border: '2px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '3rem' }}>{project.icon}</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '8px', color: '#ffffff' }}>
                    {project.title}
                  </h2>
                  <p style={{ color: '#00d4ff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '15px' }}>
                    {project.duration}
                  </p>
                  <p style={{ color: '#b0b0b0', lineHeight: '1.8', marginBottom: '20px' }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: '#00d4ff', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '600' }}>
                      Key Achievements:
                    </h4>
                    <ul style={{ listStyle: 'none' }}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} style={{ color: '#888888', paddingLeft: '20px', position: 'relative', marginBottom: '8px', fontSize: '0.9rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#00d4ff', fontWeight: 'bold' }}>→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 style={{ color: '#00d4ff', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '600' }}>
                      Technologies Used:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Summary */}
        <motion.section
          style={{ marginTop: '80px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '40px' }}>
            Project Statistics
          </motion.h2>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              variants={itemVariants}
              className="content-box"
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>3+ Projects</h3>
              <p>Completed academic and technical projects using modern web technologies</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="content-box"
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Full Stack Development</h3>
              <p>Experience with frontend, backend, and database layer implementation</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="content-box"
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>MERN Stack</h3>
              <p>Proficient in MongoDB, Express.js, React.js, and Node.js technologies</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
