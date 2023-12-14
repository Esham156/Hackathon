import React, { useState, useEffect } from 'react'
import { SearchForm, SuperheroCard } from '../../components'

function SuperHeroPage() {

  const [search, setSearch] = useState('Charmander');
  const [showData, setShowData] = useState([])

  useEffect(() => {
    async function fetchSuperheroData() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        console.log(response)
  
        const data = await response.json();
        setShowData(data)
    }
  
    fetchSuperheroData();
  }, [search]);
  

  return (
  <>
    <SearchForm onSearch={setSearch}/>
    <div className='heroList'>
      <SuperheroCard key={showData.id} hero={showData} />
    </div>
  </>
    
  )
}

export default SuperHeroPage
