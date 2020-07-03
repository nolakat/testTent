import React, { useRef} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'



export default () =>{
    const group = useRef();

    const {nodes, materials} = useLoader(GLTFLoader, '/spacecube.gltf', loader=>{
        
    })




    console.log('nodes', nodes);
    console.log('materials', materials);

    const geometry = nodes.Cube.geometry;
    const texture = nodes.Cube.material;

  
    console.log('geo', geometry);
    console.log('texture', texture);
   


    return(
            <group
                ref={group}
            >
                <mesh 
                    geometry={nodes.Cube.geometry}
                    position={[0, 0, 0]}
                >
                     <meshStandardMaterial
                          map={texture.map}
                          side={THREE.DoubleSide}
                          transparent={true}
                          attach = "material"
                          depthWrite={false}
                          />
                </mesh>
            </group>
    )

}