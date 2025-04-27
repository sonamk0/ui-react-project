import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';      
import SignupPage from './pages/SignupPage';    
import SystemAdministratorDashboard from './components/Dashboard/SystemAdministratorDashboard';
import NormalUserDashboard from './components/Dashboard/NormalUserDashboard';
import StoreOwnerDashboard from './components/Dashboard/StoreOwnerDashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';  // Import Header component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Add the Header at the top */}
        <Header />

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />

          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />     
              <Route path="/signup" element={<SignupPage />} /> 
              <Route path="/admin" element={<SystemAdministratorDashboard />} />
              <Route path="/user" element={<NormalUserDashboard />} />
              <Route path="/owner" element={<StoreOwnerDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
