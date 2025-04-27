
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold">
        Store Rating App
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
