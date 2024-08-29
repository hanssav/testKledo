import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';

function CoverLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarAdmin />

      <div className="flex flex-grow">
        <SidebarAdmin />
        <main className="flex-grow p-6 bg-zinc-400 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-3xl shadow-md p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoverLayout;
