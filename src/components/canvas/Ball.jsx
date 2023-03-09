import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ position, texture }) => {
  const [decal] = useTexture([texture]);

  return (
    <Float speed={1.25} rotationIntensity={0.75} floatIntensity={1}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 2]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={[1.75, 1.75, 1.75]} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.5}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={10}
          minDistance={1}
          maxDistance={3}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.75}
        />
        <Ball position={[0, 0, 0]} texture={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
