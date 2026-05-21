import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Code, ExternalLink, ChevronLeft, ChevronRight } from '../icons/lucideIcons'
import './Projects.css'

export default function Projects() {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  }

  const projects = [
    {
      id: 1,
      title: 'UPI Without Internet',
      description: 'Offline UPI payment simulator using Java and Spring Boot with mesh networking and encrypted transaction processing. Implemented REST APIs, transaction routing, and settlement services.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Java', 'Spring Boot', 'Docker', 'Render'],
      github: 'https://github.com/Dolfiguleria78',
      live: 'https://github.com/Dolfiguleria78',
    },
    {
      id: 2,
      title: 'AI Semantic Search Engine',
      description: 'High-performance semantic search engine using C++ with HNSW, KD-Tree algorithms. Built REST APIs for semantic querying and optimized vector indexing for scalable search.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8d27898e76b185a9f76ead8ac3?w=500&h=300&fit=crop',
      tags: ['C++', 'Algorithms', 'REST APIs', 'Vector DB'],
      github: 'https://github.com/Dolfiguleria78',
      live: 'https://github.com/Dolfiguleria78',
    },
  ]

  // Check scroll position on mount and when scrolling
  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
            <p className="section-subtitle">Showcasing my innovative work and technical expertise</p>
          </motion.div>

          {/* Carousel Container */}
          <div className="projects-carousel-wrapper">
            {/* Left Navigation Button */}
            <motion.button
              className={`carousel-nav-btn carousel-nav-left ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.1, x: -5 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Horizontal Scrollable Container */}
            <div className="projects-carousel" ref={scrollContainerRef}>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                >
                  {/* Project Badge */}
                  <div className="project-badge">Featured</div>

                  {/* Project Image */}
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-shine"></div>
                    <div className="project-overlay">
                      <div className="project-links">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github-link"
                          title="View Code"
                          whileHover={{ scale: 1.15, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Code size={22} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link live-link"
                          title="View Live"
                          whileHover={{ scale: 1.15, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={22} />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {/* Tech Tags */}
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <motion.span 
                          key={index} 
                          className="project-tag"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Links Footer */}
                    <div className="project-footer-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link-btn"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code size={18} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link-btn"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Navigation Button */}
            <motion.button
              className={`carousel-nav-btn carousel-nav-right ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              whileHover={canScrollRight ? { scale: 1.1, x: 5 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
