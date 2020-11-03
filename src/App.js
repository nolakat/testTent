import React, { useRef, useState, Suspense} from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree} from "react-three-fiber"

import Room from './Room'
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
  
    // useFrame(() => {
    //   orbitRef.current.update()
    // })

    console.log('camera', camera.position)

  
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


  const moveCursor = (e) => {
    //console.log('MOVE CURSOR', e.pageX, e.pageY);
    const cursor = document.querySelector('.testCursor');
    cursor.style.left = `${e.pageX}px`
    cursor.style.top = `${e.pageY}px`
  }

  const handleHover = (status) =>{    
    setHover(status)

    console.log('HANDLE HOVER', isHover);
  }


  return (
    <div className="App">
      <div className="App__canvas">
        <Cursor isHover={isHover}/>
        <Canvas
        camera={{ position: [-100, 100, 150] }}
        onMouseMove={ moveCursor}
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
