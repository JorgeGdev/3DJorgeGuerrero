import {
  Environment,
  useTexture,
  shaderMaterial,
  Float,
  PresentationControls,
} from "@react-three/drei";
import Character1 from "./Character1.jsx";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { extend } from "@react-three/fiber";

// Crear un shader material para ajustar brillo y contraste
const VideoShaderMaterial = shaderMaterial(
  { uTexture: null, uBrightness: 0.1, uContrast: 0.5 },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform sampler2D uTexture;
  uniform float uBrightness;
  uniform float uContrast;
  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(uTexture, vUv);
    
    // Ajustar brillo
    color.rgb += uBrightness;

    // Ajustar contraste
    color.rgb = (color.rgb - 0.5) * max(uContrast, 0.0) + 0.5;

    gl_FragColor = color;
  }
  `
);

extend({ VideoShaderMaterial });

export default function TechExperience() {
  const videoRef = useRef();
  const [videoTexture, setVideoTexture] = useState(null);
  const texture1 = useTexture("/img/fondo1.png"); // Mantén la textura original para la escena
  const visualTexture = useTexture("/img/visual2.png"); // Cargar visual2.png como fallback para el video
  const [isVideoReady, setIsVideoReady] = useState(false); // Estado para verificar si el video está listo

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "./img/video.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto"; // Preload del video

    video.addEventListener("canplay", () => {
      video.play();
      const videoTex = new THREE.VideoTexture(video);
      videoTex.minFilter = THREE.LinearFilter;
      videoTex.magFilter = THREE.LinearFilter;
      videoTex.format = THREE.RGBFormat;
      videoTex.colorSpace = THREE.SRGBColorSpace; // Asegúrate de usar el espacio de color adecuado

      videoRef.current = videoTex;
      setVideoTexture(videoTex);
      setIsVideoReady(true); // Actualiza el estado cuando el video esté listo
    });

    // Limpiar el video al desmontar el componente
    return () => {
      video.pause();
      video.removeAttribute("src"); // Eliminar la referencia al video para liberar memoria
      video.load();
    };
  }, []);

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={3} />
      <directionalLight position={[-5, 2, -5]} intensity={3.6} />

      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-0.2, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.05}>
          <group receiveShadow>
            <Character1 />

            <mesh position={[0, 0, -5]}>
              <planeGeometry args={[16.5, 8.3]} />

              {/* Mostrar visual2.png mientras el video se carga */}
              {isVideoReady ? (
                <videoShaderMaterial
                  uTexture={videoTexture}
                  uBrightness={0.1}
                  uContrast={1.5}
                />
              ) : (
                <meshStandardMaterial map={visualTexture} /> // Fallback con visual2.png
              )}
            </mesh>

            {/* Usar la textura1 en su ubicación original */}
            <mesh position={[1.19, -1.9, -2]}>
              <boxGeometry args={[9.3, 2, 0.2]} />
              <meshStandardMaterial map={texture1} />
            </mesh>
          </group>
        </Float>
      </PresentationControls>
    </>
  );
}
