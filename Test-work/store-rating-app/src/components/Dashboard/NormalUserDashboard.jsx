import React, { useState } from 'react';

const NormalUserDashboard = () => {
  const [stores, setStores] = useState([
    { id: 1, name: 'Store 1', address: '123 Main St', rating: 4, userRating: 3 },
    { id: 2, name: 'Store 2', address: '456 Elm St', rating: 3.5, userRating: 4 },
    
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newRating, setNewRating] = useState(1);

  const handleSubmitRating = (storeId) => {
    const updatedStores = stores.map((store) =>
      store.id === storeId ? { ...store, userRating: newRating } : store
    );
    setStores(updatedStores);
    alert('Rating submitted!');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredStores = stores.filter(
      (store) =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStores(filteredStores);
  };

  const handleLogout = () => {
    
    console.log('Logging out...');
    
    window.location.href = '/login';
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-4 rounded mt-4"
      >
        Logout
      </button>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Search for Stores</h3>
        <form onSubmit={handleSearch} className="flex mt-2">
          <input
            type="text"
            placeholder="Search by name or address"
            className="border p-2 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 ml-2 rounded-lg">
            Search
          </button>
        </form>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Store Listings</h3>
        <ul>
          {stores.map((store) => (
            <li key={store.id} className="border-b py-3">
              <h4 className="text-lg font-semibold">{store.name}</h4>
              <p>{store.address}</p>
              <p>Overall Rating: {store.rating}</p>
              <p>Your Rating: {store.userRating}</p>
              <div className="mt-2">
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="border p-2 rounded-lg"
                />
                <button
                  onClick={() => handleSubmitRating(store.id)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-2"
                >
                  Submit Rating
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NormalUserDashboard;
