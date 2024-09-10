import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductSection.css';
import { useCart } from './CartContext';
import { useFavorites } from './FavoritesContext'; // Correctly import useFavorites

function ProductSection() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { addToFavorites } = useFavorites(); // Correctly destructure addToFavorites

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products/');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product.id);
        alert('Product added to cart');
    };

    const handleAddToFavorites = (product) => {
        addToFavorites(product);
        alert('Product added to favorites');
    };

    const navigateToCart = () => {
        navigate('/cart');
    };

    const navigateToFavorites = () => {
        navigate('/favorites');
    };

    return (
        <div className="product-section">
            <h2>Featured Products</h2>
            <div className="products">
                {products.map(product => {
                    const imageUrl = product.imgLink || process.env.PUBLIC_URL + '/images/default_product_image.jpg';
                    return (
                        <div key={product.id} className="product">
                            <img src={imageUrl} alt={product.name} />
                            <button className="add-to-favorites-btn" onClick={() => handleAddToFavorites(product)}>
                                <i className="fas fa-heart"></i>
                            </button>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    );
                })}
            </div>
            <div className="navigation-buttons">
                <button className="navigation" onClick={navigateToCart}>Go to Cart</button>
                <button className="navigation" onClick={navigateToFavorites}>Go to Favorites</button>
            </div>
        </div>
    );
}

export default ProductSection;
