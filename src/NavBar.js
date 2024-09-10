import React, { useState } from 'react';
import './NavBar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const { cartCount } = useCart();
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();  // Prevent the form from causing a page reload
        if (searchTerm.trim()) {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/search/${searchTerm}`);
                console.log('Search results:', response.data);
                navigate('/search', { state: { results: response.data } });
            } catch (error) {
                console.error('Search failed:', error);
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">SeMazon</a>
            </div>
            <form className="search-bar" onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearchChange} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="nav-links">
                {user ? (
                    <div className="account-dropdown">
                        <a href="/account">My Account ({user.name})</a>
                        <div className="dropdown-content">
                            <a href="/profile">Profile</a>
                            <a href="/orders">Orders</a>
                            <a href="/" onClick={() => { localStorage.removeItem('user'); window.location.href = '/'; }}>Logout</a>
                        </div>
                    </div>
                ) : (
                    <a href="/login">Login</a>
                )}
                <a href="/cart">Cart ({cartCount})</a>
            </div>
        </nav>
    );
}

export default Navbar;
