import {PresentationControls, Environment} from '@react-three/drei';
import ModelSmall from './ModelSmall.jsx';



export default function ModelSmallExperience() {

   





  return (
    <>
        {/* <OrbitControls enableZoom= {false} /> */}
      <Environment preset='city' />
      <directionalLight castShadow position={[1, 2, 3]} intensity={3.5} />
      <ambientLight intensity={1} />


        <PresentationControls global polar={[-0.15, 0.5]} azimuth={[-1., 1.25]} config={{mass:2, tension:400}} snap={{mass: 4, tension:400}} >
       
          <group receiveShadow >
            <ModelSmall />
          </group>
    
        </PresentationControls>
      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />   */}
          

    </>
  );

}
