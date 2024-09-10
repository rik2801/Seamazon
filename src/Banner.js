import React from 'react';
import './Banner.css';  // Create a corresponding CSS file for styles
import supportImage from './assets/picture2.jpg'

function Banner() {
    return (
        <div className="banner">
            <img src={supportImage} alt="Main Banner" />
        </div>
    );
}

export default Banner;
