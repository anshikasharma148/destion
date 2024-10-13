import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      login(); // Update authentication state
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" autoComplete="off">
          <div>
            <label className="block mb-2 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
