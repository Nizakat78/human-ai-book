import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={1} />
    </mesh>
  )
}

function Earth({ orbitRadius }: { orbitRadius: number }) {
  const earthRef = useRef<THREE.Group>(null!)
  const moonRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    // Earth orbits the Sun
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2
      const angle = state.clock.elapsedTime * 0.2
      earthRef.current.position.x = Math.cos(angle) * orbitRadius
      earthRef.current.position.z = Math.sin(angle) * orbitRadius
    }
    // Moon orbits Earth
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 2
      const moonAngle = state.clock.elapsedTime * 2
      const moonOrbitRadius = 0.5
      moonRef.current.position.x = Math.cos(moonAngle) * moonOrbitRadius
      moonRef.current.position.z = Math.sin(moonAngle) * moonOrbitRadius
    }
  })

  return (
    <group ref={earthRef}>
      <mesh>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>
      <group ref={moonRef}>
        <mesh>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#d1d5db" emissive="#d1d5db" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </group>
  )
}

export default function SolarSystem() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 8, 12], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        
        <Sun />
        <Earth orbitRadius={5} />
        
        <OrbitControls enableZoom={true} enablePan={false} minDistance={5} maxDistance={20} />
      </Canvas>
    </div>
  )
}