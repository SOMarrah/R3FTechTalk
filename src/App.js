import React from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ProjectCarousel from './components/ProjectCarousel'
import { ProjectData } from './components/ProjectData'

export default function App() {
  return (
      <ProjectCarousel slides={ProjectData}/>
  )
}

