import React, {useState, useEffect, useCallback} from 'react'

import Pad from './Pad'
import padData from '../../padData'
import Controls from './Controls'
import PadHeader from './PadHeader'
import Visualizer from './Visualizer'


const Drumpad = () => {
    const [power, setPower] = useState(false)
    const [deck, setDeck] = useState(0)
    const [volume, setVolume] = useState(1)
    const [pressed, setPressed] = useState(false)
    const [ID, setID] = useState()

    const pad = padData.map(pad => <Pad 
        power={power} 
        id={pad.id} 
        name={pad.name} 
        sound={pad.sound[deck]}
        input={pad.keyinput}
        volume={volume}
        pressed={pressed}
        ID={ID}
        />)

    const keyPress = useCallback((e) => {
        if (power){
            for (let i in pad){
                if (e.key.toUpperCase() === pad[i].props.input){
                    play(pad[i].props.sound, pad[i].props.id)
                }
            }
        } else {
            console.log('off');
        }
    
    }, [power, deck, volume, pressed, ID]) //These are the callback's depenencies... or something.


    useEffect(() => {
            document.addEventListener('keydown', keyPress)
        
        return () => {
            document.removeEventListener('keydown',keyPress)
        }

    }, [keyPress])

    const play = (aud, id) => {
            setPressed(true)
            const playback = new Audio(aud)
            playback.currentTime = 0
            playback.volume = volume
            playback.play();
            playback.remove();
            setID(id)
            setTimeout(() => setPressed(false), 500)
    }

    const togglePower = () => {
        setPower(!power)
    }

    const toggleDeck = () => {
        deck === 0 ? setDeck(1) : setDeck(0)
    }

    const changeVolume = (e) => {
        const {value} = e.target;
        setVolume(value)
    }

    

    return (
        <div className='padWrapper container-fluid'>
            <PadHeader text='Alchemic Beats' />
            {pad}
            <Controls 
            power={power} 
            togglePower={togglePower} 
            deck={deck} 
            toggleDeck={toggleDeck} 
            volume={volume}
            changeVolume={changeVolume}
            />
            <Visualizer pressed={pressed} />
            <div className='padFooter'></div>
        </div>
    )
}

export default Drumpad