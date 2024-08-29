import React from 'react';
import CoverLayout from '../../../helpers/admin/components/CoverLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ShippingComps() {
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
              className="border border-gray-300 rounded-lg p-2 pl-8"
            />
          </div>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 border-b w-3/4">Nama</th>
            <th className="py-2 px-4 border-b w-1/4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Sample Name</td>
            <td className="py-2 px-4 border-b flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </CoverLayout>
  );
}
