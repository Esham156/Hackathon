import React from 'react'
import './home.css'
import { useAuth } from '../../contexts'
import { PokemonCard } from '../../components'

function Home() {

  const { searchArray, setSearchArray } = useAuth()

  return (
    <>
      <h1>Pokemon Api</h1>
      <em>Search for facts about your favourite pokemon</em>
      <div className='list'>
      {/* {searchArray.map(pokemon =><PokemonCard key={pokemon.id} pokemon={pokemon} />)} */}
      </div>
    
    </>
  )
}

export default Home
