import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2" />
        <input type="password" placeholder="Password" className="w-full border p-2" />
        <button className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;