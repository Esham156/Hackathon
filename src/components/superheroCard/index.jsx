import React from 'react'

function SuperheroCard({hero}) {
  return (
    <>
        <div className='heroImage'>
            <img src={hero.imageurl} alt="hero image" />
        </div>
        <div className='superName'>{hero.name}</div>
        <div>
            <div className='intelligence'>{hero.powerstats.intelligence}</div>
            <div className='strength'>{hero.powerstats.strength}</div>
            <div className='speed'>{hero.powerstats.speed}</div>
            <div className='durability'>{hero.powerstats.durability}</div>
        </div>
    </>
  )
}

export default SuperheroCard