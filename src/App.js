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
  
    useFrame(() => {
      orbitRef.current.update()
    })
  
    return (
      <orbitControls
        autoRotate
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }





  return (
    <div className="App">
      <div className="App__canvas">
        <Canvas
          >
            <ambientLight intensity={0.95} />
            <spotLight position={[15, 20, 5]} color={'red'} penumbra={.05} castShadow />
            <Controls />

            <Suspense fallback={<Box />} >
                <PixelCube />
            </Suspense>
            <Effects />
          </Canvas>
      </div>
    </div>
  );
}

export default App;
