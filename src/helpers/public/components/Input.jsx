import React from 'react';

function Input({ label, id, type, value, onChange, error, checked, ...rest }) {
  return (
    <div className="mb-4">
      {type === 'checkbox' ? (
        <div className="flex items-center">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className={`mr-2 ${error ? 'border-red-500' : ''}`}
            {...rest}
          />
          <span className="text-gray-700">{label}</span>
        </div>
      ) : (
        <>
          <label htmlFor={id} className="block text-gray-700 mb-2">
            {label}
          </label>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={`border border-gray-300 rounded-lg p-2 w-full ${error ? 'border-red-500' : ''}`}
            placeholder={`Enter ${label.toLowerCase()}`}
            {...rest}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </>
      )}
    </div>
  );
}

export default Input;
