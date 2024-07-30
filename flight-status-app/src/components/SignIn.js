import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../services/firebase'; // Updated import statement
import './styles/SignIn.css';

const auth = getAuth(app);

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const signinUser = () => {
        setLoading(true); // Set loading to true
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
            console.log("Sign-in successful");
            setLoading(false); // Reset loading state
            setError(''); // Clear error state
        })
        .catch((err) => {
            console.error("Sign-in error:", err);
            setLoading(false); // Reset loading state
            setError('Failed to sign in. Please check your credentials.');
        });
    };

    return (
        <div className="signin-page">
        <br/>
        <br/>
            <h1>Sign-In Page</h1>
            <label htmlFor="email">Enter Your Email</label>
            <input 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" 
                required 
                placeholder="Enter your email here"
            />
            <label htmlFor="password">Enter Your Password</label>
            <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required 
                placeholder="Enter your password here"
            />
            <button onClick={signinUser} disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignIn;
