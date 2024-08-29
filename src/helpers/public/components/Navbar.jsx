import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">KLEDO TEST</Link>
      </div>
      <div className="space-x-4">
        <Link to="/profile" className="hover:text-gray-200">Profile</Link>
        <Link to="/" className="hover:text-gray-200">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
