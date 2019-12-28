import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faInstagram, faYoutube, faSoundcloud} from '@fortawesome/free-brands-svg-icons'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className='footer mt-3'>
            <div className='footer-icons footer'>
                <a href='https://www.instagram.com/alchemixst/'><FontAwesomeIcon className='icon' size='2x' icon={faInstagram}/></a>
                <a href='https://www.youtube.com/channel/UCyfzgJ1rD_jTxlttOrqgeGw'><FontAwesomeIcon className='icon' size='2x' icon={faYoutube}/></a>
                <a href='https://soundcloud.com/user-546453141'><FontAwesomeIcon className='icon' size='2x' icon={faSoundcloud}/></a>
                <a href='https://ko-fi.com/E1E719PW0'><FontAwesomeIcon className='icon' size='2x' icon={faCoffee}/></a>
            </div>
        </div>
    ) 
}

export default Footer
