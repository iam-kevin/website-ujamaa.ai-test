import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    // For the ocation
    customInput: {
        // Inherit elements from the base input
        ...theme.overrides.MuiInputBase.input,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: theme.overrides.MuiInputBase.input.zIndex + 10,
        width: theme.overrides.MuiInputBase.input.minWidth,

        "& .icon": {
            width: 40,
            height: '100%',
            position: 'relative',
            top: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            padding: 14.5,
        },

        // Modifiy the size of the icon
        "& .icon > *": {
            maxWidth: 15
        },

        "& .input": {
            width: '100%',
            height: '100%',
        },

        "& .MuiInputBase-input": {
            border: 0,
            background: 'transparent',
            minWidth: 'auto',
        },

        "& .MuiFormControl-root": {
            width: "100%"
        },

        "& .MuiInputLabel-shrink": {
            marginTop: '.4em'
        },

        "& .MuiInputLabel-root[data-shrink=false]": {
            marginTop: '-.3em'  
        },

        "& .MuiInputBase-root": {
            marginTop: '.4em'
        }
    }
}));

/**
 * This is the IconedTextField.
 * Modified to fit the design as shown in the figma composite
 */
export default ({ iconComponent , label }) => {
    const classes = useStyles()

    return (
            <div className={classes.customInput}>
                <span className='icon'>
                    { iconComponent() }
                </span>
                <span className='input'>
                    <TextField 
                        className='input-with-icon'
                        label={label} />
                </span>
            </div>
        )
}