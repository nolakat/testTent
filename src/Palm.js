import React, { useRef} from 'react';
import * as THREE from 'three'



const Palm = (props) =>{
    const PalmRef = useRef();
    const Palm = props.nodes;


//  const thisMaterial = props.nodes.material.map; 
//  thisMaterial.magFilter = THREE.NearestFilter;
//  thisMaterial.minFilter = THREE.LinearMipMapLinearFilter;


    return(
            <group
                ref={PalmRef}
            >
                {Palm.children.map((child, index) => {
                     return ( <mesh
                      geometry={child.geometry}
                      position={child.position}
                      key={child.name}
                      >
                  
                      <meshBasicMaterial
                          map={child.material.map}
                        //   magFilter={THREE.NearestFilter}
                        //   minFilter={THREE.LinearMipMapLinearFilter}
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
                     )
                }) }
                      
            </group>
    )

}

export default Palm;