import React from 'react';
import StoreList from '../components/Store/StoreList';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Store Rating App</h1>
      <StoreList />
    </div>
  );
};

export default Home;