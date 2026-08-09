"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial, Line, Text } from "@react-three/drei";
import * as THREE from "three";

function Notebook() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* hardcover */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.32, 1.8]} />
        <meshStandardMaterial color="#254019" roughness={0.45} metalness={0.15} />
      </mesh>
      {/* spine accent */}
      <mesh position={[-1.29, 0, 0]}>
        <boxGeometry args={[0.14, 0.34, 1.82]} />
        <meshStandardMaterial
          color="#fdb913"
          emissive="#fdb913"
          emissiveIntensity={0.3}
          roughness={0.35}
          metalness={0.3}
        />
      </mesh>
      {/* page stack peeking from the right/front edges */}
      <mesh position={[0.14, 0, 0.02]}>
        <boxGeometry args={[2.3, 0.24, 1.7]} />
        <meshStandardMaterial color="#f4ecd8" roughness={0.85} />
      </mesh>
      {/* bookmark ribbon hanging off the front edge */}
      <mesh position={[-0.85, 0.02, 0.98]} rotation={[1.2, 0, 0]}>
        <boxGeometry args={[0.12, 0.4, 0.02]} />
        <meshStandardMaterial
          color="#ffd966"
          emissive="#fdb913"
          emissiveIntensity={0.25}
        />
      </mesh>
      {/* title embossed on the cover */}
      <Text
        position={[0.15, 0.17, 0.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.32}
        lineHeight={1.15}
        letterSpacing={0.03}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#fdb913"
        outlineWidth={0.004}
        outlineColor="#12210b"
      >
        {"CONCEPT\nAFFAIRS"}
      </Text>
    </group>
  );
}

function Pen() {
  return (
    <group position={[0.1, 0.26, -0.05]} rotation={[0.05, 0.5, 0.15]}>
      {/* lie the vertically-authored pen flat (world +Y -> world -X) */}
      <group rotation={[0, 0, Math.PI / 2]}>
        {/* barrel */}
        <mesh>
          <cylinderGeometry args={[0.06, 0.068, 1.7, 24]} />
          <meshStandardMaterial
            color="#fdb913"
            emissive="#fdb913"
            emissiveIntensity={0.15}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* grip section */}
        <mesh position={[0, -0.68, 0]}>
          <cylinderGeometry args={[0.05, 0.062, 0.34, 24]} />
          <meshStandardMaterial color="#20201f" metalness={0.5} roughness={0.35} />
        </mesh>
        {/* nib */}
        <mesh position={[0, -0.98, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.055, 0.3, 24]} />
          <meshStandardMaterial
            color="#ffd966"
            emissive="#fdb913"
            emissiveIntensity={0.5}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
        {/* pocket clip */}
        <mesh position={[0.1, 0.4, 0]}>
          <boxGeometry args={[0.035, 0.6, 0.08]} />
          <meshStandardMaterial
            color="#8bc34a"
            emissive="#8bc34a"
            emissiveIntensity={0.3}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        {/* cap band */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.063, 0.063, 0.06, 24]} />
          <meshStandardMaterial color="#8bc34a" metalness={0.7} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
}

function NotebookPen() {
  const groupRef = useRef<THREE.Group>(null);
  const objectRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (objectRef.current) objectRef.current.rotation.y += delta * 0.15;
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.06;

    if (groupRef.current) {
      const targetY = pointer.x * 0.9;
      const targetX = -pointer.y * 0.7;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        delta * 3
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        delta * 3
      );
    }
  });

  const nodePositions = useMemo(() => {
    const pts: [number, number, number][] = [];
    const count = 9;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.3;
      pts.push([
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ]);
    }
    return pts;
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <group ref={objectRef} scale={0.9}>
          {/* base 3/4 tilt so the cover faces the camera by default */}
          <group rotation={[-0.55, 0.4, 0]}>
            <Notebook />
            <Pen />
          </group>
        </group>
      </Float>

      <group ref={ringRef}>
        {nodePositions.map((pos, i) => (
          <group key={i}>
            <mesh position={pos}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? "#8bc34a" : "#ffd966"}
                emissive={i % 3 === 0 ? "#8bc34a" : "#fdb913"}
                emissiveIntensity={0.8}
              />
            </mesh>
            <Line
              points={[[0, 0, 0], pos]}
              color="#fdb913"
              transparent
              opacity={0.18}
              lineWidth={1}
            />
          </group>
        ))}
      </group>
    </group>
  );
}

function Stardust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        opacity={0.5}
        depthWrite={false}
      />
    </Points>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame((_, delta) => {
    const targetX = pointer.x * 0.8;
    const targetY = pointer.y * 0.5;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 2);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 2);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 4]} intensity={1.6} color="#ffffff" />
        <pointLight position={[3, 2.5, 3]} intensity={20} color="#fdb913" />
        <pointLight position={[-3, -1.5, -2]} intensity={14} color="#8bc34a" />
        <Suspense fallback={null}>
          <NotebookPen />
          <Stardust />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
