import { PresentationControls, Environment} from '@react-three/drei';
import Walking from './Walking.jsx';



export default function WalkingExperience() {

   





  return (
    <>
        {/* <OrbitControls enableZoom= {false} /> */}
      <Environment preset='city' />
      


        <PresentationControls global polar={[-0.15, 0.5]} azimuth={[-1., 1.25]} config={{mass:2, tension:400}} snap={{mass: 4, tension:400}} >
       
          <group receiveShadow >
            <Walking />
          </group>
    
        </PresentationControls>
      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />   */}
          

    </>
  );

}