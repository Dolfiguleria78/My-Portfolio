import { motion } from 'framer-motion'
import './Experience.css'

export default function Experience() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  }

  const experiences = [
    {
      title: 'Junior Software Developer',
      company: 'Tech Company',
      duration: '2022 - Present',
      description: 'Developed and maintained Java and C++ applications. Worked on REST API design and implementation.',
      skills: ['Java', 'Spring Boot', 'REST APIs'],
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions',
      duration: '2021 - 2022',
      description: 'Built responsive web applications using React.js and modern CSS. Collaborated with design teams.',
      skills: ['React.js', 'JavaScript', 'CSS3'],
    },
  ]

  return (
    <section className="experience">
      <div className="experience-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="experience-content"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience
          </motion.h2>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
              >
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
