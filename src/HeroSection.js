import React from 'react';
import './HeroSection.css'; // Import CSS for styling

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Your Catchy Headline</h1>
      <p>Your captivating subheadline</p>
      <div className="hero-btns">
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;
