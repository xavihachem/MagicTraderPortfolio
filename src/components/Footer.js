import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const canvasRef = useRef(null);
  
  // Particle animation for the footer background
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
    
    // Create stars/particles
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.2 + 0.1
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(184, 134, 11, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particles upward slowly
        particle.y -= particle.speed;
        
        // Reset particles that go off screen
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 to-black text-white py-16 overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gold-gradient opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer mb-6 transform hover:scale-105 transition-transform duration-300"
          >
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Mehdi Trading" className="h-12" />
          </Link>
          
          {/* Description */}
          <p className="text-neutral-400 max-w-2xl text-center mb-8">
            Professional trader specializing in cryptocurrency markets, forex trading, and strategic investment planning. 
            Turning market insights into profitable strategies with precision and expertise.
          </p>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-6 mb-10">
            {/* X (Twitter) */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            
            {/* Telegram */}
            <a
              href="https://t.me/+IWXN6bCjov5iODI0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            
            {/* Discord */}
            <a
              href="https://discord.gg/JaM3u9Q86v"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gold-gradient transition-all duration-300 group"
              aria-label="Discord"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Divider with gold accent */}
        <div className="relative h-px w-full max-w-2xl mx-auto mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-neutral-800"></div>
          <div className="absolute inset-0 bg-gold-gradient animate-pulse opacity-50"></div>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} <span className="text-gold-500">Mehdi</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
