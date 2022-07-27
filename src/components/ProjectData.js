import Cube from "./Cube"
import Sphere from "./Sphere"
import Dodecahedron from "./Dodecahedron"
import Cylinder from "./Cylinder"
import Capsule from "./Capsule"
import CodeAlong from "./CodeAlong"
import Cone from "./Cone"

export const ProjectData = [
    {
        projectName: "React Three Fiber",
        image: <Cube/>,
        description: ["By: Stephen OMarrah"],
    },
    {
        projectName: "Table of contents",
        image: <Sphere/>,
        description: ["What is React Three Fiber?",  "Limitations of React Three Fiber", "What could this be useful for?", "Code along", "Explore the possibilities Questions"],
    },
    {
        projectName: "What is React Three Fiber?",
        image: <Dodecahedron/>,
        description: ["React Three Fiber is a React library",  "Three.js is a javascript library", "WebGL is a javascript API"],
    },
    {
        projectName: "Limitations",
        image: <Cylinder/>,
        description: ["The user's processor (i3 chips)",  "Accessability",],
    },
    {
        projectName: "Usefulness",
        image: <Capsule/>,
        description: ["Creating unique user experiences",  "Products", "Gaming"],
    },
    {
        projectName: "Code Along",
        image: <CodeAlong/>,
        description: ["https://github.com/SOMarrah/R3FTechTalk",],
    },
    {
        projectName: "Questions / Resources",
        image: <Cone/>,
        description: ["https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene", "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction", "https://github.com/pmndrs/drei"],
    },
]