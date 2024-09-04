import { useGLTF } from '@react-three/drei';

export default function Ruins() {
  const ruins = useGLTF('../models/landscape.glb');
  
  return <primitive 
            position={[2.5, -0.15, 0]} 
            rotation-y={Math.PI / 0.5} 
            scale={10} 
            object={ruins.scene} 
            castShadow 
            receiveShadow 
          />;
}
