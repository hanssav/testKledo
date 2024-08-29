import React from 'react';

function Input({ label, id, type = "text", value, onChange, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        className={`mt-1 p-2 w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Input;
