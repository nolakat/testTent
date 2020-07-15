import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import testSprite from './img/littlekitten.png'
import homer from './img/homer.png'
import { PlainAnimator } from "three-plain-animator/lib/plain-animator"




const Screen = (props) =>{
    const screenRef = useRef();
    const screen = props.nodes;

    const meow = () => {
        console.log('MEOW');
    }


    const url = testSprite;
    const spriteTexture = useLoader(THREE.TextureLoader, url)
    spriteTexture.flipY = false
    spriteTexture.center = {x: 0, y: -.1}
    const screenSaver = screen.material.map
 

    const [animator] = useState(() => new PlainAnimator(spriteTexture, 8, 3, 24, 20))


    useFrame(() => animator.animate())



    // console.log('sprit', spriteTexture);
    // console.log('testKitten', screenSaver);



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
                attach = "material"
                map={  props.kittenStatus ? screenSaver : spriteTexture }
                // transparent={false} 
                // depthTest={false}
                // depthWrite={false}
                side={THREE.FrontSide}
                />
    
            </mesh>
                     
            </group>
    )

}

export default Screen