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
        <h2>Enter a Pokemon</h2>
        <label>
        <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter a Pokemon"
        />
        </label>
        <button type="submit">Search</button>
    </form>
    );
};

export default SearchForm
