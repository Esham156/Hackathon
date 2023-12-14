import React from 'react'
import { useState } from 'react';
import './searchForm.css';

function SearchForm({ onSearch }) {
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2><label htmlFor="pokemon">Enter a Pokemon Name:</label></h2>
        <input
            id='pokemon'
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter a Pokemon"
        />
        <button type="submit">Search</button>
    </form>
    );
};

export default SearchForm
