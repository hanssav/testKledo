import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShippingFast, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../../store/authSlice';
import axios from 'axios';

const sidebarItems = [
  { to: "/dashboard", label: "Dashboard", icon: faHome },
  { to: "/shipping-comps", label: "Shipping Comps", icon: faShippingFast },
];

function SidebarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await axios.post('https://api.jokolodang.com/api/v1/authentication/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      dispatch(signOutUser());
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="h-75 w-64 p-4 border-r border-gray-200 relative">
      <div className="flex flex-col space-y-4 mb-auto">
        {sidebarItems.map((item) => (
          <Link 
            key={item.to} 
            to={item.to} 
            className="flex items-center space-x-2 text-blue-800 hover:text-blue-400"
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full px-0">
        <button 
          className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarAdmin;
