import React from 'react'


export default (props) => {

    const handleOver = (state) => {
        props.handleHover(state);
    }

    const links =['About', 'Work', 'Contact']
    const linkItems = links.map((link, index)=>
    <li
    key={index}
    className="nav__link"
    onPointerOver={(e) => handleOver(true)}
    onPointerOut={(e) => handleOver(false)}
    >{link}</li>
    );

    return ( 
    <div className="navContainer">
        <h3  
            onPointerOver={(e) => handleOver(true)}
            onPointerOut={(e) => handleOver(false)}>Nolan.Dev</h3>
        <nav>
            <ul className="nav__container">
                {linkItems}
            </ul>
        </nav>
    </div>
    )

}
