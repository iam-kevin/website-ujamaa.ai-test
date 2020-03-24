import React from 'react'

import { Container, TextField, Button } from '@material-ui/core'

// SVG
import ArrowSVG from '../assets/vectors/joinUsArrow.svg'
import '../assets/css/join-us.css'
export default () => {
    return (
        <Container style={{ background: "#DFE2E6" }} className='container' maxWidth={false}>
            <div className="join-us">
                <div className='join-info'>
                    <h2 className='title'>Join Our Medical Professional Network Today</h2>
                    <p>Ujamaa.AI is currently in a closed Beta. If you are interested in being the next Medical Facility or Doctor on our platform, please sign up below. We’ll bein touch once everything’s ready.</p>
                </div>
                <div className='input-fields'>
                    <TextField 
                        variant='filled'
                        label='Email' />
                    <TextField 
                        variant='filled'
                        label='Phone number' />
                    <Button variant='contained' color='secondary'>
                        Join us 
                    </Button>
                </div>
            </div>
            <div className='arrow-image'>
                <img src={ArrowSVG} alt='Join us arrow'/>
            </div>
        </Container>
    )
}