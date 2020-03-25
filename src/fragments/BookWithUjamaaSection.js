import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

// Import Icons
import StepOneIcon from '../assets/vectors/stepOne.svg'
import StepTwoIcon from '../assets/vectors/stepTwo.svg'
import StepThreeIcon from '../assets/vectors/stepThree.svg'
import StepFourIcon from '../assets/vectors/stepFour.svg'

// Import css
import '../assets/css/book-section.css'

// custom colors
import { Colors } from '../config/style'

const GRID_FULL_SIZE = 12

const useStyles = makeStyles( theme => ({
    root: {
        "& .title": {
            fontSize: 28,       
            color: Colors.main.DARK,
            padding: 0
        },
        "& .info": {
            maxWidth: 268
        },
        "& img": {
            padding: "32px 0"
        }
    },
    title: {
        fontSize: 36,
        color: "#000"
    }
}));


function StepGridCell({number, count, stepIcon, stepInformation }) {
    const size = (GRID_FULL_SIZE / count) >> 0;
    return (
        <Grid item md={size} sm={6} xs={12}>
            {stepIcon()}
            <h3 className='title'>Step {number}</h3>
            <p className='info'>{stepInformation}</p>
        </Grid>
    )
}

export default () => {    
    const classes = useStyles()

    return (
        <Container style={{ background: "#FFF" }} className="book-section" maxWidth={false}>
            <h2 className={classes.title} >How to book with UJAMAA.AI</h2>
            <Grid container className={classes.root}>
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