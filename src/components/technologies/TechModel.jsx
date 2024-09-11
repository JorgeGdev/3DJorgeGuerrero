import { Canvas } from "@react-three/fiber";
import TechExperience from "./TechExperience.jsx";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import "../../styles/global.css";

export default function TechModel() {
  return (
    <>
      <Canvas
        className="r3f"
        camera={{
          position: [0, 0, 5], // Ajusta la posición de la cámara
          fov: 45,
          near: 0.1,
          far: 200,
        }}
      >
        <Suspense fallback={null}>
          <TechExperience />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{
          background: "rgba(0, 0, 0, 0.8)", // Fondo oscuro
          width: "100vw", // Ocupa todo el ancho de la ventana
          height: "100vh", // Ocupa todo el alto de la ventana
        }}
        innerStyles={{
          color: "white",
          fontSize: "2rem", // Aumentar el tamaño del texto
        }}
        barStyles={{
          background: "white",
          width: "80%", // Ajustar el ancho de la barra
          height: "20px", // Aumentar la altura de la barra
        }}
        dataStyles={{
          color: "white",
          fontSize: "1.5rem", // Aumentar el tamaño del porcentaje
        }}
      />
    </>
  );
}
