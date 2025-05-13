import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const GlobeContact = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    
    // Animation frame ID for cleanup
    let animationFrameId;
    
    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement);
    
    // Create globe
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create material with custom shader
    const globeMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float time;
        
        void main() {
          // Create a grid pattern
          float latitude = acos(vNormal.y) / 3.14159;
          float longitude = atan(vNormal.z, vNormal.x) / (2.0 * 3.14159) + 0.5;
          
          vec2 grid = abs(fract(vec2(longitude, latitude) * 20.0) - 0.5);
          float gridLine = max(1.0 - min(grid.x, grid.y) * 15.0, 0.0);
          
          // Create a pulsing glow
          float pulse = 0.5 + 0.5 * sin(time * 0.5);
          vec3 baseColor = vec3(0.7, 0.5, 0.1); // Gold base
          vec3 glowColor = mix(baseColor, vec3(1.0, 0.8, 0.3), pulse); // Brighter gold
          
          // Edge glow
          float edgeGlow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          
          // Combine effects
          vec3 finalColor = mix(baseColor * 0.3, glowColor, gridLine * 0.8);
          finalColor = mix(finalColor, vec3(1.0, 0.9, 0.5), edgeGlow * 0.7 * pulse);
          
          gl_FragColor = vec4(finalColor, 0.9);
        }
      `,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    
    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.2);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add point lights for dramatic effect
    const pointLight1 = new THREE.PointLight(0xffcc88, 1, 10);
    pointLight1.position.set(2, 1, 1);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x88ccff, 1, 10);
    pointLight2.position.set(-2, -1, 1);
    scene.add(pointLight2);
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update uniforms
      globeMaterial.uniforms.time.value = elapsedTime;
      
      // Update controls
      controls.update();
      
      // Render
      renderer.render(scene, camera);
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      const size = Math.min(mountRef.current.clientWidth, 300);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(size, size);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js resources
      if (globeGeometry) globeGeometry.dispose();
      if (globeMaterial) globeMaterial.dispose();
      
      // Dispose of renderer
      if (renderer) {
        renderer.dispose();
        if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      
      // Cancel animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  return (
    <div ref={mountRef} className="w-full h-full flex items-center justify-center" />
  );
};

export default GlobeContact;
