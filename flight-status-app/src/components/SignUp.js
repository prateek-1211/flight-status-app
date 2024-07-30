import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../services/firebase'; // Ensure the correct import path
import './styles/SignUp.css';

const auth = getAuth(app);

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const createUser = () => {
        setLoading(true); // Set loading state to true
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Sign-up successful:', userCredential);
                setLoading(false); // Reset loading state
                setError(''); // Clear error message
                alert('Success');
            })
            .catch((error) => {
                console.error('Error:', error.message);
                setLoading(false); // Reset loading state
                setError(error.message); // Set error message
            });
    };

    return (
        <div className="signup-page">
        <br/>
        <br/>
            <h1>Sign-Up Page</h1>
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" 
                required 
                placeholder="Enter your email here"
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required 
                placeholder="Enter your password here"
            />
            <button onClick={createUser} disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignUp;
