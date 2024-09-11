import { Instances, Instance } from "@react-three/drei";
import ReactLogo from "./ReactLogo";
import ThreejsLogo from "./ThreejsLogo";
import BlenderLogo from "./BlenderLogo";
import GithubLogo from "./GithubLogo";
import CssLogo from "./CssLogo";
import HtmlLogo from "./HtmlLogo";
import PythonLogo from "./PythonLogo";
import JavascriptLogo from "./JavascriptLogo";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

function FloatingBubble({ children, position }) {
  const ref = useRef();
  const [_, setIsDragging] = useState(false);

  const handlePointerOver = () => {
    document.body.style.cursor = "grab"; // Cambiar puntero a mano empuñada
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto"; // Regresar el puntero a normal
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    document.body.style.cursor = "grabbing"; // Cambiar a la mano que "agarra"
    e.stopPropagation();
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    document.body.style.cursor = "grab"; // Volver a la mano empuñada cuando sueltas
    e.stopPropagation();

    const impulse = {
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 10,
    };
    ref.current.applyImpulse(impulse, true);
  };

  return (
    <RigidBody
      ref={ref}
      colliders={"ball"}
      restitution={0.9}
      friction={0.1}
      gravityScale={0.2}
      linearDamping={0.3}
      angularDamping={0.3}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {children}
    </RigidBody>
  );
}

export default function BubblesGroup({ bubbleScene }) {
  return (
    <Instances limit={100} geometry={bubbleScene.children[0].geometry} material={bubbleScene.children[0].material}>
      <FloatingBubble position={[0, 5, 0]}>
        <Instance />
        <ReactLogo position={[0, -0.15, 0]} scale={0.3} />
      </FloatingBubble>

      <FloatingBubble position={[2, 5, 0]}>
        <Instance />
        <ThreejsLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>

      <FloatingBubble position={[-2, 5, 0]}>
        <Instance />
        <BlenderLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>

      <FloatingBubble position={[1, 5, -2]}>
        <Instance />
        <GithubLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>

      <FloatingBubble position={[-1.5, 5, -1.5]}>
        <Instance />
        <CssLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>

      <FloatingBubble position={[-2.5, 5, 1.5]}>
        <Instance />
        <HtmlLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>

      <FloatingBubble position={[2.5, 5, 1.5]}>
        <Instance />
        <PythonLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>

      <FloatingBubble position={[-3.5, 5, 1.5]}>
        <Instance />
        <JavascriptLogo position={[0, -0.15, 0]} scale={0.7} />
      </FloatingBubble>
    </Instances>
  );
}
