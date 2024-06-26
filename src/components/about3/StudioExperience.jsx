import { PresentationControls, Center, Environment} from '@react-three/drei';
import Studio from './Studio.jsx'



export default function StudioExperience() {

   
  return (
    <>
        {/* <OrbitControls enableZoom= {false} /> */}
      <Environment preset='city' />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />


        <PresentationControls global polar={[-0.15, 0.5]} azimuth={[-1., 1.25]} config={{mass:2, tension:400}} snap={{mass: 4, tension:400}} >
        <Center>
            <group >
            <Studio />
            </group>
          </Center>          
        </PresentationControls>
      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />   */}
          

    </>
  );
}
