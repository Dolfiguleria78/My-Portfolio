import { motion } from 'framer-motion'
import './Pages.css'

export default function About() {
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

  const techSkills = [
    { category: 'Languages', items: ['C++', 'JavaScript'] },
    { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Responsive UI'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
    { category: 'Databases', items: ['MongoDB', 'DBMS'] },
    { category: 'Core CS', items: ['Data Structures', 'DBMS', 'Operating Systems', 'Networks'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  ]

  const certifications = [
    'Infosys Springboard – AI-first SE',
    'Infosys Springboard – Introduction to AI',
    'National Cadet Corps (NCC) – Under Officer & Contingent Commander',
  ]

  const experience = [
    {
      role: 'React.js Intern',
      company: 'Spineor Web Services Pvt. Ltd.',
      location: 'Mohali, India',
      duration: 'May 2025 - June 2025 (1 Month)',
      highlights: [
        'Developed responsive user interfaces using React.js, HTML, CSS, and JavaScript',
        'Built reusable components and implemented React Hooks for state management',
        'Integrated REST APIs to fetch and display dynamic application data',
        'Collaborated with developers to debug UI issues and improve UX quality',
        'Used Git and GitHub for version control in an agile development workflow'
      ]
    }
  ]

  return (
    <div className="page page-about">
      <div className="page-container">
        <motion.div
          className="page-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants}>About Me</motion.h1>
          <motion.p variants={itemVariants}>Full Stack Developer | MERN Stack | Problem Solver</motion.p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="content-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="content-box">
            <h2>Who I Am</h2>
            <p>
              I'm Dolfi Guleria, a Computer Science undergraduate from Maharishi Markandeshwar 
              Engineering College focused on building modern web applications using the MERN stack. 
              I'm passionate about creating responsive, scalable solutions and have a strong foundation 
              in Data Structures and problem-solving.
            </p>
            <p style={{ marginTop: '15px', fontSize: '0.95rem', color: '#888' }}>
              Based in Kangra, Himachal Pradesh | CGPA: 8.56
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="content-box">
            <h2>My Expertise</h2>
            <ul className="skill-list">
              <li>Full Stack Web Development (MERN)</li>
              <li>React.js & Modern Frontend</li>
              <li>Node.js & Express.js Backend</li>
              <li>REST API Development</li>
              <li>MongoDB Database Design</li>
              <li>Responsive UI/UX Design</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="content-box">
            <h2>What I Bring</h2>
            <p>
              Comfortable translating product requirements into clean, maintainable code within 
              collaborative development environments. I focus on writing scalable solutions and 
              staying updated with the latest technologies and best practices in web development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="content-box">
            <h2>Interests & Aspirations</h2>
            <ul className="skill-list">
              <li>AI-powered web applications</li>
              <li>Generative AI interfaces</li>
              <li>Scalable web systems architecture</li>
              <li>Cloud computing & deployment</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.section
          style={{ marginTop: '80px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '40px' }}>
            Education
          </motion.h2>
          <motion.div variants={itemVariants} className="content-box">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>B.Tech in Computer Science</h3>
            <p><strong>Maharishi Markandeshwar Engineering College</strong></p>
            <p>Mullana, India | 2023 – Present | CGPA: 8.56</p>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          style={{ marginTop: '80px', marginBottom: '80px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '40px' }}>
            Technical Skills
          </motion.h2>
          <motion.div
            className="skills-showcase"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}
          >
            {techSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="content-box"
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{skill.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="tag"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          style={{ marginTop: '80px', marginBottom: '80px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '40px' }}>
            Professional Experience
          </motion.h2>
          {experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="content-box">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>{exp.role}</h3>
              <p style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '5px' }}>
                {exp.company} • {exp.location}
              </p>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                Duration: {exp.duration}
              </p>
              <ul className="skill-list">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} style={{ padding: '8px 0' }}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '2rem', marginBottom: '40px' }}>
            Certifications & Leadership
          </motion.h2>
          <motion.div variants={itemVariants} className="content-box">
            <ul className="skill-list">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
              <li>National Cadet Corps (NCC) – 3-year training, served as Under Officer & Contingent Commander</li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
