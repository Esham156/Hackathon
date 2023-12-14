import React from 'react'

function PokemonCard({pokemon}) {
  console.log(pokemon)
  return (
    <>
        <div className='PokemonName'>{pokemon.name}</div>
        <div className='pokemon-img'>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon" />
        </div>
        <div>
            <div className='base_experience'>Base Experience: {pokemon.base_experience}</div>
            <div className='weight'>Height in CM: {pokemon.height}</div>
            <div className='weight'>Weight in KG:{pokemon.weight}</div>
        </div>
    </>
  )
}

export default PokemonCard
