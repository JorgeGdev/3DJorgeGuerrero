import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function Crater() {
  const { scene, animations } = useGLTF('./models/crater2.glb');
  const mixer = useRef(null);
  const modelRef = useRef(scene);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    // Aplicar la animación de la posición y rotación
    // modelRef.current.position.y = 8 + Math.sin(state.clock.elapsedTime) * 0.7;
    
    

    // Actualizar el mixer si está definido
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive position={[0, -5.6, 0]} ref={modelRef} scale={6} object={scene} />;
}
