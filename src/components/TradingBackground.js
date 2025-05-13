import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Particle representing a trading chart point or market data
const Particle = ({ position, color, size, speed }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Create subtle movement
    mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.2;
    
    // Pulse effect
    mesh.current.scale.x = Math.max(size * (0.8 + 0.2 * Math.sin(time * 2)), 0.001);
    mesh.current.scale.y = Math.max(size * (0.8 + 0.2 * Math.sin(time * 2)), 0.001);
    mesh.current.scale.z = Math.max(size * (0.8 + 0.2 * Math.sin(time * 2)), 0.001);
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        toneMapped={false} 
      />
    </mesh>
  );
};

// Line representing a trading chart or trend
const TrendLine = ({ points, color, thickness }) => {
  const ref = useRef();
  
  // Create a curved line from points
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      points.map(point => new THREE.Vector3(...point))
    );
  }, [points]);
  
  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, thickness, 8, false);
  }, [curve, thickness]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle rotation
    ref.current.rotation.z = Math.sin(time * 0.2) * 0.05;
  });

  return (
    <mesh ref={ref} geometry={geometry}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        transparent 
        opacity={0.7} 
        toneMapped={false} 
      />
    </mesh>
  );
};

// Candlestick representation
const Candlestick = ({ position, isUp, width, height }) => {
  const color = isUp ? '#16a34a' : '#dc2626'; // Green for up, red for down
  
  return (
    <group position={position}>
      {/* Body of the candlestick */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, height, width]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Wick of the candlestick */}
      <mesh position={[0, height * 0.8, 0]}>
        <boxGeometry args={[width * 0.2, height * 0.6, width * 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

// Main scene component
const TradingScene = () => {
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      color: new THREE.Color(
        Math.random() > 0.5 ? '#b8860b' : '#1e3a8a'
      ),
      size: 0.05 + Math.random() * 0.1,
      speed: 0.5 + Math.random() * 1.5
    }));
  }, []);

  // Generate trend lines
  const trendLines = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const pointCount = 8 + Math.floor(Math.random() * 5);
      const points = [];
      const isUptrend = Math.random() > 0.5;
      const startX = -5 + i * 2;
      
      for (let j = 0; j < pointCount; j++) {
        const x = startX + j * 0.5;
        const trend = isUptrend ? 0.3 : -0.3;
        const y = j * trend + (Math.random() - 0.5) * 1;
        const z = -2 - Math.random() * 3;
        points.push([x, y, z]);
      }
      
      return {
        points,
        color: isUptrend ? '#b8860b' : '#1e3a8a',
        thickness: 0.03 + Math.random() * 0.05
      };
    });
  }, []);

  // Generate candlesticks
  const candlesticks = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const isUp = Math.random() > 0.5;
      return {
        position: [
          -4 + i * 0.6, 
          -3 + Math.random() * 2, 
          -1
        ],
        isUp,
        width: 0.2,
        height: 0.3 + Math.random() * 0.5
      };
    });
  }, []);

  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slowly rotate the entire scene
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b8860b" />
      
      <group ref={groupRef}>
        {/* Particles */}
        {particles.map((particle, i) => (
          <Particle key={`particle-${i}`} {...particle} />
        ))}
        
        {/* Trend lines */}
        {trendLines.map((line, i) => (
          <TrendLine key={`line-${i}`} {...line} />
        ))}
        
        {/* Candlesticks */}
        {candlesticks.map((stick, i) => (
          <Candlestick key={`stick-${i}`} {...stick} />
        ))}
      </group>
    </>
  );
};

// Main component to export
const TradingBackground = ({ className }) => {
  return (
    <div className={`${className || ''} bg-neutral-900`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <TradingScene />
      </Canvas>
    </div>
  );
};

export default TradingBackground;
