import React from 'react';

function NavbarAdmin() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        KLEDO TEST ADMIN
      </div>
      <div className="flex items-center space-x-4">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span>Admin Name</span>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
