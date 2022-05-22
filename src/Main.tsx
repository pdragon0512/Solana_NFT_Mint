import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import {Suspense } from "react";
const Model = () =>{
    const gltf = useLoader(GLTFLoader, 'treehouse_1.glb')
    return (
      <>
         <primitive  position={[0, 0, 0]} object={gltf.scene} scale={1} />
      </>
    )
  }
  
const Main = () =>{
    
    return(
        <div>
            <Canvas camera={{ position: [4, 6, 8] }} style={{width: window.innerWidth, height : window.innerHeight}}>
                <spotLight intensity={0.5} />
                <ambientLight intensity={0.8} position={[5, 20, 20]}/>
                <Suspense  fallback={null}>
                  <Model />
                </Suspense> 
                <OrbitControls />
              </Canvas>
        </div>
    );
}
export default Main;