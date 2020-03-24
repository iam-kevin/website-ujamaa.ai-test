/**
 * Header section for the application.
 * Should include the header details and intro content
 */
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

import { Search, LocationOnOutlined } from '@material-ui/icons'

import Logo from '../assets/vectors/ujamaaLogo.svg'
import HeaderImage from '../assets/vectors/homeImageFrame.svg'
import '../assets/css/header.css'


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

/**
 * This is the Navigation component in the Header Section of the page
 */
function Header () {
    const ulopts = {
        "#book-appointment": "Book an appointment",
        "#faqs": "FAQs",
        "#about-us": "About us",
        "#contact": "Contact"
    }

    // const HeaderItems = () => 
    return (
        <nav className='header'>
            <div className='left'>
                <img src={Logo} width={128} height={20.08} className='header-image' alt='ujamaa.ai Logo' />
                <ul className='nav-items'>
                    <li><a href="#">Book an appointment</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* TODO: Change the default color scheme to: #252021, and other things, like border radius...; Same goes for the `outlined` variant */}
            <div className='right'>
                <div className='buttons'>
                    <Button variant='outlined'>
                        Log in
                    </Button>
                    <Button variant='contained'>
                        Sign up
                    </Button>
                </div>
            </div>
        </nav>
    )
}

/**
 * 
 * @param {title, subtitle} props Properties for the Header section 
 */
function HeaderInfo({ title, subtitle }) {
    return (
        <Typography>
            <h1>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
        </Typography>
    )
}

/**
 * This Image component can be placed in any div, 
 * regardless of the order of its posistion.
 * 
 * It'll position itself in the div
 */
function BackHeaderImage() {
    return (
        <div className='back-image'>
            <img src={HeaderImage} alt="Woman carrying a child" />
        </div>
    )
}

/**
 * Customized InputField for the location entry. Uses
 * Material Design Components
 */
function LocationInputField () {
    const classes = useStyles()

    return (
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LocationOnOutlined />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
        )
}

/**
 * Multi varying InputFields for the site
 */
function InputFields () {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (evt) => {
        setAge(evt.target.value)
    }

    return (
        <div className='input-fields'>
            <ul>
                <li>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                            >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </li>
                <li>
                    <LocationInputField />
                </li>
                <li>
                    <TextField 
                        id="filled-basic" 
                        label="Type a name (optional)" 
                        variant="filled" />
                </li>
                <li>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<Search />}>
                            Find a doctor
                    </Button>
                </li>
            </ul>
        </div>
    )
}
export default () => {
    return (
        <>
            <Container style={{ backgroundColor: '#F3EEEB', height: 662, margin: 0, padding: 0, width: '100%' }}>
                <Header />
                <section className='header'>
                    <HeaderInfo
                        title="Making Healthcare Easier"
                        subtitle="Ujamaa helps you save time, save money, and avoid the hassle." />
                    <div className='input-section'>
                        <p className='subtitle'><b>Find a Doctor or Dentist</b></p>
                        <InputFields />
                    </div>
                    <BackHeaderImage />
                </section>
            </Container>
        </>
    )
}