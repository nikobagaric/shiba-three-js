import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Shiba = ({ isMobile }) => {
  const shiba = useGLTF("./models/shiba2/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={2.5} />
      <primitive
        object={shiba.scene}
        shadows
        scale={isMobile ? 0.6 : 0.7}
        position={[0, -0.05, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ShibaContactCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
        />
        <Shiba isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ShibaContactCanvas;
