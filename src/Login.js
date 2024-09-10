import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';  // Make sure to create this CSS file

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', credentials);
            console.log("Login successful:", response.data);
            localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in local storage
            if (response.data.role === 'admin') {
                navigate('/admin-dashboard'); // Redirect to admin dashboard if user is admin
            } else {
                navigate('/home'); // Redirect to home for regular users
            }
        } catch (error) {
            console.log(error);
            alert('Login failed. Incorrect email or password.');
        }
    };

    return (
        <div className="login-container">
            <h1>Resume Your Journey..</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
                <button type="submit">Login</button>
                <p><Link to="/forgot-password">Lost Password? Click Here!</Link></p>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default Login;
