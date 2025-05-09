import React from 'react';
import { FaTrash } from 'react-icons/fa';

export const CartItem = ({ id, name, image, color, price, amount }) => {
  return (
    <div className='grid grid-cols-5 gap-4 items-center border-b py-4'>
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className='w-16 h-16 object-cover rounded-md' />
        <div>
          <p>{name}</p>
          <div className="flex items-center gap-1">
            <p className="text-sm">Color:</p>
            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: color }}></div>
          </div>
        </div>
      </div>

      <p>₹{price}</p>
      <p>{amount}</p>
      <p>₹{price * amount}</p>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};
