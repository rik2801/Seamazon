import React from 'react';
import './CategorySection.css';  // Create a corresponding CSS file for styles

function CategorySection() {
    return (
        <div className="category-section">
            <a href="/electronics">Electronics</a>
            <a href="/books">Books</a>
            <a href="/clothing">Clothing</a>
            // Add more categories as needed
        </div>
    );
}

export default CategorySection;
