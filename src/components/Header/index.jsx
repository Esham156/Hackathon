import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/superheros" >Pokemon Index</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
