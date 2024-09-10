import React from 'react';
import { useAuth } from './AuthContext';
import Navbar from './NavBar'
import Banner from './Banner'; 
import CategorySection from './CategorySection';
import ProductSection from './ProductSection';

function HomePage() {
  const user = JSON.parse(localStorage.getItem('user'));  // Retrieve user data from local storage

  return (
    <div>
      <Navbar />
      <Banner />
      <h1>Welcome, {user ? user.name : "Guest"}!</h1>
      <main>
        <ProductSection />
        {/* Additional homepage content here */}
      </main>
    </div>
  );
}

export default HomePage;
