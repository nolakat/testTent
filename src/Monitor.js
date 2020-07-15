import React, { useRef} from 'react';
import * as THREE from 'three'



const Monitor = (props) =>{
    const monitorRef = useRef();
    const monitor = props.nodes;


//  const thisMaterial = props.nodes.material.map; 
//  thisMaterial.magFilter = THREE.NearestFilter;
//  thisMaterial.minFilter = THREE.LinearMipMapLinearFilter;


    return(
            <group
                ref={monitorRef}
            >
                        <mesh
                            geometry={monitor.geometry}
                            position={monitor.position}
                            key={monitor.name}
                            >
                        
                            <meshBasicMaterial
                                map={monitor.material.map}
                                magFilter={THREE.NearestFilter}
                                minFilter={THREE.LinearMipMapLinearFilter}
                                side={THREE.DoubleSide}
                                transparent={false}
                                reflectivity={1}
                                fog={false}
                                color="white"
                                attach = "material"
                                depthWrite={true}
                                generateMipmaps={false}
                                />
                    
                            </mesh>
            </group>
    )

}

export default Monitor;