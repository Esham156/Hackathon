import React, { useState, useEffect } from 'react'
import { SearchForm, SuperheroCard } from '../../components'

function SuperHeroPage() {

  const [search, setSearch] = useState('batman');
  const [showData, setShowData] = useState([])

  useEffect(() => {
    async function fetchSuperheroData() {
      try {   //https://superheroapi.com/api/122096483342157171
        const response = await fetch(`https://superheroapi.com/api/122096483342157171/search/${search}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        const data = await response.json();
        const processedData = data.results.map(superhero => ({
          name: superhero.name,
          speed: superhero.powerstats.speed,
          strength: superhero.powerstats.strength,
          intelligence: superhero.powerstats.intelligence,
          imageUrl: superhero.image.url
        }));
  
        setShowData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchSuperheroData();
  }, [search]);
  

  return (
  <>
    <SearchForm onSearch={setSearch}/>
    <div className='heroList'>
      {showData.map((hero, index) => (<SuperheroCard key={index} hero={hero} />))}
    </div>
  </>
    
  )
}

export default SuperHeroPage