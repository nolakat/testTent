import React, { useState, useRef, useMemo, useEffect, Suspense} from 'react';
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader, LinearFilter } from "three"

import { extend, useLoader, useFrame, useThree } from 'react-three-fiber'
import { FadeShader } from "./shaders/FadeShader"
import { PixelShader } from "./shaders/PixelShader"
import img1 from "./img/img1.jpeg"
import img2 from "./img/img2.jpeg"
import disp from "./img/displacement/10.jpeg"

extend(meshline)


export default () =>{
    const group = useRef();

    const {nodes, materials} = useLoader(GLTFLoader, '/linecube.gltf', loader=>{      
    })



    // useFrame(() => {
    //     ref.current.rotation.x = ref.current.rotation.y += 0.01
    //     const curDisp = ref.current.material.uniforms.dispFactor.value
    //     ref.current.material.uniforms.dispFactor.value += ((hovered ? 1 : 0) - curDisp) * 0.1
    //   })
    


    return(
            <group
                ref={group}
            >

<mesh
      position={[0, 0, 0]}
      >
     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshToonMaterial
                    attach = "material"
                    color="#E4AEB4"
                    />
                       <shaderMaterial
                            attach="material"
                            args={[PixelShader]}
                        />
                </mesh>
            </group>
    )

}