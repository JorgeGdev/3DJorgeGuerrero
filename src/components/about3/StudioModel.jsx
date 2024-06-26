import { Canvas } from '@react-three/fiber';
import StudioExperience from './StudioExperience.jsx';
import SittingExperience from '../sittingSmall/SittingExperience.jsx';


export default function StudioModel() {
  return (
    <Canvas 
      camera={{
        camera:[0.5,1,6],
        fov: 45,
        near: 0.1,
        far: 200,
        
        
      }}
    >
      <StudioExperience />
      <SittingExperience />
      
    </Canvas>
  );
}