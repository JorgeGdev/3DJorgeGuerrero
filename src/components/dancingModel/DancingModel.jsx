import { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

export default function DancingModel() {
  const modelDancing = useLoader(GLTFLoader, '../models/salsa.glb');
  const mixer = useRef(null);

  useEffect(() => {
    if (modelDancing && modelDancing.animations.length) {
      mixer.current = new AnimationMixer(modelDancing.scene);
      const action = mixer.current.clipAction(modelDancing.animations[0]);
      action.play();
    }
  }, [modelDancing]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <>
      <primitive scale={0.9} position-y={4} object={modelDancing.scene} />
    </>
  );
}
