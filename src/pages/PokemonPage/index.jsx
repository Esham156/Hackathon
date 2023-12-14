import React, { useState, useEffect } from 'react';
import { SearchForm, PokemonCard } from '../../components';

function PokemonPage() {
  const [search, setSearch] = useState('Charmander');
  const [showData, setShowData] = useState({});
  const [present, setPresent] = useState(true);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        if (response.status === 200) {
          const data = await response.json();
          setShowData(data);
          setPresent(true);
        } else {
          setPresent(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPokemonData();
  }, [search]);

  return (
    <>
      <SearchForm onSearch={setSearch} />
      <div className='heroList'>
        {present ? <PokemonCard pokemon={showData} /> : <p>No Pokemon found!</p>}
      </div>
    </>
  );
}

export default PokemonPage;
