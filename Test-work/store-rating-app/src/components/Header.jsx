import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md flex justify-center items-center">
      {/* Add your symbols/logos here */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-semibold">🔑</span> {/* Key Symbol */}
        <span className="text-2xl font-semibold">🏪</span> {/* Store Symbol */}
        <Link to="/" className="text-2xl font-semibold">
          Store Rating App
        </Link>
      </div>
    </header>
  );
};

export default Header;
