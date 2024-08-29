import React from 'react';
import { useSelector } from 'react-redux';

function NavbarAdmin() {
  const user = useSelector((state) => state.auth.value.data.user);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        KLEDO TEST ADMIN
      </div>
      <div className="flex items-center space-x-4">
        <img 
          src={user.profile_image} 
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span>{user.name}</span>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
