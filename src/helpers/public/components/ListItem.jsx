import React from 'react';

function ListItem({ label, value }) {
  return (
    <li className="text-gray-700">
      <span className="font-semibold block">{label}:</span>
      <span>{value}</span>
    </li>
  );
}

export default ListItem;
