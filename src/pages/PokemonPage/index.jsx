import React, { useState, useEffect } from 'react';
import { SearchForm, PokemonCard } from '../../components';
import { useAuth } from '../../contexts'
import './style.css'

function PokemonPage() {
  const [search, setSearch] = useState('Charmander');
  const [showData, setShowData] = useState({});
  const [present, setPresent] = useState(true);
  const [exists, setExists] = useState(false)
  const { searchArray, setSearchArray } = useAuth()
  

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        if (response.status === 200) {
          const data = await response.json();
          const exists = searchArray.some(item => item.id === data.id); 
        if (!exists) {
          setShowData(data);
          setSearchArray(prevArray => [...prevArray, data]); 
          setPresent(true);
        } else {
          setExists(true);
          setExists(false)
          console.log('Data already exists in the array');
        }
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
      <div className='pokemon'>
        {present ?
          (!exists ? <PokemonCard pokemon={showData} /> : <p>You already have this Pokémon in your Pokédex</p>)
          :
          <p>No Pokémon found!</p>
        }
      </div>
    </>
  );
  
}

export default PokemonPage;
