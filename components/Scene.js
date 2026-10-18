'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

const G = { color: '#C9A903', metalness: 0.9, roughness: 0.25 };
const M = () => <meshStandardMaterial {...G} />;
const L = 1.7, TOP = 2.2;

function Pan({ pan }) {
  return (
    <group ref={pan}>
      {[0, 2.09, 4.19].map((a) => (
        <mesh key={a} position={[Math.cos(a) * 0.4, -0.65, Math.sin(a) * 0.4]} rotation={[-Math.sin(a) * 0.55, 0, Math.cos(a) * 0.55]}>
          <cylinderGeometry args={[0.012, 0.012, 1.53]} /><M />
        </mesh>
      ))}
      <mesh position={[0, -1.3, 0]} scale={[1, 0.4, 1]}>
        <sphereGeometry args={[0.8, 40, 20, 0, 6.283, 1.6, 1.5]} /><meshStandardMaterial {...G} side={2} />
      </mesh>
    </group>
  );
}

function Scales() {
  const g = useRef(), beam = useRef(), l = useRef(), r = useRef();
  useFrame(({ clock, pointer, camera }) => {
    const t = clock.elapsedTime, s = Math.min(1, window.scrollY / 700);
    const th = Math.sin(t * 0.9) * 0.14 + s * 0.35;
    beam.current.rotation.z = th;
    l.current.position.set(-L * Math.cos(th), TOP - L * Math.sin(th), 0);
    r.current.position.set(L * Math.cos(th), TOP + L * Math.sin(th), 0);
    g.current.rotation.y += (pointer.x * 0.6 + Math.sin(t * 0.3) * 0.4 + s * 2.5 - g.current.rotation.y) * 0.05;
    g.current.rotation.x += (-pointer.y * 0.15 - g.current.rotation.x) * 0.05;
    g.current.position.y = -0.3 + s;
    camera.position.z = 7.5 + s * 2;
  });
  return (
    <group ref={g}>
      <mesh><cylinderGeometry args={[0.1, 0.16, 4.4, 24]} /><M /></mesh>
      <mesh position={[0, -2.25, 0]}><cylinderGeometry args={[1.1, 1.3, 0.3, 40]} /><M /></mesh>
      <mesh position={[0, TOP, 0]}><sphereGeometry args={[0.24, 32, 16]} /><M /></mesh>
      <mesh ref={beam} position={[0, TOP, 0]}><boxGeometry args={[L * 2, 0.09, 0.09]} /><M /></mesh>
      <Pan pan={l} /><Pan pan={r} />
    </group>
  );
}

function Ring({ r, sp, tilt }) {
  const m = useRef();
  useFrame((_, d) => (m.current.rotation.z += d * sp));
  return <mesh ref={m} rotation={[tilt, 0, 0]}><torusGeometry args={[r, 0.012, 8, 160]} /><meshStandardMaterial {...G} emissive="#C9A903" emissiveIntensity={0.5} /></mesh>;
}

function Dust() {
  const p = useMemo(() => Float32Array.from({ length: 450 }, () => (Math.random() - 0.5) * 12), []);
  const m = useRef();
  useFrame((_, d) => (m.current.rotation.y += d * 0.04));
  return <points ref={m}><bufferGeometry><bufferAttribute attach="attributes-position" count={150} array={p} itemSize={3} /></bufferGeometry><pointsMaterial size={0.05} color="#C9A903" sizeAttenuation /></points>;
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.4, 7.5], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.5} color="#fff6dd" />
      <pointLight position={[-5, 1, 3]} intensity={60} color="#4a8be0" />
      <pointLight position={[3, -2, 4]} intensity={30} color="#C9A903" />
      <Scales /><Ring r={3.4} sp={0.25} tilt={1.2} /><Ring r={4.1} sp={-0.15} tilt={0.5} /><Dust />
    </Canvas>
  );
}
