import React, { use, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { CartAmount } from './CartAmount';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

export const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount>1 ? setAmount(amount-1) : setAmount(1)
  }
   const setIncrease = () => {
    amount<stock ? setAmount(amount+1) : setAmount(stock)
  }

  return (
    <div>
      <p className="mb-2 font-medium">Colors:</p>
      <div className="flex gap-2">
        {colors?.map((color, index) => {
          const isActive = selectedColor === color;
          return (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-white text-xs ${
                isActive ? 'opacity-100 border-black' : 'opacity-40 border-transparent'
              }`}
            >
              {isActive && <FaCheck />}
            </button>
          );
        })}
      </div>

      <CartAmount
  amount={amount}
  setDecrease={setDecrease}
  setIncrease={setIncrease}
/>

      <NavLink
        to="/cart"
        onClick={() => addToCart(id, selectedColor, amount, product)}
        className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 text-center"
      >
        <button>Add to Cart</button>
      </NavLink>
    </div>
  );
};
