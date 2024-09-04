import { useGLTF } from '@react-three/drei';

export default function Column() {
  const column = useGLTF('../models/column.glb');
  
  return <primitive scale={0.5} object={column.scene} />;
}
