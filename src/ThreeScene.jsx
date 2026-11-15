
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function AnimatedShape() {
  const shapeRef = useRef();

  useFrame((state, delta) => {
    if (shapeRef.current) {
      shapeRef.current.rotation.x += delta * 0.3;
      shapeRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh ref={shapeRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#c49a6c"
          roughness={0.3}
          metalness={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
