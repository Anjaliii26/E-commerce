import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const CartAmount = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center justify-between mt-4 w-32">
      <button
        onClick={setDecrease}
        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition duration-200"
      >
        <FaMinus className="text-gray-600" />
      </button>
      <span className="text-lg font-bold">{amount}</span>
      <button
        onClick={setIncrease}
        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition duration-200"
      >
        <FaPlus className="text-gray-600" />
      </button>
    </div>
  );
};
