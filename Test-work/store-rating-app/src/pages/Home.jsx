import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import StoreList from '../components/Store/StoreList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Store Rating App
          </h1>
          <p className="text-lg mb-8">
            Discover, manage, and rate your favorite stores all in one place.
            Join us in improving the shopping experience for everyone!
          </p>
          <Link to="/login">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </section>

        {/* Store List Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">
            Browse Stores and Their Ratings
          </h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-300">
              View a list of stores, explore their ratings, and manage them easily.
            </p>
          </div>
          <StoreList />
        </section>

        {/* Footer Section */}
        <footer className="text-center py-6 mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <p className="text-white">
            © 2025 Store Rating App | All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
