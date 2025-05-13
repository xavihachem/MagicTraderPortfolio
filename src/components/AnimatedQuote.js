import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedQuote = ({ quote, author, position }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = '#b8860b';
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    // Create particles
    const particles = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between particles
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.globalAlpha = 1 - (distance / 100);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gold/10">
      {/* Canvas for particle animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Quote content */}
      <div className="relative z-10">
        <div className="absolute -top-5 -left-5 text-6xl text-gold-500 opacity-50">"</div>
        <div className="absolute -bottom-5 -right-5 text-6xl text-gold-500 opacity-50">"</div>
        
        <motion.p 
          className="text-lg italic text-neutral-600 dark:text-neutral-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {quote}
        </motion.p>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-neutral-200 border border-gold-500/30">
            <img src={`${process.env.PUBLIC_URL}/arab-businessman.jpg`} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">{author}</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{position}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedQuote;
