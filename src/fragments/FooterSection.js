import React from 'react'
import Container from '@material-ui/core/Container'

import '../assets/css/footer.css'
import { TextField, Button, Grid } from '@material-ui/core'

/**
 * TODO: polishing of the input and buttons
 */

function FooterBase () {
    return (
        <>
            <hr className='line'/>
            <div className='footer-base'>
                <div className='left'>
                    <p>Copyright 2020. All rights reserved</p>
                </div>
                <div className='right'> 
                    <ul className='policies'>
                        <li>Terms &amp; Condition</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function SignUpForOurNewsLetter () {
    return (
        <Container className='signup-newsletter'>
            <p className='title'>Sign up for our newsletter</p>
            <div className='form-controls'>
                <TextField 
                    id="filled-basic" 
                    label="Email" 
                    variant="filled" />
                <Button
                    variant='outlined'
                    color='default'>
                        Subscribe
                </Button>
            </div>
        </Container>
    )
}

function NavigationLists() {
    return (
        <Grid container className='nav-lists'>
            <Grid item xs={6}>
                {/* Section for  */}
                <div className='nav-list'>
                    <span className='title'>Company</span>
                    <ul className='items'>
                        <li>Book an appointment</li>
                        <li>FAQs</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='nav-list'>
                    <span className='title'>Get in touch</span>
                    <ul className='items'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    )
}
export default () => {
    return (
        <Container className='footer'>
            <footer>
                <Grid container spacing={3} className='footer-main'>
                    <Grid item xs={6}>
                        <SignUpForOurNewsLetter />
                    </Grid>
                    <Grid item xs={6}>
                        <NavigationLists />
                    </Grid>
                </Grid>
                <FooterBase />
            </footer>
        </Container>
    )
}