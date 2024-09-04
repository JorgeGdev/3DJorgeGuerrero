import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function Chair({ onDoubleClick, isMovingToChair, clicksDisabled }) { 
  const { scene, animations } = useGLTF('./models/chair.glb');
  const mixer = useRef(null);
  const modelRef = useRef(scene);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showText, setShowText] = useState(true);
  const [textPosition, setTextPosition] = useState([8.1, 1.7, 0]); // Estado para la posición del texto
  const [textOpacity, setTextOpacity] = useState(1); // Estado para manejar la opacidad del texto

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
      modelRef.current.userData.action = action;
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current && isAnimating && !clicksDisabled) {
      mixer.current.update(delta);
    }
  });

  const handleDoubleClick = () => {
    if (isMovingToChair || clicksDisabled) return;
    
    const action = modelRef.current.userData.action;
    if (isAnimating) {
      action.stop();
    } else {
      action.play();
    }
    setIsAnimating(!isAnimating);
    startTextDisappearance(); // Iniciar el efecto de desaparición del texto

    if (onDoubleClick) {
      onDoubleClick([8.5, -0.1, 0]);
    }
  };

  const startTextDisappearance = () => {
    let startPosY = textPosition[1];
    const duration = 2000; // Duración de la animación en ms (ahora es más lento)
    const interval = 16; // Intervalo de tiempo en ms para cada frame
    const steps = duration / interval;
    let currentStep = 0;

    const fadeOutInterval = setInterval(() => {
      currentStep += 1;
      const newOpacity = 1 - (currentStep / steps);
      const newPosY = startPosY + (currentStep / steps) * 1.0; // Subir el texto más
      setTextOpacity(newOpacity);
      setTextPosition([7.5, newPosY, 0]);

      if (currentStep >= steps) {
        clearInterval(fadeOutInterval);
        setShowText(false); // Ocultar el texto completamente al final
      }
    }, interval);
  };

  const handlePointerOver = (e) => {
    if (isMovingToChair || clicksDisabled) return;
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e) => {
    if (isMovingToChair || clicksDisabled) return;
    e.stopPropagation();
    document.body.style.cursor = 'default';
  };

  return (
    <>
      {showText && (
        <>
          <Text 
            fontSize={0.5} 
            position={textPosition} 
            rotation-y={Math.PI / -1.75}
            onDoubleClick={handleDoubleClick} // Permitir doble clic en el texto
            style={{ opacity: textOpacity, transition: 'none' }} // Quitar la transición CSS
          > 
            Double Click in
          </Text>
          <Text 
            fontSize={0.5} 
            position={[textPosition[0], textPosition[1] - 0.5, textPosition[2]]} 
            rotation-y={Math.PI / -1.75}
            onDoubleClick={handleDoubleClick} // Permitir doble clic en el texto
            style={{ opacity: textOpacity, transition: 'none' }} // Quitar la transición CSS
          > 
            The Chair to Start
          </Text>
        </>
      )}
      <primitive
        position={[8.1, -0.1, -0.7]}
        ref={modelRef}
        rotation-y={Math.PI / -3.5}
        scale={0.8}
        object={scene}
        onDoubleClick={handleDoubleClick} 
        onPointerOver={handlePointerOver} 
        onPointerOut={handlePointerOut}  
      />
    </>
  );
}
