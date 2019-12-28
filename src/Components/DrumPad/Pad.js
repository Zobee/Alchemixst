import React, {useState} from 'react'


const Pad = ({id, sound, input, power, volume, pressed, ID}) => {
    const [click, setClick] = useState('')
    let down = ``
    
    pressed && ID === id ? down = `pad${id}Down` : down = ''

    const play = () => {
            setClick(`pad${id}Down`)
            const playback = new Audio(sound)
            playback.muted = !power
            playback.volume = volume
            playback.currentTime = 0
            playback.play();
            playback.remove();
            setTimeout(()=> setClick(''), 500)
    }
    

    return (
        <div onClick={play} className={`pad pad${id} ${down} ${click}`}>
            <p>{input}</p>
        </div>
    )
}

export default Pad