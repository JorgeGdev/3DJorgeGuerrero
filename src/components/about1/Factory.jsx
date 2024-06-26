import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';

export default function Factory() {
  const factory = useGLTF('../models/factory.glb');
  const { actions } = useAnimations(factory.animations, factory.scene);

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
      <primitive scale={0.6} position-y={3.5} position-z={-1} object={factory.scene} />
    </>
  );
}
