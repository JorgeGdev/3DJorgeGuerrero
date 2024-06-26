import { Canvas } from '@react-three/fiber';
import FactoryExperience from './FactoryExperience';
import "./factory.css"

export default function FactoryModel() {
  return (
    <Canvas 
      camera={{
        
        fov: 75,
        near: 0.1,
        far: 100,
        
        
      }}
    >
      <FactoryExperience />
      
    </Canvas>
  );
}