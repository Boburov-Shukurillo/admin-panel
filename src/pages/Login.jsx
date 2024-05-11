import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setsucsecc, sucsecc, setisLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [FormData, setFormData] = useState({
        email,
        password,
    });

    const handleSignUp = () => {
        if (email === 'husanart323@gmail.com' && password === '!husan@art%password#') {
            setsucsecc(true)
        }
    };

    console.log(localStorage.getItem('sucsecc'));

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`border rounded-lg px-4 py-2 w-full focus:outline-none ${sucsecc ? 'focus:border-blue-500' : "focus:border-red-600"}`}
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {!sucsecc && <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="button"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>}
                    {sucsecc && <Link to='/admin'
                        onClick={() => setisLogin(true)}
                        className="inline-block  text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Sign Up
                    </Link>}
                </form>

            </div>
        </div>
    );
};

export default Login;
