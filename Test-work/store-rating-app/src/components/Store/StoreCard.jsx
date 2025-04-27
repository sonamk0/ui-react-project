import React from 'react';

const StoreCard = ({ store }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{store.name}</h2>
      <p className="text-yellow-500">Rating: {store.rating} ⭐</p>
    </div>
  );
};

export default StoreCard;