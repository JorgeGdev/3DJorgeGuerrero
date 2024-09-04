import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier'; // Importa Physics
import MainExperience from './MainExperience';

export default function MainModel() {
  return (
    <Canvas 
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <Physics> 
        <MainExperience />
      </Physics>
    </Canvas>
  );
}
