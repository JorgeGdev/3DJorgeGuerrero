import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { AnimationMixer, Vector3, Quaternion } from 'three';
import { CapsuleCollider, RigidBody } from '@react-three/rapier';

export default function JorgeModel({ destination, chairPosition, onReachChair }) {
  const { scene, animations } = useGLTF('../models/character.glb');
  const mixer = useRef(null);
  const ref = useRef();
  const [action, setAction] = useState(null);
  const [hasArrived, setHasArrived] = useState(false);
  const [isSeated, setIsSeated] = useState(false);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);

      const saluteAction = mixer.current.clipAction(animations.find(clip => clip.name === 'saludar'));
      const walkAction = mixer.current.clipAction(animations.find(clip => clip.name === 'caminar'));
      const sitAction = mixer.current.clipAction(animations.find(clip => clip.name === 'sentarse'));
      const quietoAction = mixer.current.clipAction(animations.find(clip => clip.name === 'quieto'));
      const idleAction = mixer.current.clipAction(animations.find(clip => clip.name === 'idle'));

      saluteAction.reset().play();

      setAction({ salute: saluteAction, walk: walkAction, sit: sitAction, quieto: quietoAction, idle: idleAction });

      mixer.current.update(0);
    }
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);

      if (isSeated) return;

      const target = chairPosition || destination;
      if (target) {
        const currentPosition = new Vector3().copy(ref.current.translation());
        const direction = new Vector3().subVectors(target, currentPosition);
        direction.y = 0;
        const distance = direction.length();

        if (distance > 0.01) {
          direction.normalize();

          const quaternion = new Quaternion().setFromUnitVectors(
            new Vector3(0, 0, 1),
            direction
          );

          ref.current.setNextKinematicRotation(quaternion);

          const newPosition = currentPosition.addScaledVector(direction, delta * 2);
          ref.current.setTranslation(newPosition, true);

          if (action && action.walk && !action.walk.isRunning()) {
            action.salute.fadeOut(0.1);
            action.walk.reset().fadeIn(0.2).play();
            setHasArrived(false);
          }
        } else {
          if (!hasArrived) {
            setHasArrived(true);

            if (action && action.walk.isRunning()) {
              action.walk.fadeOut(0.1);

              if (chairPosition) {
                const centerPosition = new Vector3(0, 0, 0);
                const directionToCenter = new Vector3().subVectors(centerPosition, chairPosition).normalize();

                const targetRotation = new Quaternion().setFromUnitVectors(
                  new Vector3(0, 0, 1),
                  directionToCenter
                );

                ref.current.setNextKinematicRotation(targetRotation);

                ref.current.setTranslation({ x: currentPosition.x, y: currentPosition.y + 1, z: currentPosition.z }, true);

                action.sit.reset().setLoop(THREE.LoopOnce).fadeIn(0.2).play();
                action.sit.clampWhenFinished = true;

                mixer.current.addEventListener('finished', () => {
                  setIsSeated(true);

                  

                  // Iniciar temporizador para "idle" sin detener "sit" de inmediato
                  setTimeout(() => {
                    
                    action.idle.reset().fadeIn(0.5).play(); // Suave transición a "idle"
                    mixer.current.update(0);
                  }, 5000);

                  if (onReachChair) onReachChair();
                });
              } else {
                action.quieto.reset().fadeIn(0.2).play();
              }
            }
          }
        }
      }
    }
  });

  return (
    <RigidBody
      ref={ref}
      colliders={false}
      mass={5}
      position={[-5, -0.05, 0]}
      enabledRotations={[false, true, false]}
      type="kinematicPosition"
    >
      <primitive
        scale={0.9}
        object={scene}
      />
      <CapsuleCollider args={[0.9, 0.9]} position={[0, 1.5, 0]} />
    </RigidBody>
  );
}
