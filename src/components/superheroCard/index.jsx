import React from 'react'

function SuperheroCard({hero}) {
  console.log(hero)
  return (
    <>
        <div className='PokemonName'>{hero.name}</div>
        <div>
            <div className='base_experience'>Base Experience: {hero.base_experience}</div>
            <div className='weight'>Height in CM: {hero.height}</div>
            <div className='weight'>Weight in KG:{hero.weight}</div>
        </div>
    </>
  )
}

export default SuperheroCard
