import React, { useRef, useState, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, Dom } from 'react-three-fiber'
import * as THREE from "three"
import Desk from './Desk'
import Monitor from './Monitor'
import Screen from './Screen'
import Keyboard from './Keyboard'
import Mouse from './Mouse'
import Palm from './Palm'
import Chair from './Chair'
import DeskPlant from './DeskPlant'
import './fonts/Minecraft.ttf'



const Room = (props) =>{
    const roomRef = useRef();
    const meowRef = useRef();

    const {nodes} = useLoader(GLTFLoader, '/room_draft07.gltf', loader=>{
    })
   
    // console.log('nodes', nodes);

    const [kittenAsleep, setKitten] = useState(true);    

    const meow = () => {
    
        setKitten(false)
        setTimeout(function() {
            setKitten(true)
        }, 2000);
        
    }

    const handleHover = (state) => {
        props.handleHover(state)
    }


    const Room = (props) => {
        const mesh = useRef()

        console.log('ROOM', props);
        const edges = useMemo(() => new THREE.EdgesGeometry(props.nodes.geometry, 12), [nodes])

    
        return (
            <group>
                <mesh geometry={props.nodes.geometry}>
                    <meshStandardMaterial transparent />
                </mesh>
                <lineSegments geometry={edges} renderOrder={100}>
                    <lineBasicMaterial color="black" />
                </lineSegments>
          </group>
        )
      }


    return(
            <group
                ref={roomRef}
            >
                <Dom position={[25, 50, 0]}>
                    <h1 id="kittenMeow" className={kittenAsleep ? '' : 'active'} ref={meowRef} >
                        <span>"</span>
                        <span className="char">M</span>
                        <span className="char">E</span>
                        <span className="char">O</span>
                        <span className="char">W</span>
                        <span className="char">!</span>
                        <span>"</span>
                    </h1>
                </Dom>
                <Room nodes={nodes['Cube']} />
                <Desk nodes={nodes['Table']} />
                <Chair nodes={nodes['Chair']} />
                <Monitor nodes={nodes['Monitor']} />
                <Screen nodes={nodes['Screen']} kittenStatus={kittenAsleep} />
                <Keyboard nodes={nodes['Keyboard']} petKitten={meow}  handleHover={handleHover}/>
                <Mouse nodes={nodes['Mouse']} /> 
                <DeskPlant nodes={nodes['DeskPlant']} />
                <Palm nodes={nodes['Palm']} />         
                
            </group>
    )

}

export default Room