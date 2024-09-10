import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import ProfilePage from './ProfilePage';
import ForgotPassword from './ForgotPassword';
import SearchResults from './SearchResults';
import ProductDetails from './ProductDetails';
import AdminDashboard from './AdminDashboard';
import ProductSection from './ProductSection';
import CartPage from './CartPage';
import Payment from './Payment';
import Success from './Success';
import Failure from './Failure';
import Favorites from './Favorites';
import './App.css';
import { CartProvider } from './CartContext';
import UserDashboard from './UserDashboard';
import { FavoritesProvider } from './FavoritesContext';
import BillingAddressRoute from './BillingAddressRoute';
import Orders from './Orders';

const users = [
  { fid: 101, username: 'admin-101', password: 'admin123', role: 'ADMIN' },
  { fid: 102, username: 'user-102', password: 'user123', role: 'USER' }
];

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login users={users} />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<ProductSection />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />L̥
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/billing" element={<BillingAddressRoute />} />

        </Routes>
      </Router>
      </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
