import React, { useRef} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'



export default () =>{
    const group = useRef();

    const {nodes} = useLoader(GLTFLoader, '/newtable02.gltf', loader=>{
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

    const changeMouse = () =>{
        
        console.log('Change Moues');   
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