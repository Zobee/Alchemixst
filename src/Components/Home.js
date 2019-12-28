import React, {useState} from 'react'
import InstagramEmbed from 'react-instagram-embed'
import '../App.css';
import * as emailjs from 'emailjs-com'


function Home() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const validate = (mail) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        reg.test(mail) ? console.log('true') : alert("Invalid Email Address")
    }

    const reset = () => {
        setEmail('')
        setName('')
    }

    const handleSubmit = (e) => {
        let sendName = ''
        name === '' ? sendName = 'Friend' : sendName = name;
        validate(email);

        emailjs.send(
            'gmail',
            process.env.REACT_APP_TEMPLATE_KEY,
            {from_name: name, to_name: 'Alchemixst', email_add: email},
            process.env.REACT_APP_API_KEY
        )

        alert(`Mail Sent! Thanks ${sendName}!`)

        reset()
    }

    return (
        <div>
            <h1 className='my-2 font-weight-bold title-text'>Alchemixst</h1>
            <img className='my-1 img img-responsive' src="AlchemixstLogo.png" alt='img' />
            <div className='text-div'>
            <h5 className='m-3 home-text'>What's up! Thanks for taking the time to give this page a look. I'm a Toronto-based musician (wannabe) with a love of rock, hiphop and lo-fi. Check out some of my home-brewed, locally sourced lo-fi tracks. </h5>
            <h5 className='m-3 home-text'>Alchemixst is a Toronto local mother's basement-based lo-fi hiphop artist. Drawing influence from rock, vaporwave and hiphop. Alchemixst doesn't expect to ever be a household name, but if at least one person picks up what he's putting down, he'll be happy.</h5>
            <h5 className='m-3 home-text'>As of 2019, with over 30 followers on instagram and a whopping zero plays on spotify, Alchemixst is proving to be a real tour de force in the lo-fi scene. Critics have compared Alchemixst to... nobody. Cause Alchemixst's avante-garde stylist shouldn't be limited by simple comparisons (not because there aren't any critics listening, or anything). Today, Alchemixst is moving towards making a couple bucks for coffee. If you're strong in the wallet, but weak in the head, consider donating by clicking the coffee cup below, he'd really appreciate it.</h5>
            <h4 className='m-3 home-text font-weight-bold'>Beep Boop Bop - Lyrics to melt your heart</h4>
            </div>
            <hr />
            <h1 className='font-weight-bold mb-3'>Check out my latest track: </h1>
            <div className='ig row'>
                <div className='mx-3 col-xs-3'>
                <InstagramEmbed
                url='https://www.instagram.com/p/B5QBC7qBMII/?utm_source=ig_web_copy_link'
                maxWidth={200}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                onLoading={()=>{}}
                onSuccess={()=>{}}
                onAfterRender={()=>{}}
                onFailure={()=>{}}
                />
                </div>
                <div className='mx-3 mb-5 col-xs-3 text-justify ml-3'>
                    <h2 className='text-center font-weight-bold mt-3'>Get in touch:</h2>
                    <br/>
                    <h4 className='text-center mb-5'>Get on that email list son:</h4>
                    <form className='w-100'>
                        <input className='w-100 mb-2 textbox' type='text' name='Name' onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Name:'></input>
                        <input className='w-100 mt-2 textbox' type='text' name='Email' required onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Email:'></input>
                        <button type='submit' onClick={(e)=>{handleSubmit(e)}} className='mt-2 btn btn-block btn-secondary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Home


