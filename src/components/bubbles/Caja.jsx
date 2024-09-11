import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

export default function Caja() {
  const { scene } = useGLTF('../models/bubble/caja.glb');

  // Hacemos que todas las partes del modelo sean transparentes
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "white",       // Puedes cambiar el color si lo deseas
        transparent: true,    // Hacemos el material transparente
        opacity: 0,         // Controla la opacidad (0 es invisible, 1 es opaco)
      });
    }
  });

  return (
    
      <primitive scale={4} scale-x={10} position-y={-1} object={scene} />
    
  );
}
