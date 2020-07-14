import React, { useRef} from 'react';
import * as THREE from 'three'



export default (props) =>{
    const screenRef = useRef();
    const screen = props.nodes;

    const meow = () => {
        console.log('MEOW');
    }

    return(
            <group
                ref={screenRef}
            >
                        <mesh
                            geometry={screen.geometry}
                            position={screen.position}
                            onPointerDown={meow}
                            key={screen.name}
                            >
                        
                            <meshBasicMaterial
                                map={screen.material.map}
                                side={THREE.DoubleSide}
                                transparent={false}
                                reflectivity={1}
                                fog={false}
                                color="white"
                                attach = "material"
                                depthWrite={true}
                                />
                    
                            </mesh>
            </group>
    )

}