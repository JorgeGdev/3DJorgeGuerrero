import { useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Kitchen() {
  const kitchen = useGLTF('../models/kitchen.glb');
  const { actions } = useAnimations(kitchen.animations, kitchen.scene);

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
      <primitive rotation-y={Math.PI* - 0.5} scale={0.8} position-y={0.1} object={kitchen.scene} />
    </>
  );
}
