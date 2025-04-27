// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-8">Store Rating App</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
        </li>
        <li className="mb-4">
          <Link to="/signup" className="text-white hover:text-gray-400">Sign Up</Link>
        </li>
        <li className="mb-4">
          <Link to="/admin" className="text-white hover:text-gray-400">Admin Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/user" className="text-white hover:text-gray-400">User Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/owner" className="text-white hover:text-gray-400">Store Owner Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
