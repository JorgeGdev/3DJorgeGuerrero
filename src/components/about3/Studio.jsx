import { useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Studio() {
  const studio = useGLTF('../models/studio.glb');
  const { actions } = useAnimations(studio.animations, studio.scene);

  useEffect(() => {
    if (actions) {
      // Iniciar todas las animaciones y hacer que se reproduzcan en bucle
      Object.keys(actions).forEach((key) => {
        actions[key].reset().play();
        actions[key].clampWhenFinished = true;
        actions[key].loop = THREE.LoopRepeat;
      });
    }
  }, [actions]);
  
  
 
  return (
    <>
      <primitive scale={0.8} rotation-y={Math.PI* - 0.5} position-y={-0.2} object={studio.scene} />
    </>
  );
}