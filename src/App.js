import React, { useRef, useState, Suspense} from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame} from "react-three-fiber"

import Room from './Room'
import Nav from './Nav'
import Effects from './Effects'
import Cursor from './Cursor'


import './index.scss'
extend({ OrbitControls })


function App() {

  const [isHover, setHover] = useState(false);


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
      // orbitRef.current.update()
      console.log('camera', camera.position)

    })

    console.log('camera', camera.position)
    console.log('TEST', Math.PI / 3)

  
    return (
      <orbitControls
        autoRotate
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3.5}
        minDistance={87}
        maxDistance={160}
        zoomSpeed={.25}
        panSpeed={.25}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    )
  }


  const moveCursor = (e) => {
    const cursor = document.querySelector('.testCursor');
    cursor.style.left = `${e.pageX}px`
    cursor.style.top = `${e.pageY}px`
  }

  const handleHover = (status) =>{    
    setHover(status)
  }


  return (
    <div className="App"
         onMouseMove={ moveCursor}
    >
      <div className="App__canvas">
        <Cursor isHover={isHover}/>
        <Nav handleHover={handleHover} />
        <Canvas
        camera={{ position: [-50, 60, 100] }}
          >
            <Controls />

            <Suspense fallback={<Box />} >
                <Room handleHover={handleHover} fog={false}/>
            </Suspense>

            <Effects />
          </Canvas>
      </div>
    </div>
  );
}

export default App;
