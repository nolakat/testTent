import React, { useRef} from 'react';
import * as THREE from 'three'



export default (props) =>{

    const keyboardRef = useRef();
    const keyboard = props.nodes;

    const handleClick = () => {
        //console.log('handle click');
        props.petKitten();

    }

    const handleOver = (state) => {
        props.handleHover(state);
    }

    return(
            <group
                ref={keyboardRef}
            >
                        <mesh
                            geometry={keyboard.geometry}
                            position={keyboard.position}
                            onPointerOver={(e) => handleOver(true)}
                            onPointerOut={(e) => handleOver(false)}
                            onPointerDown={handleClick}
                            key={keyboard.name}
                            >
                        
                            <meshBasicMaterial
                                map={keyboard.material.map}
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