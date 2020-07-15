import React, { useRef, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, Dom } from 'react-three-fiber'
import Desk from './Desk'
import Monitor from './Monitor'
import Screen from './Screen'
import Keyboard from './Keyboard'
import Mouse from './Mouse'
import './fonts/Minecraft.ttf'



const Room = () =>{
    const roomRef = useRef();
    const meowRef = useRef();

    const {nodes} = useLoader(GLTFLoader, '/newtable02.gltf', loader=>{
    })
   
    console.log('nodes', nodes);

    const [kittenAsleep, setKitten] = useState(true);

    const meow = () => {
    
        setKitten(false)
        setTimeout(function() {
            setKitten(true)
        }, 2000);
        
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
                <Desk nodes={nodes['Table']} />
                <Monitor nodes={nodes['Monitor']} />
                <Screen nodes={nodes['Screen']} kittenStatus={kittenAsleep} />
                <Keyboard nodes={nodes['Keyboard']} petKitten={meow} />
                <Mouse nodes={nodes['Mouse']} />                 
                
            </group>
    )

}

export default Room