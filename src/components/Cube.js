
import React, {useState, useRef} from 'react'
import '../App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01,
        ref.current.rotation.y += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        
        >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

export default function Cube() {
  return (
    <Canvas shadows>
        <directionalLight position={[0,10,0]} intensity={10} castShadow shadow-mapSize={[1024,1024]}/>

        <ambientLight intensity={.5}/>

        <Box castShadow position={[3,.5,0]}/>

        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0,-.5,0]} receiveShadow>
          <planeBufferGeometry attach={'geometry'} args={[25,25]}  />
          <meshPhongMaterial attach={'material'} color='#ffffff'/>
        </mesh>

        <OrbitControls/>

</Canvas>
  )
}


