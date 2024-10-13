import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { username, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" autoComplete="off">
          <div>
            <label className="block mb-1 text-gray-600">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg shadow-lg transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-green-600 hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
