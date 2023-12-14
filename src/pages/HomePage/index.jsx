import React from 'react'
import './home.css'
import { useAuth } from '../../contexts'
import { PokemonCard } from '../../components'

function Home() {

  const { searchArray, setSearchArray } = useAuth()

  return (
    <>
      <h1>Pokemon Api</h1>
      <em>Add your favorite Pokémons to your Pokédex</em>
      <div>
        <div className='pokedex'>My Pokédex</div>
        <div className='list'>
            {searchArray.map(pokemon =><PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    
    </>
  )
}

export default Home
