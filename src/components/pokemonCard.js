import { CardMedia, Grid, CardContent, Typography, Card, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card:{
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgb(90,90,90)'
        }
    },

    cardMedia:{
        margin: 'auto',
        height: 130,
        width: 130
    },

    cardContent:{
        textAlign: 'center'
    },

    link:{
        textDecoration: 'none'
    }
}))

function PokemonCard(props){
    const styleClass = useStyles()
    const {pokemon, image} = props
    const{id, name} = pokemon
   


    return(
        <Grid item xs={12} sm={2}  key={id}>
            <Link to={"/pokemon/"+id} className={styleClass.link}>
            <Card className={styleClass.card}>
                <CardMedia image={image} className={styleClass.cardMedia}/>
                <CardContent className={styleClass.cardContent}>
                    <Typography>{name}</Typography>
                </CardContent>
            </Card>
            </Link>
        </Grid>
    )

}

export default PokemonCard;