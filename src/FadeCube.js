import React, { useState, useRef, useMemo, useEffect, Suspense} from 'react';
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader, LinearFilter } from "three"

import { extend, useLoader, useFrame, useThree } from 'react-three-fiber'
import { FadeShader } from "./shaders/FadeShader"
import img1 from "./img/img1.jpeg"
import img2 from "./img/img2.jpeg"
import disp from "./img/displacement/10.jpeg"
extend(meshline)


export default () =>{
    const group = useRef();

    const ref = useRef()

    const {nodes, materials} = useLoader(GLTFLoader, '/linecube.gltf', loader=>{
        
    })


    const t = useLoader(TextureLoader, [img1, img2, disp])

    const [texture1, texture2, dispTexture] = useMemo(() => t.map(t => ((t.minFilter = LinearFilter), t)), [t])
    const [hovered, setHover] = useState(false)


    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += 0.01
        const curDisp = ref.current.material.uniforms.dispFactor.value
        ref.current.material.uniforms.dispFactor.value += ((hovered ? 1 : 0) - curDisp) * 0.1
      })
    


    return(
            <group
                ref={group}
            >
                <mesh 
                      ref={ref}

                    geometry={nodes.Cube.geometry}
                    position={[0, 0, 0]}
                    onPointerMove={e => setHover(true)}
                    onPointerOut={e => setHover(false)}
                >
                    <meshToonMaterial
                    attach = "material"
                    color="#E4AEB4"
                    />
                       <shaderMaterial
        attach="material"
        args={[FadeShader]}
        uniforms-texture-value={texture1}
        uniforms-texture2-value={texture2}
        uniforms-disp-value={dispTexture}
      />
                </mesh>
            </group>
    )

}