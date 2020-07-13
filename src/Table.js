import React, { useRef} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'



export default () =>{
    const group = useRef();

    const {nodes} = useLoader(GLTFLoader, '/newtable.gltf', loader=>{
    })
   
    console.log('nodes', nodes);

    const Table = [];

    for (const [key, value] of Object.entries(nodes)) {
        if( value.type === 'Mesh' && key !== 'Floor'){
            Table.push(value)
        }
    }

    const test = () => {
        console.log('CLICK');
    }

   
    // Object.keys(Table).map((node) => {
    //     console.log('node', Table[node].material)
    // })



    return(
            <group
                ref={group}
            >
                 {
                Object.keys(Table).map((node, i) =>{
                    const obj = Table[node];

                    return(
                        <mesh 
                            geometry={obj.geometry}
                            position={obj.position}
                            onPointerDown={test}
                            key={i}
                        >
                        <meshBasicMaterial
                            map={obj.material.map}
                            side={THREE.DoubleSide}
                            transparent={false}
                            reflectivity={1}
                            fog={false}
                            color="white"
                            attach = "material"
                            depthWrite={true}
                            />
                        </mesh>
                    )
                })
            }

    
                
                {/* <mesh 
                    geometry={nodes.Floor.geometry}
                    position={nodes.Floor.position}
                >
                     <meshBasicMaterial
                          color={'red'}
                          transparent={false}
                          fog={false}
                          attach = "material"
                          depthWrite={true}
                          />
                </mesh> */}
                 
                
            </group>
    )

}