import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function Character1() {
  const { scene, animations } = useGLTF('./models/technologies/animations.glb');
  const mixer = useRef(null);
  const walkAction = useRef(null);
  const idleAction = useRef(null);
  const modelRef = useRef(scene);
  const [position, setPosition] = useState([1.5, -3, -10]);
  const [hasReached, setHasReached] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [_, setIsWalking] = useState(true);

  const speed = 0.021; // Velocidad en Z
  const exitSpeed = 0.05; // Velocidad en X positivo
  const delay = 5000;
  const stepHeight = 0.2; // Altura del "saltito" al caminar
  const stepFrequency = 10; // Frecuencia del movimiento de caminata

  // Estados para manejar los escalones
  const [firstStep, setFirstStep] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [currentY, setCurrentY] = useState(-4); // Controlar suavemente el movimiento en Y

  // Parámetros para suavizar las caídas
  const easingFactor = 0.2; // Factor para suavizar el movimiento
  const stepDepth = 2; // Aumentar la profundidad de la caída

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);

      // Crear las acciones de caminar e idle
      walkAction.current = mixer.current.clipAction(animations[2]); // Animación de caminar
      idleAction.current = mixer.current.clipAction(animations[0]); // Animación de idle

      // Iniciar la animación de caminar al cargar
      walkAction.current.play();
    }

    // Clean-up function para liberar recursos cuando el componente se desmonte
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction(); // Detener todas las acciones de animación
        mixer.current.uncacheRoot(scene); // Destruir las referencias del modelo
        mixer.current = null; // Eliminar el mixer
      }
    };
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);

    if (!hasReached) {
      setPosition(prevPos => {
        const newZ = prevPos[2] + speed;

        // Mantener el "saltito" al caminar en Z
        const stepY = Math.sin(newZ * stepFrequency) * stepHeight;

        if (newZ < -4) {
          return [prevPos[0], -4 + stepY, newZ];
        } else {
          setHasReached(true);
          setTimeout(() => {
            walkAction.current.fadeOut(0.5);
            idleAction.current.reset().fadeIn(0.5).play();
            setIsWalking(false);
            setIsExiting(true);
            setFirstStep(false);  // Reiniciar los escalones
            setSecondStep(false);
          }, delay);
          return [prevPos[0], -4, -4];
        }
      });
    } else if (isExiting) {
      setPosition(prevPos => {
        const newX = prevPos[0] + exitSpeed;

        let targetY = prevPos[1]; // La nueva posición en Y

        // Primer escalón después de moverse un poco en X positivo
        if (newX > 2.5 && !firstStep) {
          targetY -= stepDepth; // Baja el primer escalón, más profundo
          setFirstStep(true);
        }

        // Segundo escalón después de moverse más en X positivo
        if (newX > 5 && !secondStep) {
          targetY -= stepDepth; // Baja el segundo escalón, igualmente profundo
          setSecondStep(true);
        }

        // Suavizar el descenso usando interpolación
        setCurrentY(prevY => prevY + (targetY - prevY) * easingFactor);

        if (newX < 15) {
          return [newX, Math.max(currentY, -8), prevPos[2]]; // Ajusta la altura con los escalones suavemente
        } else {
          idleAction.current.fadeOut(0.5);
          walkAction.current.reset().fadeIn(0.5).play();
          setIsWalking(true);
          setIsExiting(false);
          setHasReached(false);
          return [1.5, -4, -10];
        }
      });
    }
  });

  return <primitive ref={modelRef} position={position} scale={0.5} object={scene} />;
}
