import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    AppBar:{
        backgroundColor: 'black'
    },

    link:{
        textDecoration: 'none'
    },

    title:{
        color: 'white',
        cursor: 'pointer',

    }
}))

function Navigator(){
    const styleClass = useStyles()
    return(
        <AppBar position="fixed" className={styleClass.AppBar}>
            <Toolbar>
                <Link to='/' className={styleClass.link}>
                    <Typography className={styleClass.title}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navigator;