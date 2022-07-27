import React from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div className='CanvasContainer'>
      <Canvas>
        <ambientLight intensity={.5}/>
        <mesh>
          <boxGeometry/>
          <meshStandardMaterial/>
        </mesh>
      </Canvas>
    </div>
  )
}

