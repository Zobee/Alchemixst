import React from 'react'

const Visualizer = ({pressed}) => {
    let active = ''
    pressed ? active = 'activeVisual' : active = ''

    return (<div style={{backgroundImage : 'url(/Textures/Speaker.png)'}} className={`${active} visualizer`}></div>)
}

export default Visualizer