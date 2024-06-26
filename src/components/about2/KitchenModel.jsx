import { Canvas } from '@react-three/fiber';
import KitchenExperience from './KitchenExperience.jsx';
import ModelSmallExperience from '../modelSmall/ModelSmallExperience.jsx';


export default function KitchenModel() {
  return (
    <Canvas 
      camera={{
        camera:[0.5,1,6],
        fov: 45,
        near: 0.1,
        far: 200,
        
        
      }}
    >
      <KitchenExperience />
      <ModelSmallExperience />
    </Canvas>
  );
}