import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import StoreOwnerDashboard from './components/Dashboard/StoreOwnerDashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        
        <Sidebar />
        
        <div className="flex flex-col flex-1">
         
          <Header />

          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/user" element={<UserDashboard />} />
              <Route path="/owner" element={<StoreOwnerDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
