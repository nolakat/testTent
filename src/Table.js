import React, { useRef} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'
import Desk from './Desk'




export default () =>{
    const group = useRef();

    const {nodes} = useLoader(GLTFLoader, '/newtable02.gltf', loader=>{
    })
   
    console.log('nodes', nodes);

    // const Table = [];

    const desk = nodes['Table'];

    console.log('DESK', desk);

    // for (const [key, value] of Object.entries(nodes)) {
    //     if( value.type === 'Mesh' && key !== 'Floor'){
    //         Table.push(value)
    //     }
    // }


    return(
            <group
                ref={group}
            >

                <Desk nodes={nodes['Table']} />

                {/* {
                    desk.children.map((node, i) =>{
                        return(
                            <mesh
                            geometry={node.geometry}
                            position={node.position}
                            key={node.name}
                            >
                        
                            <meshBasicMaterial
                                map={node.material.map}
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
                } */}




                 {/* {
                Object.keys(Table).map((node, i) =>{
                    const obj = Table[node];

                    const thisMaterial = obj.material.map; 
                    thisMaterial.magFilter = THREE.NearestFilter;
                    thisMaterial.minFilter = THREE.LinearMipMapLinearFilter;

                    return(
                        <mesh
                            geometry={obj.geometry}
                            position={obj.position}
                            onPointerDown={test}
                            onPointerOver={changeMouse}
                            key={i}
                        >
                            
                        <meshBasicMaterial
                            map={thisMaterial}
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
            } */}

    
                
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