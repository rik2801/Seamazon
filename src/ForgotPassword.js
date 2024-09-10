import React from 'react';
import './ForgotPassword.css'; 
import supportImage from './assets/picture1.jpg'; // Adjust the name if needed


function ForgotPassword() {
    return (
        <div className="forgot-password-container">
            <img src={supportImage} alt="Support" className="support-image"/>
            <h1>Forgot Your Password?</h1>
            <p>If you've lost your password or wish to reset it, please contact our support team:</p>
            <ul>
                <li>Email: support@example.com</li>
                <li>Phone: +123 456 7890</li>
            </ul>
            <p>You can also enter your email below to receive reset instructions:</p>
            <form>
                <input type="email" name="email" placeholder="Enter your email" required />
                <button type="submit">Send Instructions</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
