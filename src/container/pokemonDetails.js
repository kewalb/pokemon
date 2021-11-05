import { Box, Button, CircularProgress, makeStyles, Typography, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { POKEMON_API_URL } from '../config';
import FavoriteIcon from '@material-ui/icons/Favorite'

import {useDispatch} from 'react-redux';
import { toggleFavourite } from '../redux/action';

function PokemonDetails({match}){
    const [pokemonDetail, setPokemon] = useState({pokemon: null})
    useEffect(() => {
        const {id} = match?.params
        axios.get(`${POKEMON_API_URL}/${id}`).then(response => {
            
            if(response.status>=200 && response.status<300){
                setPokemon({pokemon: response.data})
            }
        })
    }, [match])

    const dispatch = useDispatch()
    //const favpokemon = useSelector(state => state.favPokemon)

    const favouriteHandler = (pokemon) => {
       
        console.log(pokemon)
        if(pokemon)
        dispatch(toggleFavourite(pokemon))
    }

    const useStyles = makeStyles((theme) => ({
        container:{
            height: '84vh',
            backgroundColor: 'black',
            color: 'white',
            marginTop: 75,
            textAlign: "center",
            border: 5,
            paddingTop: 30
        },

        text:{
            textTransform: 'upperCase',
            fontFamily: 'Fantasy' 
        },

        image:{
            width: '300px',
            height: '300px'
        },

        pokeInfo:{
            bottom: 60,
            position: 'absolute',
            width: '100%'
        },

        seperator:{
            height: '0.01mm',

        },

        button:{
            height: 50,
            width: 50,
            marginTop: 15
        },

        textline:{
            fontSize: 25,
        }
     }))

    const styles = useStyles()
    const {pokemon} = pokemonDetail
    if(pokemon){
        const {name, sprites, height, weight, types} = pokemon
        let s = ''
        types.map((x) => s = s+x.type.name+"-"  )
    return(
        <Box>
           <Box className={styles.container}>
                <Typography variant='h1' className={styles.text}>{name}</Typography>
                <img className={styles.image} src={sprites.front_default} alt={name}/>
                <img className={styles.image} src={sprites.front_shiny} alt={name}/>
                
                <Box className={styles.pokeInfo}>
                    <hr className={styles.seperator}/>
                    <Grid container>
                        <Grid item md={2}>
                            <Button className={styles.button} onClick={favouriteHandler(pokemon)}><FavoriteIcon style={{color: 'white', fontSize: 50}}/></Button>
                        </Grid>
                            <Grid item md={2}>
                                <Typography className={styles.textline}>
                                    Name <br/> {name}
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography className={styles.textline}>
                                    Height <br/> {height}m
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography className={styles.textline}>
                                    Weight <br/> {weight}kg
                                </Typography>
                            </Grid>
                            
                             {/* {types.map((x) => {
                                    const {name} = x.type 
                                    return(
                                        
                                    )
                                    })} */}

                                    <Grid item md={2}>
                                             <Typography className={styles.textline}>
                                                Type <br/> {s.slice(0, -1)}
                                            </Typography>
                                        </Grid>
                               
                        </Grid>
                
                </Box>
           </Box>
        </Box>
    )}
    else{
        return(
            <CircularProgress />
        )
    }
}

export default PokemonDetails;