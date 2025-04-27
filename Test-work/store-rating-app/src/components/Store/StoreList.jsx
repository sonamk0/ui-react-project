import React, { useState } from 'react';

const StoreList = () => {
  const [stores, setStores] = useState([
    { id: 1, name: 'Teach Plaza', rating: 4.5 },
    { id: 2, name: 'Gadget Hub', rating: 4.2 },
    { id: 3, name: 'Fashion Street', rating: 3.9 },
  ]);
  const [newStoreName, setNewStoreName] = useState('');

  const handleAddStore = () => {
    if (newStoreName.trim() !== '') {
      const newStore = {
        id: stores.length + 1,
        name: newStoreName,
        rating: 0,
      };
      setStores([...stores, newStore]);
      setNewStoreName('');
    }
  };

  const handleDeleteStore = (id) => {
    const updatedStores = stores.filter((store) => store.id !== id);
    setStores(updatedStores);
  };

  const handleUpdateRating = (id) => {
    const updatedStores = stores.map((store) => {
      if (store.id === id) {
        const newRating = prompt('Enter new rating (0-5):');
        if (newRating !== null && !isNaN(newRating) && newRating >= 0 && newRating <= 5) {
          return { ...store, rating: parseFloat(newRating) };
        } else {
          alert('Please enter a valid rating between 0 and 5.');
        }
      }
      return store;
    });
    setStores(updatedStores);
  };

  return (
    <div>
      {/* Add New Store */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded mr-2"
          placeholder="New Store Name"
          value={newStoreName}
          onChange={(e) => setNewStoreName(e.target.value)}
        />
        <button
          onClick={handleAddStore}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Store
        </button>
      </div>

      {/* Store List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className="border p-4 rounded shadow-md flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p>Rating: {store.rating} ⭐</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleUpdateRating(store.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                Update Rating
              </button>
              <button
                onClick={() => handleDeleteStore(store.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete Store
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
