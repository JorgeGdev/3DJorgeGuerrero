import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function Walking() {
  const modelWalking = useGLTF('../models/walking.glb');
  const mixer = useRef(null);

  useEffect(() => {
    if (modelWalking && modelWalking.animations.length) {
      mixer.current = new AnimationMixer(modelWalking.scene);
      const action = mixer.current.clipAction(modelWalking.animations[0]);
      action.play();
    }
  }, [modelWalking]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <>
      <primitive scale={0.3} position={[0.1,3.6,1.8]} object={modelWalking.scene} />
    </>
  );
}
