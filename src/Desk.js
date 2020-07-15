import React, { useRef} from 'react';
import * as THREE from 'three'



const Desk = (props) =>{
    const deskRef = useRef();


    return(
            <group
                ref={deskRef}
            >


                {
                    props.nodes.children.map((node, i) =>{
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
                                reflectivity={0}
                                fog={false}
                                color="white"
                                attach = "material"
                                depthWrite={true}
                                flatShading={true}
                                />
                    
                            </mesh>
                        )
                    })
                }


            </group>
    )

}

export default Desk;