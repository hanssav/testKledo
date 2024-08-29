import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoverLayout from '../../../helpers/admin/components/CoverLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ShippingComps() {
  const [shippingComps, setShippingComps] = useState([]);
  const [filteredComps, setFilteredComps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const user = useSelector((state) => state.auth.value.data.data);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShippingCompanies = async () => {
      try {
        const token = user.access_token;
        const response = await axios.get('https://api.jokolodang.com/api/v1/finance/shippingComps', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = response.data.data;
        setShippingComps(data);
        setFilteredComps(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message || 'Error fetching shipping companies');
      }
    };

    fetchShippingCompanies();
  }, [user.access_token]);

  useEffect(() => {
    const filterData = () => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = shippingComps.filter(comp =>
        comp.name.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredComps(filtered);
    };

    filterData();
  }, [searchTerm, shippingComps]);

  const handleRowClick = (id) => {
    navigate(`/shipping-comps/form/${id}`);
  };

  return (
    <CoverLayout>
      <div className="flex justify-between items-center mb-6">
        <div className='flex'>
          <h2 className="text-2xl font-bold">Shipping Comps</h2>
          <Link 
            to="/shipping-comps/form"
            className="bg-blue-500 text-white p-3 rounded-full flex items-center hover:bg-blue-600 mx-3"
          >
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 pl-8"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b w-full">Nama</th>
            </tr>
          </thead>
          <tbody>
            {filteredComps.map((comp) => (
              <tr 
                key={comp.id} 
                onClick={() => handleRowClick(comp.id)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-b">{comp.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </CoverLayout>
  );
}
