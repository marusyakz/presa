import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const InteractiveGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;

    // Включаем зум и автоматическое вращение
    globe.controls().enableZoom = false;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // Создание частиц
    const scene = globe.scene();
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3); // x, y, z

    // Инициализация массива позиций частиц
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 2000 - 1000; // x
      positions[i * 3 + 1] = Math.random() * 2000 - 1000; // y
      positions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.5,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    const particleSystem = new THREE.Points(particles, pMaterial);
    scene.add(particleSystem);

    // Анимация частиц
    const animateParticles = () => {
      requestAnimationFrame(animateParticles);
      particleSystem.rotation.y += 0.001; // Вращение частиц
    };

    animateParticles();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={true}
        showGraticules={true}
        showAtmosphere={true}
      />
    </div>
  );
};

export default InteractiveGlobe;
