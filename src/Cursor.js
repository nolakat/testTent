import React from 'react'
import TestCursor from './img/mouseFinal.png'
import TestHover from './img/mouseHover.png'


const Cursor = (props) => {

  const getImageName = () => {
      return props.isHover ? TestHover : TestCursor
  }

    return (
        <div className="testCursor" >
          <img src={getImageName()} alt="cursor" />
        </div>
    )
}

export default Cursor 