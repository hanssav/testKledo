import React from 'react';
import CoverLayout from '../../../helpers/admin/components/CoverLayout';

function Dashboard() {
  return (
    <CoverLayout>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="flex justify-center items-center h-full">
        <div className="bg-blue-50 rounded-lg shadow-md w-1/2 h-1/2 p-6 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Selamat Datang</h1>
          <p className="text-lg text-gray-600">Admin Name</p>
        </div>
      </div>
    </CoverLayout>
  );
}

export default Dashboard;
