import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        <h3 className="text-lg font-semibold mb-4">Konfirmasi Penghapusan</h3>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Hapus
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Batalkan
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
