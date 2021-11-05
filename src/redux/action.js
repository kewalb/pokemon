export const POKEMON_TOGGLE_FAVOURITE = 'POKEMON_TOGGLE_FAVOURITE';

export const toggleFavourite = (pokemon) => async(dispatch) => {
    dispatch({
    type: POKEMON_TOGGLE_FAVOURITE,
    payload: pokemon
    })
}