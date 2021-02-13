import React from 'react'


export default (props) => {

    const handleOver = (state) => {
        props.handleHover(state);
    }

    return ( 
    <div class="navContainer">
        <h3  
            onPointerOver={(e) => handleOver(true)}
            onPointerOut={(e) => handleOver(false)}>TEST</h3>
    </div>
    )

}