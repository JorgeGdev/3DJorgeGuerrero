import { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

export default function Walking() {
  const modelWalking = useLoader(GLTFLoader, '../models/walking.glb');
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
