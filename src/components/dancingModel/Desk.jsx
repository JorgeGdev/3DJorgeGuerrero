// Desk.jsx
import { useEffect, useRef, forwardRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Text, Float } from "@react-three/drei";
import { AnimationMixer } from "three";

const Desk = forwardRef(({ triggerTextAnimation }, ref) => {
  const { scene, animations } = useGLTF("./models/desk.glb");
  const mixer = useRef(null);

  // Estados para controlar la animación del texto
  const [textPositionY, setTextPositionY] = useState(-1); // Posición inicial debajo del suelo
  const [animateText, setAnimateText] = useState(false);

  // Referencias para los textos
  const nameTextRef = useRef();
  const titleTextRef = useRef();
  const arrowTextRef = useRef()

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);

    // Animación suave del texto
    if (animateText && textPositionY < 9.5) {
      setTextPositionY((prev) => Math.min(prev + delta * 5, 9.5)); // Velocidad de subida ajustable
    }
  });

  useEffect(() => {
    if (triggerTextAnimation) {
      setAnimateText(true); // Iniciar la animación del texto
    }
  }, [triggerTextAnimation]);

  return (
    <>
      <primitive
        position={[13.5, -0.1, 0]}
        ref={ref}
        rotation-y={Math.PI / 1}
        scale={0.8}
        object={scene}
      />
      <Float rotationIntensity={0.2}>
        <Text
          ref={nameTextRef}
          font="./AtQuark2.woff"
          position={[13.5, textPositionY - 1, -10]}
          fontSize={3.2}
          rotation-y={-Math.PI / 3.5}
          color="#70A1D5"
          anchorX="center"
          anchorY="middle"
        >
          Jorge Guerrero
        </Text>
      </Float>

      <Float rotationIntensity={0.3}>
        <Text
          ref={titleTextRef}
          font="./AtQuark2.woff"
          position={[13.5, textPositionY - 1, 10]}
          fontSize={3.5}
          rotation-y={-Math.PI / 1.25}
          color="#70A1D5"
          anchorX="center"
          anchorY="middle"
          
          
        >
          Web Developer
        </Text>
      </Float>
      
        <Text
          ref={arrowTextRef}
          font="./AtQuark2.woff"
          position={[-19, textPositionY - 5.5, 3]}
          fontSize={0.3}
          rotation-y={-Math.PI / 2.25}
          color="#70A1D5"
          anchorX="center"
          anchorY="middle"
        >
          Scroll for more
          🡇
        </Text>
      
    </>
  );
});

export default Desk;
