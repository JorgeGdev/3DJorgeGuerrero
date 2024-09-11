import { Canvas } from "@react-three/fiber";
import BubblesExperience from "./BubblesExperience.jsx";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

export default function BubblesModel() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 5, 10], // Ajustar la cámara más atrás en el eje Z
          fov: 50, // Puedes aumentar el FOV si quieres abarcar más área
          near: 0.1,
          far: 200,
        }}
      >
        <Suspense>
          <Physics>
            <BubblesExperience />
          </Physics>
        </Suspense>
      </Canvas>
      
      
    </>
  );
}
