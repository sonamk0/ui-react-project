import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center">Store-Rating App</h2>
        <ul className="space-y-6">
          <li>
            <button
              onClick={() => handleNavigation('/')}
              className="w-full text-left text-white hover:text-gray-300 transition flex items-center space-x-2"
            >
              <span>🏠</span> <span>Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/login')}
              className="w-full text-left text-white hover:text-gray-300 transition flex items-center space-x-2"
            >
              <span>🔑</span> <span>Login</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/signup')}
              className="w-full text-left text-white hover:text-gray-300 transition flex items-center space-x-2"
            >
              <span>📝</span> <span>Sign Up</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/admin')}
              className="w-full text-left text-white hover:text-gray-300 transition flex items-center space-x-2"
            >
              <span>👨‍💻</span> <span>SystemAdministrator Dashboard</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/user')}
              className="w-full text-left text-white hover:text-gray-300 transition flex items-center space-x-2"
            >
              <span>👤</span> <span>NormalUser Dashboard</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/owner')}
              className="w-full text-left text-white hover:text-gray-300 transition flex items-center space-x-2"
            >
              <span>🏪</span> <span>Store Owner Dashboard</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-auto">
        
        <button
          onClick={() => {
            console.log('Log can adging out...');
            
            navigate('/'); 
          }}
          className="w-full bg-red-600 text-white hover:bg-red-700 py-2 mt-6 rounded-lg transition flex items-center justify-center space-x-2"
        >
          <span>🚪</span> <span>Logout</span>
        </button>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Store Rating App
      </div>
    </div>
  );
};

export default Sidebar;
