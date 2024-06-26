import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import {  Text, Sparkles, ContactShadows, Float, Center, Environment, OrbitControls } from '@react-three/drei';
import DancingModel from './DancingModel.jsx';


export default function DancingModelExperience() {

    const groupRef = useRef()



  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta / 10

  })





  return (
    <>
        <OrbitControls enableZoom= {false} />
      <Environment preset='city' />
      <directionalLight cast position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />


        <Float rotationIntensity={0.4}>
          <Center>
            <group ref={groupRef} >
            <DancingModel />
            </group>
            <Text font='./AtQuark2.woff' fontSize={0.7} position={[2.9, 5, 0.2]} rotation-y={-1.25} maxWidth={3.3} textAlign='center' color={"purple"}>
            FrontEnd 3D Web Developer
            </Text>
            <Text font='./AtQuark2.woff' fontSize={0.6} position={[-2.5, 5, 0.2]} rotation-y={1.25} maxWidth={3.1} textAlign='center'color={"purple"}>
                
                Hello!! I'm Jorge Guerrero
            </Text>
            <Sparkles size={6} scale={[6,3,2]} position-y={5.5} speed={0.2} count={100} />
          </Center>
        </Float>

        <ContactShadows position-y={-1.6} opacity={0.4} scale={5} blur={2.4} />

    </>
  );
}
