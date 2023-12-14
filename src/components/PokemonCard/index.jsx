import React from 'react'
import './style.css'

function PokemonCard({pokemon}) {
  console.log(pokemon)
  if (!pokemon || !pokemon.name) {
    return <p>No Pokemon data available</p>;
  }
  return (
    <div className='card'>
        <div className='PokemonName'>{pokemon.name}</div>
        <div className='pokemon-img'>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon" />
        </div>
        <div>
            <div className='base_experience'>Base Experience: {pokemon.base_experience}</div>
            <div className='weight'>Height in CM: {pokemon.height}</div>
            <div className='weight'>Weight in KG:{pokemon.weight}</div>
        </div>
    </div>
  )
}

export default PokemonCard
