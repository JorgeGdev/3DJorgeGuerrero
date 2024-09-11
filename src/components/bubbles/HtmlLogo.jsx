import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function HtmlLogo(props) {
  const { scene, animations } = useGLTF('../models/bubble/html.glb');
  const mixer = useRef(null);
  const ref = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    // Movimiento de vibración
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = Math.sin(time * 20) * 0.05; // Vibración en Y (sube y baja rápidamente)
      ref.current.rotation.y += delta * 0.2; // Rotación suave en el eje Y
    }

    // Actualizamos la animación del modelo si hay alguna
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <primitive ref={ref} object={scene} {...props} /> // Aplicamos la referencia para la animación
  );
}
