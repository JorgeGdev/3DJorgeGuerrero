import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier'; // Importa Physics
import MainExperience from './MainExperience';
import { Loader } from '@react-three/drei';

export default function MainModel() {
  return (

    <>

<Canvas 
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <Physics> 
        <MainExperience />
      </Physics>
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
