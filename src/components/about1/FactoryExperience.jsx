import { PresentationControls, Center, Environment} from '@react-three/drei';
import Factory from './Factory.jsx'
import Walking from '../walkingSmall/Walking.jsx';



export default function FactoryExperience() {

   





  return (
    <>
        {/* <OrbitControls enableZoom= {false} /> */}
      <Environment preset='city' />
      <directionalLight castShadow position={[1, 2, 3]} intensity={3.5} />
      <ambientLight intensity={0.5} />


        <PresentationControls global polar={[-0.15, 0.5]} azimuth={[-1., 1.25]} config={{mass:2, tension:400}} snap={{mass: 4, tension:400}} >
        <Center>
            <group receiveShadow >
            <Factory />
            <Walking />
            </group>
          </Center>          
        </PresentationControls>
      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />   */}
          

    </>
  );
}
