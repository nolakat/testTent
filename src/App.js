import React, { useRef, Suspense} from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree} from "react-three-fiber"

import Room from './Room'
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
        antialias="true"

          >
            <Controls />
            <Suspense fallback={<Box />} >
                <Room fog={false}/>
            </Suspense>

            <Effects />
          </Canvas>
      </div>
    </div>
  );
}

export default App;
