import React, { useEffect, useRef } from 'react'
import '../styles/AnimatedBackground.css'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Node system for molecular network
    const nodes = []
    const nodeCount = 15

    class Node {
      constructor(index) {
        this.index = index
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 2
        this.color = this.getColor()
        this.pulsePhase = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.01
        this.floatSpeedX = (Math.random() - 0.5) * 0.15
        this.floatSpeedY = (Math.random() - 0.5) * 0.15
      }

      getColor() {
        // Unified color palette matching the design system
        const colors = [
          { r: 0, g: 212, b: 255 },    // Primary: Cyan (#00d4ff)
          { r: 176, g: 38, b: 255 },   // Secondary: Purple (#b026ff)
          { r: 251, g: 191, b: 36 },   // Tertiary: Amber/Gold (#fbbf24)
          { r: 255, g: 0, b: 110 },    // Accent: Pink (#ff006e)
        ]
        return colors[this.index % colors.length]
      }

      update() {
        this.pulsePhase += this.pulseSpeed
        
        // Gentle floating movement
        this.x += this.floatSpeedX
        this.y += this.floatSpeedY

        // Wrap around edges
        if (this.x > canvas.width + 50) this.x = -50
        if (this.x < -50) this.x = canvas.width + 50
        if (this.y > canvas.height + 50) this.y = -50
        if (this.y < -50) this.y = canvas.height + 50
      }

      draw() {
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 1.5
        const pulseOpacity = 0.3 + Math.sin(this.pulsePhase) * 0.3

        // Draw glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 3)
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${pulseOpacity})`)
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw core node
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw bright center
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize * 0.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(i))
    }

    // Draw animated connection lines
    const drawConnections = (time) => {
      const connectionDistance = 200

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4
            
            // Flowing energy effect
            const energyPhase = (time * 0.0005 + i * 0.1 + j * 0.05) % (Math.PI * 2)
            const energyOpacity = opacity * (0.3 + Math.sin(energyPhase) * 0.3)

            // Main line
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.6})`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()

            // Energy pulse along line
            const pulsePos = ((time * 0.0008 + i * 0.2) % 1)
            const pulseX = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos
            const pulseY = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos

            ctx.fillStyle = `rgba(176, 38, 255, ${energyOpacity})`
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }

    // Animation loop
    const animate = (timestamp) => {
      // Clear canvas with slight fade for trail effect
      ctx.fillStyle = 'rgba(10, 14, 23, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time = timestamp

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      // Draw connections with energy flow
      drawConnections(time)

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    // Handle window resize
    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="animated-background">
      <div className="background-gradient"></div>
      <canvas
        ref={canvasRef}
        className="particles-canvas"
      ></canvas>
    </div>
  )
}
