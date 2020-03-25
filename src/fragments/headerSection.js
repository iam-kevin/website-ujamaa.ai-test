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
import Box from '@material-ui/core/Box'

import { Search, LocationOnOutlined } from '@material-ui/icons'

import Logo from '../assets/vectors/ujamaaLogo.svg'
import HeaderImage from '../assets/vectors/homeImageFrame.svg'
import '../assets/css/header.css'
import IconedTextField from '../components/inputfields/IconedTextField';


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 268,

      "& .MuiSelect-selectMenu": {
          height: theme.overrides.MuiInputBase.input.height
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    headerInfo: {
        maxWidth: 460,
        "& .large-title": {
            fontSize: 56,
            lineHeight: theme.spacing(0.15),
            margin: theme.spacing(0)
        },
        "& p": {
            fontSize: 20,
        }
    }
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
                    <li><a href="#book-appointment">Book an appointment</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {/* TODO: Change the default color scheme to: #252021, and other things, like border radius...; Same goes for the `outlined` variant */}
            <div className='right'>
                <div className='buttons'>
                    <Button variant='outlined' color='secondary'>
                        Log in
                    </Button>
                    <Button variant='contained' color='secondary'>
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
    const classes = useStyles()
    return (
        <Container style={{ padding: 0, margin: 0}} className={classes.headerInfo}>
            <h1 className='large-title'>{title}</h1>
            <p>{subtitle}</p>
        </Container>
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
            <div>                
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">Choose a speciality</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                        >
                    <MenuItem value="pr-care-phys">
                        <em>Primary care physician</em>
                    </MenuItem>
                    <MenuItem value={10}>Support Nurse</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <IconedTextField
                    iconComponent={ () => <LocationOnOutlined />}
                    label="Location"/>
            </div>
            <div>
                <TextField 
                    id="filled-basic" 
                    label="Type a name (optional)" 
                    variant="filled" />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Search />}>
                        Find a doctor
                </Button>
            </div>
        </div>
    )
}
export default () => {
    return (
        <>
            <Container style={{ backgroundColor: '#F3EEEB', padding: 0}} maxWidth={false}>
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