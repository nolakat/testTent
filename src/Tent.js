import React, { useState, useRef, useMemo, useEffect, Suspense} from 'react';
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { extend, useLoader, useFrame, useThree } from 'react-three-fiber'
import { Scene } from 'three';

extend(meshline)


export default () =>{


    const group = useRef();

    const {nodes, materials} = useLoader(GLTFLoader, '/tent05.gltf', loader=>{
        
    })


    console.log('nodes', nodes);
    console.log('materials', materials);


    const tentLines = (node) =>{
        let geometry = node.geometry;
        let edges = new THREE.EdgesGeometry(geometry);
        var edgeMaterial = new THREE.LineBasicMaterial( { color: 'grey' } );
        let lines = new THREE.LineSegments( 
            edges,
            edgeMaterial);

            return lines
    }



    const TentFill = (node) => {
        const material = useRef()

       
            return (
                <mesh geometry={node.geometry}
                >
                <meshToonMaterial attach="material" color="purple" />
                </mesh>
            )
        
}




    return(
            <group ref={group}>
                <>
               
    


                <mesh geometry={nodes.Cube_0.geometry}
                >
                    <meshToonMaterial attach="material" color="white" />
                </mesh>

                <mesh geometry={nodes.Cube_1.geometry}
                >
                    <meshToonMaterial attach="material" color="white" />
                </mesh>

                <mesh geometry={nodes.Cube_2.geometry}
                >
                    <meshToonMaterial attach="material" color="white" />
                </mesh>



                    {
                        nodes.Tent.children.map((node, index) => {
                            return (
                            <primitive key={index} object={tentLines(node)} />
                            )
                        })
                    }


                   </>

                        
                
            </group>
    )

}