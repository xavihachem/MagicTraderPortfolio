import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Coin component with texture
const Coin = ({ position, rotation, texture, size = 1, speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the coin
    meshRef.current.rotation.y = rotation[1] + time * speed;
    
    // Make the coin float up and down
    meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <cylinderGeometry args={[size, size, size * 0.1, 32]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.8}
        roughness={0.2}
        emissive="#b8860b"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Main scene with multiple coins
const CoinsScene = () => {
  // Load textures for different coins
  const textures = useTexture({
    bitcoin: '/coin-textures/bitcoin.svg',
    ethereum: '/coin-textures/ethereum.svg',
    gold: '/coin-textures/gold.svg',
  });
  
  // Create coin configurations
  const coins = useMemo(() => {
    return [
      {
        position: [-2, 0, 0],
        rotation: [Math.PI / 2, 0, 0],
        texture: textures.bitcoin,
        size: 1,
        speed: 0.8
      },
      {
        position: [0, 0.5, 1],
        rotation: [Math.PI / 2, 0, 0],
        texture: textures.ethereum,
        size: 0.8,
        speed: 1
      },
      {
        position: [2, -0.5, -1],
        rotation: [Math.PI / 2, 0, 0],
        texture: textures.gold,
        size: 1.2,
        speed: 0.6
      },
      {
        position: [-1, 1, -2],
        rotation: [Math.PI / 2, 0, 0],
        texture: textures.bitcoin,
        size: 0.7,
        speed: 1.2
      },
      {
        position: [1.5, -1, 0],
        rotation: [Math.PI / 2, 0, 0],
        texture: textures.ethereum,
        size: 0.9,
        speed: 0.7
      }
    ];
  }, [textures]);

  // Animate the entire scene
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slowly rotate the entire scene
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#b8860b" />
      
      <group ref={groupRef}>
        {coins.map((coin, index) => (
          <Coin key={`coin-${index}`} {...coin} />
        ))}
      </group>
    </>
  );
};

// Main component to export
const FloatingCoins = ({ className }) => {
  return (
    <div className={`${className || ''}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <CoinsScene />
      </Canvas>
    </div>
  );
};

export default FloatingCoins;
