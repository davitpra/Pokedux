import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api'
import { setLoading } from './uiSlice'
// redux toolkit maneja la inmutabilidad 
const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
}

//creamos un llamado asincrono 
export const fetchPokemonsWithDetails = createAsyncThunk (
    // por convencion se utiliza el nombre del slice / action
    'data/fetchPokemonsWithDetails',
    // funcion callBack al ejecutarse la action
    // el primer parametro son los paremetros para llamar a la action, pero en este caso no se utiliza y se deja un _
    // se desescructura dispatch de thunkAPI
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon()
        const pokemonDetailed = await Promise.all(
            pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
            )
        dispatch(setPokemons(pokemonDetailed))
        dispatch(setLoading(false))
    }
)

// creamos el slice
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    
    reducers:{
        setPokemons: (state, action ) => {
            state.pokemons = action.payload,
            state.pokemonsFiltered = action.payload
        },
        setFavorite: (state, action) => {
            // encontramos el indice del pokemon que viene del payload como pokemonId
            const pokemonIndex = state.pokemons.findIndex(
                (pokemon) => (pokemon.id === action.payload.pokemonId))
            // en caso de encontrar el index, vamos a cambiar el statado favorite
            if (pokemonIndex >= 0) {
                // guardamos el valor de favorite del pokemon encontrado
                const isFavorite = state.pokemons[pokemonIndex].favorite;
                // modificamos el valor de favorito en los dos estados
                state.pokemons[pokemonIndex].favorite = !isFavorite
                state.pokemonsFiltered[pokemonIndex].favorite = !isFavorite
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state.pokemons.filter( 
                pokemon => pokemon.name.includes( action.payload ) 
            )
            state.pokemonsFiltered = pokemonsFiltered;
        }
    },
})

//exportamos y desestructuramos los acction
export const {setPokemons, setFavorite, setFilter } =dataSlice.actions

// exportamos los reducers
export default dataSlice.reducer