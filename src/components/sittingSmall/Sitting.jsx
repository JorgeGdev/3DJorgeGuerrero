import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function Sitting() {
  const sittingSmall = useGLTF('../models/sentado.glb');

  const mixer = useRef(null);

  useEffect(() => {
    if (sittingSmall && sittingSmall.animations.length) {
      mixer.current = new AnimationMixer(sittingSmall.scene);
      const action = mixer.current.clipAction(sittingSmall.animations[0]);
      action.play();
    }
  }, [sittingSmall]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });


  return (
    <>
      <primitive scale={0.3} position={[-1.6, -0.69, 0.3]} rotation-y={Math.PI * -0.5} object={sittingSmall.scene} />
    </>
  );
}
