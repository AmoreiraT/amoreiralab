import React, { useRef } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Canvas } from '@react-three/fiber';

export function HomePage() {
  const parallaxRef = useRef<IParallax>(null);

  return (
    <Parallax pages={3} ref={parallaxRef}>
      <ParallaxLayer offset={0} speed={0.5} />
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Canvas>
          <ambientLight />
          <pointLight />
        </Canvas>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5}>
        <h1>Page 3</h1>
      </ParallaxLayer>
    </Parallax>
  );
}
