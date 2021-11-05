import { Box, CircularProgress, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {POKEMON_API_URL, IMAGE_API_URL} from '../config/index'
import PokemonCard from '../components/pokemonCard';

const useStyles = makeStyles((theme) => ({
   container:{
       textAlign: 'center',
       padding: "80px 10px 0px 10px",
       backgroundColor: 'rgb(68, 68, 68)' 
   }
}))


function Pokedex(){
    const styleClass = useStyles()

    const [newpokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        axios.get(POKEMON_API_URL +"?limit=800")
        .then(response => {
            if (response.status >= 200 && response.status<300)
            {
                const {results} = response.data
                let pokemonData = []
                results.forEach((pokemon, index) => {
                    index++
                    let pokemonObject = {
                        id: index,
                        url: IMAGE_API_URL + index + '.png',
                        name: pokemon.name
                    }
                    pokemonData.push(pokemonObject)
                })

                setPokemonData(pokemonData)
            }
        })
    }, [])

    return(
        <Box>
            {newpokemonData ?  
            <Grid container spacing={2} className={styleClass.container}>
                {newpokemonData.map((pokemon) => {
                    return(
                        <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
                    )
                
                })
            }
            </Grid>
            :
            <CircularProgress style={{ marginTop: 100 }}/>
            }
        </Box>
    )
}

export default Pokedex;