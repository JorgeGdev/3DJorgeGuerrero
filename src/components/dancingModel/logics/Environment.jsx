import { Suspense, useRef, useState } from 'react';
import { Center, Clone, Stars } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import Ocean from '../Ocean.jsx';
import Crater from '../Crater.jsx';
import Desk from '../Desk.jsx';
import Ruins from '../Ruins.jsx';
import Fire from '../Fire.jsx'; 
import Chair from '../Chair.jsx';
import JorgeModel from '../JorgeModel.jsx';
import DeskMovement from './DeskMovement.jsx';

export default function Environment({
  groupRef, 
  destination, 
  goToChair, 
  handleReachChair, 
  handleChairDoubleClick, 
  clicksDisabled, 
  column
}) {
  const deskRef = useRef();
  const [triggerFinalMove, setTriggerFinalMove] = useState(false); // Controla la animación del escritorio
  const [animationStarted, setAnimationStarted] = useState(false); // Controla que la animación no se ejecute dos veces
  const [triggerTextAnimation, setTriggerTextAnimation] = useState(false); // Controla la animación de los textos

  // Función que se llama cuando el personaje alcanza la silla
  const onCharacterReachChair = () => {
    handleReachChair();

    // Si la animación no ha comenzado, activarla
    if (!animationStarted) {
      setTriggerFinalMove(true);
      setAnimationStarted(true); // Evitar que la animación se ejecute dos veces
    }
  };

  // Función que se llama cuando la animación del escritorio termina
  const handleDeskAnimationComplete = () => {
    setTriggerTextAnimation(true); // Iniciar la animación de los textos
  };

  return (
    <Center>
      <Suspense fallback={null}>
        <group ref={groupRef}>
          <JorgeModel 
            destination={goToChair ? new THREE.Vector3(8.5, -0.1, 0) : destination} 
            chairPosition={goToChair ? new THREE.Vector3(8.5, -0.1, 0) : null}
            onReachChair={onCharacterReachChair} 
          />
        </group>
        <Ocean />
        <Desk ref={deskRef} triggerTextAnimation={triggerTextAnimation} />
        <DeskMovement 
          ref={deskRef} 
          triggerFinalMove={triggerFinalMove} 
          onDeskAnimationComplete={handleDeskAnimationComplete} 
        />

        <RigidBody type='fixed' colliders="trimesh">
          <Crater />
          <Chair 
            onDoubleClick={handleChairDoubleClick} 
            isMovingToChair={goToChair} 
            clicksDisabled={clicksDisabled} 
          />
          <Ruins />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <mesh rotation-x={-Math.PI / 2} position={[0, -1.6, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        </RigidBody>

        {/* Columnas clonadas */}
        <primitive object={column.scene} scale={1} position={[-3, -0.5, 14]} />
        <Clone object={column.scene} scale={1} position={[8, -0.5, -14]} />
        <Clone object={column.scene} scale={1} position={[-3, -0.5, -14]} />
        <Clone object={column.scene} scale={1} position={[8, -0.5, 14]} />

        {/* Fuegos */}
        <Fire scale={4} position={[-5, 8.7, 14]} />
        <Fire scale={4} position={[6, 8.7, -14]} />
        <Fire scale={4} position={[-5, 8.7, -14]} /> 
        <Fire scale={4} position={[6, 8.7, 14]} />

        {/* Estrellas */}
        <Stars
          radius={20}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
      </Suspense>
    </Center>
  );
}
