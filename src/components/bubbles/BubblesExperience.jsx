import { OrbitControls, Environment } from "@react-three/drei";
import Bubbles from "./Bubbles";
import BubblesGroup from "./BubblesGroup";
import { Suspense, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import Caja from "./Caja";

export default function BubblesExperience() {
  

  const [bubbleScene, setBubbleScene] = useState(null);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Environment background files={["/img/brown.hdr"]} />
        <Bubbles setScene={setBubbleScene} />
        {bubbleScene && <BubblesGroup bubbleScene={bubbleScene} />}
      </Suspense>
      <directionalLight position={[0, 3, 2]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <RigidBody type="fixed" colliders="trimesh" restitution={2.5}>
        <Caja />
      </RigidBody>
    </>
  );
}
