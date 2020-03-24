import React from 'react'
import { Container, Grid } from '@material-ui/core'

// Import Icons
import StepOneIcon from '../assets/vectors/stepOne.svg'
import StepTwoIcon from '../assets/vectors/stepTwo.svg'
import StepThreeIcon from '../assets/vectors/stepThree.svg'
import StepFourIcon from '../assets/vectors/stepFour.svg'

// Import css
import '../assets/css/book-section.css'

const GRID_FULL_SIZE = 12

function StepGridCell({number, count, stepIcon, stepInformation }) {
    const size = (GRID_FULL_SIZE / count) >> 0;
    return (
        <Grid item xs={size}>
            {stepIcon()}
            <h3>Step {number}</h3>
            <p>{stepInformation}</p>
        </Grid>
    )
}

export default () => {
    return (
        <Container style={{ background: "#FFF" }} className="book-section">
            <h2 className='title'>How to book with UJAMAA.AI</h2>
            <Grid container>
                <StepGridCell
                    number={1}
                    count={4}
                    stepIcon={ () => <img src={StepOneIcon} alt="Step 1 Icon"/>}
                    stepInformation="Search and find a suitable doctor or dentist for your ailment without the usual hiccups" />
                <StepGridCell
                    number={2}
                    count={4}
                    stepIcon={ () => <img src={StepTwoIcon} alt="Step 1 Icon"/>}
                    stepInformation="Follow few simple steps to sign up" />
                <StepGridCell
                    number={3}
                    count={4}
                    stepIcon={ () => <img src={StepThreeIcon} alt="Step 1 Icon"/>}
                    stepInformation="Add a payment method" />
                <StepGridCell
                    number={4}
                    count={4}
                    stepIcon={ () => <img src={StepFourIcon} alt="Step 1 Icon"/>}
                    stepInformation="Schedule an appointment at your earliest convenience" />
            </Grid>
        </Container>
    )
}