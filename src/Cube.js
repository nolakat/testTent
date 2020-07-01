import React, { useState, useRef, useMemo, useEffect, Suspense} from 'react';
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { extend, useLoader, useFrame, useThree } from 'react-three-fiber'

extend(meshline)


export default () =>{
    const group = useRef();

    // const {nodes, materials} = useLoader(GLTFLoader, '/cube01.gltf', loader=>{
        
    // })


    const {nodes, materials} = useLoader(GLTFLoader, '/linecube.gltf', loader=>{
        
    })




    // console.log('nodes', nodes);
    // console.log('materials', materials);

    let test = new THREE.Vector2( window.innerWidth, window.innerHeight );
    let newtest = test.multiplyScalar( window.devicePixelRatio );

    let geometry = nodes.Cube.geometry;
    let edges = new THREE.EdgesGeometry(geometry);
    let lines = new THREE.LineSegments( 
        edges,
         new THREE.LineBasicMaterial({
              color: 'black'
          }) );

    console.log('geo', geometry);
    // console.log('vertices', geometry.attributes.position);


    const vertices = []

    var tempGeo = new THREE.Geometry().fromBufferGeometry(nodes.Cube.geometry);


        for (var i= 0; i< tempGeo.vertices.length; i++) {
            vertices.push(tempGeo.vertices[i].applyMatrix4(nodes.Cube.matrix));
    }

// console.log('vertices', vertices);



function Fatline({ width, color, vert }) {
    const material = useRef()
    return (
      <mesh>
        <meshLine attach="geometry" vertices={vert} />
        <meshLineMaterial attach="material" ref={material} transparent depthTest={false} lineWidth={width} color={color}  />
      </mesh>
    )
  }


  function Lines({ vertices }) {
    const lines = useMemo(
      () =>
        vertices.map((vert) => {
          return {
            color: 'red',
            width: 5,
            vert
          }
        })
    )
    return lines.map((props, index) => <Fatline key={index} {...props} />)
  }
  


    return(
            <group
                ref={group}
            >
                <primitive object={lines} />;
                <mesh 
                    geometry={nodes.Cube.geometry}
                    position={[0, 0, 0]}
                >
                     <meshToonMaterial
                                attach = "material"
                                color="white"
                                />
                      {/* <meshLine attach="geometry" vertices={vertices} />
                      <meshLineMaterial
                        attach="material"
                        transparent
                        depthTest={false}
                        lineWidth={.005}
                        color={'red'}
                        /> */}
                </mesh>
            </group>
    )

}