import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Generate realistic looking trading data
const generateTradingData = (length = 50, volatility = 0.1, startPrice = 100) => {
  const data = [];
  let price = startPrice;
  
  for (let i = 0; i < length; i++) {
    // Random price movement with some trend
    const change = (Math.random() - 0.48) * volatility * price;
    price = Math.max(price + change, 1); // Ensure price doesn't go below 1
    
    // Generate OHLC data
    const open = price;
    const high = price * (1 + Math.random() * 0.02);
    const low = price * (1 - Math.random() * 0.02);
    const close = price * (1 + (Math.random() - 0.5) * 0.01);
    
    data.push({ open, high, low, close });
  }
  
  return data;
};

// Candlestick component
const Candlestick = ({ data, index, maxPrice, spacing, scale }) => {
  const { open, high, low, close } = data;
  const isUp = close >= open;
  const color = isUp ? '#16a34a' : '#dc2626'; // Green for up, red for down
  
  const bodyHeight = Math.abs(close - open) * scale;
  const wickHeight = (high - low) * scale;
  const xPos = index * spacing;
  const yPos = ((open + close) / 2) * scale;
  
  return (
    <group position={[xPos, yPos, 0]}>
      {/* Candlestick body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[spacing * 0.6, bodyHeight || 0.01, spacing * 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Candlestick wick */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[spacing * 0.1, wickHeight, spacing * 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

// Price line component
const PriceLine = ({ data, maxPrice, spacing, scale }) => {
  const points = data.map((d, i) => new THREE.Vector3(i * spacing, d.close * scale, 0));
  const lineGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, points.length * 3, spacing * 0.05, 8, false);
  }, [points, spacing]);

  return (
    <mesh geometry={lineGeometry}>
      <meshStandardMaterial color="#b8860b" emissive="#b8860b" emissiveIntensity={0.5} />
    </mesh>
  );
};

// Grid lines
const GridLines = ({ maxPrice, length, spacing, scale }) => {
  // Price level lines (horizontal)
  const priceLines = [];
  const priceStep = maxPrice / 5;
  
  for (let i = 0; i <= 5; i++) {
    const y = i * priceStep * scale;
    priceLines.push(
      <line key={`price-${i}`}>
        <bufferGeometry attach="geometry">
          <float32BufferAttribute 
            attach="attributes-position" 
            args={[new Float32Array([-1, y, 0, length * spacing + 1, y, 0]), 3]} 
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#666" transparent opacity={0.3} />
      </line>
    );
    
    // Price labels
    priceLines.push(
      <Text 
        key={`price-label-${i}`}
        position={[-0.5, y, 0]} 
        color="#999"
        fontSize={0.2}
        anchorX="right"
      >
        {Math.round(i * priceStep)}
      </Text>
    );
  }
  
  // Time lines (vertical)
  const timeLines = [];
  const timeStep = Math.ceil(length / 10);
  
  for (let i = 0; i <= length; i += timeStep) {
    const x = i * spacing;
    timeLines.push(
      <line key={`time-${i}`}>
        <bufferGeometry attach="geometry">
          <float32BufferAttribute 
            attach="attributes-position" 
            args={[new Float32Array([x, 0, 0, x, maxPrice * scale, 0]), 3]} 
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#666" transparent opacity={0.3} />
      </line>
    );
    
    // Time labels
    if (i > 0) {
      timeLines.push(
        <Text 
          key={`time-label-${i}`}
          position={[x, -0.3, 0]} 
          color="#999"
          fontSize={0.2}
          anchorY="top"
        >
          {`D-${length - i}`}
        </Text>
      );
    }
  }
  
  return (
    <group>
      {priceLines}
      {timeLines}
    </group>
  );
};

// Main chart component
const Chart = ({ tradingPair = "BTC/USD" }) => {
  const chartRef = useRef();
  
  // Generate sample data
  const data = useMemo(() => generateTradingData(50, 0.03, 100), []);
  
  // Calculate max price for scaling
  const maxPrice = useMemo(() => {
    return Math.max(...data.map(d => d.high)) * 1.1; // Add 10% margin
  }, [data]);
  
  // Chart dimensions
  const spacing = 0.3; // Space between candlesticks
  const scale = 10 / maxPrice; // Scale to fit in view
  
  // Animate the chart
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    chartRef.current.rotation.x = Math.sin(time * 0.1) * 0.02;
    chartRef.current.rotation.y = Math.sin(time * 0.15) * 0.02;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <group ref={chartRef} position={[-7, -5, 0]}>
        {/* Chart title */}
        <Text 
          position={[data.length * spacing / 2, maxPrice * scale + 0.5, 0]} 
          color="#b8860b"
          fontSize={0.4}
          font="/fonts/Inter-Bold.woff"
          anchorX="center"
        >
          {tradingPair} Trading Chart
        </Text>
        
        {/* Grid */}
        <GridLines maxPrice={maxPrice} length={data.length} spacing={spacing} scale={scale} />
        
        {/* Candlesticks */}
        {data.map((d, i) => (
          <Candlestick 
            key={`candle-${i}`} 
            data={d} 
            index={i} 
            maxPrice={maxPrice} 
            spacing={spacing} 
            scale={scale} 
          />
        ))}
        
        {/* Price line */}
        <PriceLine data={data} maxPrice={maxPrice} spacing={spacing} scale={scale} />
      </group>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 2.2}
        rotateSpeed={0.5}
      />
    </>
  );
};

// Trading pairs for dropdown
const tradingPairs = [
  "BTC/USD", "ETH/USD", "XRP/USD", "ADA/USD", "SOL/USD"
];

// Main component to export
const TradingChart3D = ({ className }) => {
  const [tradingPair, setTradingPair] = useState("BTC/USD");
  
  return (
    <div className={`relative ${className || ''}`}>
      <div className="absolute top-4 right-4 z-10">
        <select 
          className="bg-white dark:bg-neutral-800 border border-primary/20 rounded-md px-3 py-1 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          value={tradingPair}
          onChange={(e) => setTradingPair(e.target.value)}
        >
          {tradingPairs.map(pair => (
            <option key={pair} value={pair}>{pair}</option>
          ))}
        </select>
      </div>
      
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 45 }}
        className="bg-white/5 dark:bg-black/20 rounded-xl shadow-lg"
      >
        <Chart tradingPair={tradingPair} />
      </Canvas>
    </div>
  );
};

export default TradingChart3D;
