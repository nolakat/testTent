import React, { useRef} from 'react';
import * as THREE from 'three';

const DeskPlant = (props) => {
    const deskPlantRef = useRef();

    console.log('DESKPLANT ', props);

    return(
        <group
        ref={deskPlantRef}
        >
            {
                props.nodes.children.map((node) => {
                    return(
                        <mesh
                        geometry={node.geometry}
                        position={node.position}
                        key={node.name}
                        >
                    
                        <meshBasicMaterial
                            map={ node.name == "DeskPlantMesh_2" ? '' : node.material.map}
                            side={THREE.DoubleSide}
                            transparent={false}
                            reflectivity={0}
                            fog={false}
                            color={ node.name == "DeskPlantMesh_2" ? '#e3c3e3' : 'white'}
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


export default DeskPlant