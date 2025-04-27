import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SystemAdministratorDashboard = () => {
  const navigate = useNavigate();

  
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);
  const [totalRatings, setTotalRatings] = useState(0);

 
  useEffect(() => {
 
    setUsers([
      { name: 'John Doe', email: 'john@example.com', address: '123 Main St', role: 'admin' },
      { name: 'Jane Smith', email: 'jane@example.com', address: '456 Oak St', role: 'normal' },
      
    ]);

    setStores([
      { name: 'Store A', email: 'storeA@example.com', address: '789 Elm St', rating: 4.5 },
      { name: 'Store B', email: 'storeB@example.com', address: '101 Pine St', rating: 4.0 },
     
    ]);

    setTotalRatings(25); 
  }, []);

  const handleManageUsers = () => {
    navigate('/admin/manage-users');
  };

  const handleManageStores = () => {
    navigate('/admin/manage-stores');
  };

  const handleViewReports = () => {
    navigate('/admin/reports');
  };

  const handleSettings = () => {
    navigate('/admin/settings');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const filterUsers = (criteria) => {
    
    const filteredUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(criteria.toLowerCase()) ||
        user.email.toLowerCase().includes(criteria.toLowerCase()) ||
        user.address.toLowerCase().includes(criteria.toLowerCase()) ||
        user.role.toLowerCase().includes(criteria.toLowerCase())
      );
    });
    setUsers(filteredUsers);
  };

  const filterStores = (criteria) => {
   
    const filteredStores = stores.filter((store) => {
      return (
        store.name.toLowerCase().includes(criteria.toLowerCase()) ||
        store.email.toLowerCase().includes(criteria.toLowerCase()) ||
        store.address.toLowerCase().includes(criteria.toLowerCase())
      );
    });
    setStores(filteredStores);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-10">
        Welcome, Admin! Manage users, stores, view reports, and configure settings from here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          onClick={handleManageUsers}
        >
          <h2 className="text-2xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-500">Add, edit, or remove user accounts easily.</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          onClick={handleManageStores}
        >
          <h2 className="text-2xl font-semibold mb-2">Manage Stores</h2>
          <p className="text-gray-500">Approve or update store information.</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          onClick={handleViewReports}
        >
          <h2 className="text-2xl font-semibold mb-2">View Reports</h2>
          <p className="text-gray-500">Access performance and complaint reports.</p>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          onClick={handleSettings}
        >
          <h2 className="text-2xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-500">Configure system preferences and security.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          Logout
        </button>
      </div>

     
      <div className="mt-10 grid grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold">Total Stores</h3>
          <p className="text-3xl font-bold">{stores.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold">Total Ratings</h3>
          <p className="text-3xl font-bold">{totalRatings}</p>
        </div>
      </div>

      
      <div className="mt-12">
        <input
          type="text"
          placeholder="Filter Users/Stores"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-8"
          onChange={(e) => {
            filterUsers(e.target.value);
            filterStores(e.target.value);
          }}
        />

        <div className="grid grid-cols-1 gap-8">
        
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Users List</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Stores List</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((store, index) => (
                  <tr key={index}>
                    <td>{store.name}</td>
                    <td>{store.email}</td>
                    <td>{store.address}</td>
                    <td>{store.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAdministratorDashboard;
