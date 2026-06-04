"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function City() {
  const city = useGLTF("/models/city.glb");

  return (
    <primitive
      object={city.scene}
      scale={2}
      position={[0, -1, 0]}
    />
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [8, 6, 8],
        fov: 45,
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={3} />

      <City />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
      />
    </Canvas>
  );
}