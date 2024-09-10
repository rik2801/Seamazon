import React, { useState } from 'react';
import { registerUser } from './api';

function UserRegistration() {
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await registerUser(userData);
      console.log('User registered:', response.data);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Failed to register user:', error);
      alert('Failed to register user.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistration;
