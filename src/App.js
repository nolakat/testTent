import React, { useState, useEffect, useMemo, useRef, Suspense} from 'react';
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import Cube from './Cube'
import PixelCube from './PixelCube'
import FadeCube from './FadeCube'
import Tent from './Tent'
import Plant from './Plant'
import Table from './Table'
import Effects from './Effects'

import './index.scss'
extend({ OrbitControls })


function App() {


  const Box = (props) => {
    const mesh = useRef()

    return (
      <mesh
      {...props}
      ref={mesh}
      scale={[1, 1 ,1]}
      >
     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color='red' />
      </mesh>
    )
  }

  const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
  
    // useFrame(() => {
    //   orbitRef.current.update()
    // })
  
    return (
      <orbitControls
        autoRotate
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        minDistance={4}
        // maxDistance={4}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }





  return (
    <div className="App">
      <div className="App__canvas">
        <Canvas
        camera={{ position: [-100, 100, 150] }}
          >
            {/* <ambientLight color={'white'} intensity={0.1} /> */}
            {/* <hemisphereLight fog={false} />
            <directionalLight intensity={1} color={'white'} target='[1, 1, 1]' castShadow/>

            <spotLight position={[15, 0, 5]} color={'white'} penumbra={.05} castShadow /> */}

            {/* <ambientLight color={'red'} intensity={0} castShadow={false}/> */}
            <pointLight color={'white'} position={[40, 20, 40]} castShadow={false} />


            <Controls />

            <Suspense fallback={<Box />} >
                <Table fog={false}/>
            </Suspense>
            <Effects />
          </Canvas>
      </div>
    </div>
  );
}

export default App;
