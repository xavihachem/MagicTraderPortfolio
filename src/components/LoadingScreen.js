import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");
  const canvasRef = useRef(null);
  
  // Particle animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.1,
        color: i % 3 === 0 ? '#d4af37' : (i % 3 === 1 ? '#b8860b' : '#996515')
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
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
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.03)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.globalAlpha = 1 - (distance / 150);
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
  
  // Loading counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < 100) {
        setCounter(oldCount => Math.min(oldCount + Math.floor(Math.random() * 5) + 1, 100));
        // Cycle through loading messages
        if (counter % 25 === 0) {
          const messages = ["Initializing", "Loading assets", "Preparing data", "Almost ready"];
          const index = Math.floor(counter / 25) % messages.length;
          setLoadingText(messages[index]);
        }
      } else {
        setTimeout(() => {
          finishLoading();
        }, 800);
      }
    }, 80);
    
    return () => clearTimeout(timer);
  }, [counter, finishLoading]);
  
  // Line animation variants
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Background canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70"></div>
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-lg px-6">
          {/* Logo with glow effect */}
          <motion.div 
            className="text-center mb-12"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-serif font-bold bg-gold-gradient bg-clip-text text-transparent drop-shadow-lg">
                Mehdi<span className="text-accent">.</span>
              </h1>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gold-gradient blur-lg opacity-30 -z-10 rounded-lg"></div>
            </motion.div>
            
            <motion.p 
              className="text-sm text-neutral-300 mt-3 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Professional Trader & Investment Strategist
            </motion.p>
          </motion.div>
          
          {/* Fancy loading bar */}
          <motion.div 
            className="relative h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden mb-5 shadow-lg"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
            
            {/* Progress bar */}
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-dark via-primary to-primary-light"
              initial={{ width: 0 }}
              animate={{ width: `${counter}%` }}
              transition={{ ease: "easeInOut" }}
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 h-full w-4 bg-white opacity-30 blur-sm"></div>
            </motion.div>
          </motion.div>
          
          {/* Loading percentage with animated text */}
          <motion.div 
            className="flex justify-between items-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="text-sm text-neutral-400 font-mono">
              {loadingText}...
            </span>
            <span className="text-lg font-medium bg-gold-gradient bg-clip-text text-transparent font-mono">
              {counter}%
            </span>
          </motion.div>
          
          {/* Elegant animated lines */}
          <motion.div 
            className="relative mt-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Animated line 1 */}
              <motion.div 
                className="h-px bg-gold-gradient w-0"
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                style={{ width: '60%' }}
              />
              
              {/* Gold emblem */}
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-light flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 1.2 
                  }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white font-serif text-xl">M</span>
                  </div>
                </motion.div>
                <div className="absolute -inset-1 rounded-full bg-gold-gradient opacity-30 blur-md -z-10"></div>
              </div>
              
              {/* Animated line 2 */}
              <motion.div 
                className="h-px bg-gold-gradient w-0"
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                transition={{ delay: 0.3 }}
                style={{ width: '30%' }}
              />
              
              {/* Animated dots */}
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary-light"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 1, 1, 0],
                      opacity: [0, 1, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
