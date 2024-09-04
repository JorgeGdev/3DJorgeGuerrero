import { useRef, useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import Environment from './logics/Environment.jsx';
import CameraControls from './logics/CameraControls.jsx';
import PostProcessing from './logics/PostProcessing.jsx';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export default function MainExperience() {
  const { camera, gl, scene } = useThree();
  const groupRef = useRef();
  const [destination, setDestination] = useState(null);
  const [goToChair, setGoToChair] = useState(false);
  const [clicksDisabled, setClicksDisabled] = useState(false);
  const raycaster = useRef(new THREE.Raycaster());
  const column = useGLTF('../models/column.glb');

  const handleDoubleClick = (event) => {
    if (clicksDisabled) return;

    const [x, y] = [(event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1];
    raycaster.current.setFromCamera({ x, y }, camera);
    const intersects = raycaster.current.intersectObjects(scene.children, true);

    if (intersects.length > 0 && !goToChair) {
      setDestination(intersects[0].point);
    } else {
      console.log('No intersection found or going to chair');
    }
  };

  const handleChairDoubleClick = () => {
    setGoToChair(true);
    setDestination(null);
    setClicksDisabled(true);

    gl.domElement.removeEventListener('dblclick', handleDoubleClick);
  };

  const handleReachChair = () => {
    setGoToChair(false);
    document.body.style.cursor = 'default';
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      gl.domElement.addEventListener('dblclick', handleDoubleClick);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      gl.domElement.removeEventListener('dblclick', handleDoubleClick);
    };
  }, [camera, gl, scene, clicksDisabled]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[-5, 2, -5]} intensity={0.6} />
      <Environment
        groupRef={groupRef}
        destination={destination}
        goToChair={goToChair}
        handleReachChair={handleReachChair}
        handleChairDoubleClick={handleChairDoubleClick}
        clicksDisabled={clicksDisabled}
        column={column}
      />
      <PostProcessing />
      <CameraControls camera={camera} gl={gl} scene={scene} />
    </>
  );
}
