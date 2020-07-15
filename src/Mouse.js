import React, { useRef} from 'react';
import * as THREE from 'three'



const Mouse = (props) =>{
    const mouseRef = useRef();
    const mouse = props.nodes;

    const mouseClick = () => {
        console.log('Click');
    }

    return(
            <group
                ref={mouseRef}
            >
                <mesh
                    geometry={mouse.geometry}
                    position={mouse.position}
                    onPointerDown={mouseClick}
                    key={mouse.name}
                    >
                
                    <meshBasicMaterial
                        map={mouse.material.map}
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

export default Mouse;