import React, { useRef} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'



export default () =>{
    const group = useRef();

    const {nodes} = useLoader(GLTFLoader, '/table04.gltf', loader=>{
    })
   

    const Table = [];

    for (const [key, value] of Object.entries(nodes)) {
        if( value.type === 'Mesh' && key !== 'Floor'){
            Table.push(value)
        }
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
                            key={i}
                        >
                        <meshToonMaterial
                            map={obj.material.map}
                            transparent={false}
                            fog={false}
                            attach = "material"
                            depthWrite={true}
                            />
                        </mesh>
                    )
                })
            }

    
                
                <mesh 
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
                </mesh>
                 
                
            </group>
    )

}