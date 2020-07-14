import React, { useRef, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, Dom } from 'react-three-fiber'
import Desk from './Desk'
import Monitor from './Monitor'
import Screen from './Screen'
import Keyboard from './Keyboard'
import Mouse from './Mouse'


export default () =>{
    const roomRef = useRef();
    const meowRef = useRef();

    const {nodes} = useLoader(GLTFLoader, '/newtable02.gltf', loader=>{
    })
   
    console.log('nodes', nodes);

    const [kittenAsleep, setKitten] = useState(true);

    const meow = () => {
        console.log('MEOW');
        console.log('ref', meowRef);
        // meowRef.current.style.color = 'blue';

        setKitten(false)

        setTimeout(function() {
            setKitten(true)
        }, 1000);
        
    }


    console.log(nodes['Monitor']);

    return(
            <group
                ref={roomRef}
            >
                <Dom position={[25, 50, 0]}>
                    <h1 id="kittenMeow" className={kittenAsleep ? '' : 'active'} ref={meowRef} >MEOW!</h1>
                </Dom>
                <Desk nodes={nodes['Table']} />
                <Monitor nodes={nodes['Monitor']} />
                <Screen nodes={nodes['Screen']} />
                <Keyboard nodes={nodes['Keyboard']} petKitten={meow} />
                <Mouse nodes={nodes['Mouse']} />                 
                
            </group>
    )

}