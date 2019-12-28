import React from 'react'

const Controls = ({power, togglePower, deck, toggleDeck, changeVolume}) => {
    let deckName;
    deck === 0 ? deckName = "Drum N' Ass" : deckName = 'Kitten D Special'

    let onOff = 'powerLight ';
    power ? onOff += 'powerOn' : onOff += 'powerOff'

    return (
        <div className='padControls'>
            <h3>Control Pad</h3>
            <div className={onOff}></div>
            <div className='ctrlDiv'>
            
            <label className='switch'>
                <input 
                    type='checkbox' 
                    id='power' 
                    onChange={togglePower}>
                </input>
                <span className='slider'></span>
            </label>
            </div>
            
            <div className='ctrlDiv'>
            <h5>Current Deck:</h5>
            <p className='deckDisplay'>{`${deckName}`}</p>
            <label>
                <input
                   className={`deck deck${deck}`}
                   type='button'
                   id='deck'
                   onClick={toggleDeck}></input>
            </label>
            </div>
            <div className='ctrlDiv'>
                <h5>Volume:</h5>   
                <input 
                type='range'
                min='0' 
                max='1'
                step='0.1'
                onChange={changeVolume}
                ></input>
            </div>
        </div>
    )
}

export default Controls