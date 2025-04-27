import React from 'react';
import StoreCard from './StoreCard';

const stores = [
  { id: 1, name: 'Tech Plaza', rating: 4.5 },
  { id: 2, name: 'Gadget Hub', rating: 4.2 },
  { id: 3, name: 'Fashion Street', rating: 3.9 },
];

const StoreList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} />
      ))}
    </div>
  );
};

export default StoreList;