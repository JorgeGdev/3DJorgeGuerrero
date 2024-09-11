import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { AnimationMixer } from 'three';

export default function Bubbles({ setScene }) {
  const { scene, animations } = useGLTF('../models/bubble/bubble.glb'); // Cargamos el modelo una vez
  const mixer = useRef(null);

  // Configuramos la animación una vez
  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }

    if (setScene) setScene(scene); // Usamos esto para pasar la escena al padre si es necesario

    return () => {
      if (mixer.current) mixer.current.stopAllAction(); // Detener las animaciones si se desmonta
    };
  }, [animations, scene, setScene]);

  return null; // No necesitamos renderizar nada directamente aquí
}
