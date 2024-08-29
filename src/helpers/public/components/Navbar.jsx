import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'KLEDO TEST' },
  { to: '/profile', label: 'Profile' },
  { to: '/', label: 'Login' },
];

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to={navLinks[0].to}>{navLinks[0].label}</Link>
      </div>
      <div className="space-x-4">
        {navLinks.slice(1).map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`hover:text-gray-200 ${location.pathname === link.to ? 'text-white bg-black p-5' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
