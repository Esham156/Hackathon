import React from 'react'
import { useState } from 'react';

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
        <label>
        Search for a Superhero Name:
        <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter a superhero name"
        />
        </label>
        <button type="submit">Search</button>
    </form>
    );
};

export default SearchForm
