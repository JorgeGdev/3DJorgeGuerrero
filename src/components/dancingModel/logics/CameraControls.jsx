import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

export default function CameraControls({ camera}) {
  const initial = useRef(true);
  const startTime = useRef(0);

  useFrame(({ clock }) => {
    if (initial.current) {
      startTime.current = clock.getElapsedTime();
      initial.current = false;
    }

    const elapsedTime = clock.getElapsedTime() - startTime.current;
    const duration = 8; // Duración de la animación en segundos

    if (elapsedTime <= duration) {
      const t = elapsedTime / duration;
      const easeInOut = t * t * (3 - 2 * t); // Interpolación suave

      camera.position.lerpVectors(
        new THREE.Vector3(-50, 3, -25),
        new THREE.Vector3(5, 7, 25),
        easeInOut
      );
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <OrbitControls 
      enableDamping 
      enableZoom={false}
      minPolarAngle={Math.PI / 3} // Limita la vista inferior
      maxPolarAngle={Math.PI / 2.1} // Limita la vista superior
    />
  );
}
