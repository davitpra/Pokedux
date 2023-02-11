import React from 'react'
import { PokemonCart } from './PokemonCart'
import "./PokemonList.css"

export const PokemonList = ( {pokemons}) => {

  return (
    <div className='PokemonList'>
        {pokemons.map(pokemon =>
            <PokemonCart  
            name = {pokemon.name} 
            key = {pokemon.name}
            image = {pokemon.sprites.front_default}
            description = {pokemon.types}
            id = {pokemon.id}
            favorite ={pokemon.favorite}
            />
          )}
    </div>
  )
}
