import { POKEMON_TOGGLE_FAVOURITE } from "./action"

export const pokemonReducer = (state= {favPokemon:[]}, action) => {
    switch(action.type){
        case POKEMON_TOGGLE_FAVOURITE:
            const pokemon = action.payload
           
            const pokemonFromFavourite = state.favPokemon.find((x) => x.id === pokemon.id)
            return { 
                ...state,
                favPokemon: pokemonFromFavourite ? 
                [
                    ...state.favPokemon.filter((pokemon) => pokemon.id !== pokemonFromFavourite.id)
                ] 
                :
                [
                    ...state.favPokemon, pokemon
                ] 
            }
        
        default:
            return state
    }
}