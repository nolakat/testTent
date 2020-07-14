import React, { useRef} from 'react';
import * as THREE from 'three'



export default (props) =>{
    const computer = useRef();


 console.log('PROPS', props);

    return(
            <group
                ref={computer}
            >


       


            </group>
    )

}