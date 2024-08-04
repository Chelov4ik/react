import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import users from './Users';  

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
         
        const userExists = users.some(user => user.login === email);
        
        if (password !== passwordConfirm) {
            setError("Password mismatch");
            return; 
        }

        if (userExists) {
            setError("Username is being used by someone else");
            return;
        }
 
        users.push({ login: email, password });
        console.log('New User Registered:', { email, password });
        
        navigate('/login'); 
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl text-black text-center">Register</h2>
                {error && <h5 className="text-red-500 text-center my-2">{error}</h5>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email / Username</label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button className="w-full py-2 px-4 border border-black rounded-md bg-lightblue-500 hover:bg-blue-400" type="submit">Register</button>
                    <p className="mt-4 text-center text-black">
                        u are our old friend? so just {"->"} <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
