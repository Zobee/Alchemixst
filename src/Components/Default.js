import React from 'react'
import {Link} from 'react-router-dom';

function Default() {
    return (
        <div className='page'>
            <h1 className='title-text'>404</h1>
            <h5>Woah, wrong page.</h5>
            <Link to='/' className="nav-link" >Go Home</Link>
        </div>
    )
}

export default Default