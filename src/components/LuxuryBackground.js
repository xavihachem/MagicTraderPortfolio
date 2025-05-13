import React, { useRef, useEffect } from 'react';

const LuxuryBackground = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    // Initial resize
    resizeCanvas();
    
    // Listen for window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Pattern settings
    const patternSize = 30;
    const lineWidth = 1;
    const dotSize = 2;
    const animationSpeed = 0.0005;
    
    // Colors
    const isDarkMode = document.documentElement.classList.contains('dark');
    const lineColor = isDarkMode ? 'rgba(184, 134, 11, 0.15)' : 'rgba(184, 134, 11, 0.1)';
    const dotColor = isDarkMode ? 'rgba(184, 134, 11, 0.2)' : 'rgba(184, 134, 11, 0.15)';
    const glowColor = isDarkMode ? 'rgba(184, 134, 11, 0.05)' : 'rgba(184, 134, 11, 0.03)';
    
    // Animation variables
    let time = 0;
    
    // Draw the luxury pattern
    const drawPattern = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / patternSize) + 1;
      const rows = Math.ceil(canvas.height / patternSize) + 1;
      
      // Draw grid
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      
      // Horizontal lines with subtle wave
      for (let y = 0; y < rows; y++) {
        ctx.beginPath();
        for (let x = 0; x < cols; x++) {
          const waveOffset = Math.sin(time + x * 0.2) * 3;
          const posY = y * patternSize + waveOffset;
          
          if (x === 0) {
            ctx.moveTo(x * patternSize, posY);
          } else {
            ctx.lineTo(x * patternSize, posY);
          }
        }
        ctx.stroke();
      }
      
      // Vertical lines with subtle wave
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        for (let y = 0; y < rows; y++) {
          const waveOffset = Math.sin(time + y * 0.2) * 3;
          const posX = x * patternSize + waveOffset;
          
          if (y === 0) {
            ctx.moveTo(posX, y * patternSize);
          } else {
            ctx.lineTo(posX, y * patternSize);
          }
        }
        ctx.stroke();
      }
      
      // Draw intersection dots
      ctx.fillStyle = dotColor;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const waveOffsetX = Math.sin(time + y * 0.2) * 3;
          const waveOffsetY = Math.sin(time + x * 0.2) * 3;
          const posX = x * patternSize + waveOffsetX;
          const posY = y * patternSize + waveOffsetY;
          
          // Add glow effect
          const glow = ctx.createRadialGradient(posX, posY, 0, posX, posY, dotSize * 4);
          glow.addColorStop(0, glowColor);
          glow.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(posX, posY, dotSize * 4, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw dot
          ctx.beginPath();
          ctx.fillStyle = dotColor;
          ctx.arc(posX, posY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Update time for animation
      time += animationSpeed * (1000 / 60);
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(drawPattern);
    };
    
    // Start animation
    drawPattern();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`luxury-background ${className || ''}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default LuxuryBackground;
