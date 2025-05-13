import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBarChart = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Chart data
    const data = [
      { label: 'My Strategy', value: 32.5, color: 'rgba(184, 134, 11, 0.8)' },
      { label: 'Bitcoin', value: 21.4, color: 'rgba(245, 158, 11, 0.8)' },
      { label: 'S&P 500', value: 12.8, color: 'rgba(59, 130, 246, 0.8)' },
      { label: 'Gold', value: 8.2, color: 'rgba(234, 179, 8, 0.8)' }
    ];
    
    // Animation variables
    let animationProgress = 0;
    let lastTime = 0;
    const animationDuration = 1500; // ms
    
    // Draw function
    const draw = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      // Update animation progress
      if (animationProgress < 1) {
        animationProgress += elapsed / animationDuration;
        if (animationProgress > 1) animationProgress = 1;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid
      const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = canvas.height - (canvas.height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(canvas.width - 30, y);
        ctx.stroke();
        
        // Labels for grid lines
        const textColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)';
        ctx.fillStyle = textColor;
        ctx.font = '10px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(`${i * 10}%`, 45, y + 4);
      }
      
      // Draw bars
      const barWidth = (canvas.width - 80) / data.length;
      const maxValue = Math.max(...data.map(item => item.value));
      const scale = (canvas.height - 60) / (maxValue * 1.2);
      
      data.forEach((item, index) => {
        const x = 60 + index * barWidth;
        const currentHeight = item.value * scale * animationProgress;
        const y = canvas.height - currentHeight - 30;
        
        // Bar shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 5;
        
        // Bar
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth - 20, currentHeight, 5);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Bar label
        ctx.fillStyle = isDarkMode ? '#fff' : '#000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, x + (barWidth - 20) / 2, canvas.height - 10);
        
        // Bar value
        ctx.fillStyle = item.color;
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`+${item.value}%`, x + (barWidth - 20) / 2, y - 10);
        
        // Animated particles on top of bars
        if (animationProgress === 1) {
          const particleCount = Math.floor(item.value / 5);
          for (let i = 0; i < particleCount; i++) {
            const particleX = x + Math.random() * (barWidth - 20);
            const particleY = y + Math.random() * 10;
            const particleSize = Math.random() * 3 + 1;
            
            ctx.fillStyle = item.color;
            ctx.globalAlpha = Math.random() * 0.7 + 0.3;
            ctx.beginPath();
            ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        }
      });
      
      // Title
      ctx.fillStyle = isDarkMode ? '#fff' : '#000';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Annual Return Comparison', canvas.width / 2, 25);
      
      lastTime = timestamp;
      
      // Continue animation
      if (animationProgress < 1) {
        requestAnimationFrame(draw);
      } else {
        // Add subtle animation when complete
        setTimeout(() => {
          animationProgress = 0.95;
          requestAnimationFrame(draw);
        }, 3000);
      }
    };
    
    // Start animation
    requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="w-full h-full relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedBarChart;
