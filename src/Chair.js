import React, { useRef} from 'react';
import * as THREE from 'three'



const Chair = (props) =>{
    const chairRef = useRef();
    const chair = props.nodes;


//  const thisMaterial = props.nodes.material.map; 
//  thisMaterial.magFilter = THREE.NearestFilter;
//  thisMaterial.minFilter = THREE.LinearMipMapLinearFilter;


    return(
            <group
                ref={chairRef}
            >
                        <mesh
                            geometry={chair.geometry}
                            position={chair.position}
                            key={chair.name}
                            >
                        
                            <meshBasicMaterial
                                map={chair.material.map}
                                side={THREE.DoubleSide}
                                attach = "material"
                           
                                />
                    
                            </mesh>
            </group>
    )

}

export default Chair;