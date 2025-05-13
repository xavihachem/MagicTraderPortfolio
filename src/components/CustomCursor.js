import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const mMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const mDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };
    
    const mLeave = () => {
      setHidden(true);
    };
    
    const mEnter = () => {
      setHidden(false);
    };
    
    // Check for interactive elements
    const handleLinkHover = () => {
      setLinkHovered(true);
    };
    
    const handleLinkLeave = () => {
      setLinkHovered(false);
    };
    
    // Add event listeners
    window.addEventListener('mousemove', mMove);
    window.addEventListener('mousedown', mDown);
    window.addEventListener('mouseleave', mLeave);
    window.addEventListener('mouseenter', mEnter);
    
    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      // Clean up
      window.removeEventListener('mousemove', mMove);
      window.removeEventListener('mousedown', mDown);
      window.removeEventListener('mouseleave', mLeave);
      window.removeEventListener('mouseenter', mEnter);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  // Add event listener for interactive elements after DOM updates
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const newInteractiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
          newInteractiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => setLinkHovered(true));
            el.addEventListener('mouseleave', () => setLinkHovered(false));
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gold-gradient z-[9999] pointer-events-none"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: clicked ? 0.8 : linkHovered ? 0.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor outline */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold z-[9999] pointer-events-none"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicked ? 1.2 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : linkHovered ? 0.5 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8,
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-gold/20 filter blur-md z-[9998] pointer-events-none"
        animate={{
          x: position.x - 48,
          y: position.y - 48,
          scale: clicked ? 1.2 : linkHovered ? 1.3 : 1,
          opacity: hidden ? 0 : clicked ? 0.3 : linkHovered ? 0.2 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
        }}
      />
      
      {/* Custom cursor style to hide default cursor */}
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
