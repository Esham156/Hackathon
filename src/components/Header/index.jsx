import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/pokemons" style={styles}>search pokemon</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
