import * as THREE from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { VolumetricLightShader, PixelShader } from './shaders';


extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass })

export default function Effects(){
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)


  let test = new THREE.Vector2( window.innerWidth, window.innerHeight );
  let newtest = test.multiplyScalar( window.devicePixelRatio );

  

    return(
        <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
         {/* <unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
        <shaderPass attachArray="passes" args={[VolumetricLightShader]} needsSwap={false} /> */}

      </effectComposer>
    )


}