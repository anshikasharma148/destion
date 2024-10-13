import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUser, FaCog, FaTachometerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 w-64 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="space-y-6 p-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <a
            href="#"
            className="block text-lg flex items-center space-x-3 hover:bg-blue-700 py-2 px-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaTachometerAlt className="text-xl" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="block text-lg flex items-center space-x-3 hover:bg-blue-700 py-2 px-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaUser className="text-xl" />
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="block text-lg flex items-center space-x-3 hover:bg-blue-700 py-2 px-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaCog className="text-xl" />
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Logout
          </button>
        </header>

        {/* Sidebar Toggle Button for Mobile */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
