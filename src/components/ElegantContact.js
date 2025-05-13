import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ElegantContact = () => {
  const canvasRef = useRef(null);
  
  // Particle animation for background
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
    
    // Create particles
    const particles = [];
    const particleCount = 70;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap particles around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections between particles
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.05)';
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
          }
        }
      }
      
      ctx.globalAlpha = 1;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-900 to-black">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gold-gradient opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-gradient opacity-30"></div>
      
      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <div className="h-px w-16 bg-gold-gradient mx-auto mb-6"></div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              <span className="bg-clip-text text-transparent bg-gold-gradient">Get In Touch</span>
            </h2>
            <div className="h-px w-24 bg-gold-gradient mx-auto mt-6"></div>
          </div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto font-light mt-6">
            Connect with a professional trader and investment strategist. Let's discuss how my expertise 
            can help elevate your trading portfolio and financial goals.
          </p>
        </motion.div>
        
        {/* Contact card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative p-10 bg-neutral-900/60 backdrop-blur-lg rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
            {/* Decorative gold accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-lg mx-auto space-y-8">
              <h3 className="text-2xl font-semibold text-white text-center">
                <span className="bg-clip-text text-transparent bg-gold-gradient">Contact Information</span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <svg className="w-6 h-6 text-gold-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-neutral-400 mb-1">Email</p>
                    <a href="mailto:mhdmgc@gmail.com" className="text-white hover:text-gold-500 transition-colors text-lg">mhdmgc@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <svg className="w-6 h-6 text-gold-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-neutral-400 mb-1">Phone</p>
                    <a href="tel:+213793553331" className="text-white hover:text-gold-500 transition-colors text-lg">+213 793 553 331</a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <svg className="w-6 h-6 text-gold-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-neutral-400 mb-1">Location</p>
                    <p className="text-white text-lg">Constantine, Algeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elegant divider */}
            <div className="relative h-px w-full max-w-full mx-auto my-10 overflow-hidden">
              <div className="absolute inset-0 bg-neutral-800"></div>
              <div className="absolute inset-0 bg-gold-gradient animate-pulse opacity-50"></div>
            </div>
            
            {/* Footer message */}
            <div className="text-center">
              <p className="text-neutral-400 text-sm">
                For premium trading consultation, please reach out directly via email or phone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElegantContact;
