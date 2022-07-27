# How we got here:

We created a react application.
```bash
yarn create react-app r3ftechtalk
```
Then we added our dependencies 'three' & '@react-three/fiber'
```bash
yarn add three @react-three/fiber 
```
Dependencies for React Three Fiber:

To use React Three Fiber components have to be functional based. This is because of a dependency on hooks.

three - three.js is javascript library that utilized your processor to render 3d graphics using WebGL. WebGL is a javascript API that is used to render 3d web graphics.

Documentation:

https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

@react-three/fibder - is a react library that expresses three.js as JSX.

Documentation:

https://docs.pmnd.rs/react-three-fiber/getting-started/introduction#is-it-slower-than-plain-three.js?

## Ok so now what?

We need to set up a 'scene', 'camera', and 'light' to be able to have 3d objects display and render in our browser.

Reacr Three Fiber has all of these bundled into one convenient component called 'Canvas'. You can manually control these later if you need more control of your scene/lighting/cameras.

The canvas component directly relates to its parent. We can control the size of the canvas by setting the size of its parent - or if you want it to fill the screen we attach it to root.

Once we have the Canvas set up we still need to declare lighting, and a 3d object. 

## Objects: 
Here is the basic setup for a cube:

 ```JSX 
 <mesh>
    <boxGeometry />
    <meshStandardMaterial />
</mesh>
```
You will notice that ```<mesh> </mesh>``` contains box geometry and a mesh standard material. This is because we have to load a material into our 3d object. (like a texture or a color)

Here is a list of some 3d objects that can be declared in r3f (everything contained in the three.js documentation Geometry section can be declared) Do not forget to check out the properties for each constructor to see if any are required:
![Geometries](./screenshots/Geometries.png)



Cube: https://threejs.org/docs/#api/en/geometries/BoxGeometry translated to react-three/fiber: 
 ```JSX 
 <mesh>
    <boxGeometry />
    <meshStandardMaterial />
</mesh>
```
Sphere: https://threejs.org/docs/#api/en/geometries/SphereGeometry translated into react-three/fiber:
```JSX
 <mesh>
    <sphereGeometry />
    <meshStandardMaterial />
</mesh>
```
Cylindrical: https://threejs.org/docs/#api/en/geometries/CylinderGeometry translated into react-three/fiber:
```JSX
 <mesh>
    <cylinderGeometry />
    <meshStandardMaterial />
</mesh>
```
Dodecahedron: https://threejs.org/docs/#api/en/geometries/DodecahedronGeometry translated into react-three/fiber:
```JSX
 <mesh>
    <dodecahedronGeometry />
    <meshStandardMaterial />
</mesh>
```
## Lighting:

Ambient light sets the lighting for the entire scene. Here is the documentation: https://threejs.org/docs/#api/en/lights/AmbientLight

![Lights](./screenshots/Lights.png)

Here is the declaration:
```JSX
<ambientLight />
```
ambient light has properties of: color, and intensity. (Both are optional)

Here is an example of setting intensity:

```JSX
<ambientLight intensity={.5} />
```

There are more Lights outlined in the documentation under the Lights section. https://threejs.org/docs/?q=light#api/en/lights/Light

## Put it all together:

In our App.js lets create our canvas component, and create our lighting and mesh components. 

It should look something like this:

```JSX
import React from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div className='CanvasContainer'>
        <Canvas>
            <ambientLight intensity={.5}/>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    </div>
  )
}
```
And in our CSS:
```CSS
.CanvasContainer{
    height:100vh;
    width:100vw;
}
```
