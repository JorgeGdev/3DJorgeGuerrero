import { Canvas } from '@react-three/fiber';
import DancingModelExperience from './DancingModelExperience';

export default function DancingMainModel() {
  return (
    <Canvas 
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <DancingModelExperience />
    </Canvas>
  );
}