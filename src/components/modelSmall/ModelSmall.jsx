import { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

export default function ModelSmall() {
  const modelSmall = useLoader(GLTFLoader, '../models/SmallChar.glb');

  const mixer = useRef(null);

  useEffect(() => {
    if (modelSmall && modelSmall.animations.length) {
      mixer.current = new AnimationMixer(modelSmall.scene);
      const action = mixer.current.clipAction(modelSmall.animations[0]);
      action.play();
    }
  }, [modelSmall]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });


  return (
    <>
      <primitive scale={0.3} position-z={1.1}  position-y={-0.96} object={modelSmall.scene} />
    </>
  );
}
