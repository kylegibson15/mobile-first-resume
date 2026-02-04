import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return (
    <mesh
      onPointerMove={(e) => {
        mouse.current.x = (e.pointer.x) * 2;
        mouse.current.y = (e.pointer.y) * 2;
      }}
      visible={false}
    >
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial />
    </mesh>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  const shapes = useMemo(() => {
    const items: {
      position: [number, number, number];
      rotation: [number, number, number];
      scale: number;
      type: 'icosahedron' | 'octahedron';
      speed: number;
    }[] = [];

    for (let i = 0; i < 15; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 5,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: Math.random() * 0.15 + 0.05,
        type: Math.random() > 0.5 ? 'icosahedron' : 'octahedron',
        speed: Math.random() * 0.3 + 0.1,
      });
    }
    return items;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * shapes[i].speed;
        child.rotation.y += delta * shapes[i].speed * 0.7;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.5}
        >
          <mesh
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {shape.type === 'icosahedron' ? (
              <icosahedronGeometry args={[1, 0]} />
            ) : (
              <octahedronGeometry args={[1, 0]} />
            )}
            <meshBasicMaterial
              color="#00B9AF"
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false }}
        style={{ background: '#0A1929' }}
      >
        <color attach="background" args={['#0A1929']} />
        <ambientLight intensity={0.1} />

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        <FloatingShapes />
        <CameraRig />
      </Canvas>
    </div>
  );
}
