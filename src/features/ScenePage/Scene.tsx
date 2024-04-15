import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface BoxProps {
  position: THREE.Vector3;
}

export function Box({ props: { position } }: Readonly<{ props: BoxProps }>) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  useEffect(() => {
    meshRef.current.position.add(position);
  }, [position]);

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export function Scene() {
  const boxPosition = new THREE.Vector3(0, 0, 0);
  const pointLightPosition = new THREE.Vector3(10, 10, 10);

  const pointLightRef = useRef<THREE.PointLight>(null!);

  useEffect(() => {
    pointLightRef.current.position.add(pointLightPosition);
  }, [pointLightPosition]);

  return (
    <>
      <ambientLight />
      <pointLight ref={pointLightRef} />
      <Box
        props={{
          position: boxPosition,
        }}
      />
    </>
  );
}
