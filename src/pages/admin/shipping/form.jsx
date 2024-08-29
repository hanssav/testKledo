import React, { useState } from 'react';
import CoverLayout from '../../../helpers/admin/components/CoverLayout';

function Form() {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name)
    let errors = {};
    if (!name) {
      errors.name = 'Nama harus di isi';
    }

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', { name });
    } else {
      setErrors(errors);
    }
  };

  return (
    <CoverLayout>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Tambah Shipping Comps</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 max-w-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border border-gray-300 rounded-lg p-2 w-full ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-48 mt-3"
          >
            Simpan
          </button>
        </form>
      </div>
    </CoverLayout>
  );
}

export default Form;
