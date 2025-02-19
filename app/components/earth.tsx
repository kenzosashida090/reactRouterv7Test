import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

import React from 'react';
const Earth: React.FC = ()=> {
    // const colorMap = useLoader(TextureLoader, "./earth_albedo.jpg")
    // const bumpMap = useLoader(TextureLoader, "./earth_bump.jpg")
    // const specularMap = useLoader(TextureLoader, "./earth_specular.png")
    // const earthRef = React.useRef<any>(null);


    // useFrame(() => {
    //     if (earthRef.current) {
    //       // Gira la Tierra alrededor del eje Y (vertical)
    //       earthRef.current.rotation.y += 0.002;
    //     }
    // })
    // return(
    //     <mesh ref={earthRef} rotation={[10, 20, 0]}>
    //         <sphereGeometry args={[19, 64, 64]} />
    //         <meshStandardMaterial
    //             map={colorMap}
    //             bumpMap={bumpMap}
    //             bumpScale={0.02}
    //             metalnessMap={specularMap}
    //             roughnessMap={specularMap}
    //         />
    //     </mesh>
    // )
    const {scene}  = useGLTF('./scene.gltf')
    return(
        <primitive object={scene} scale={1} position={[0.5,0.2,0.6]}/>
    )
}

const Scene : React.FC = () => {
    console.log("scere")
    return(
        // <Canvas  style={{ width: '100%', height: '500px' }} camera={{fov: 200,position: [0, 0, 20] }}>
        //     <ambientLight intensity={0.9} />
        //     {/* <directionalLight position={[0,0,9]} intensity={5}/> */}
        //     <directionalLight position={[5,5,3]} intensity={9}/>
        //     <Earth />
        // </Canvas>
        <Canvas    style={{ width: '100%', height: '300px' }} camera={{ position: [2, 5, 2], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
           
            <Earth />
        </Canvas>
    )
}

export default Scene