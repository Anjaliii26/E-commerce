import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartAmount } from './CartAmount';
import { useCartContext } from '../context/cartContext';

export const CartItem = ({ id, name, image, color, price, amount }) => {
    const { removeItem } = useCartContext(); 
   const setDecrease = () => {
    amount>1 ? setAmount(amount-1) : setAmount(1)
  }
   const setIncrease = () => {
    amount<stock ? setAmount(amount+1) : setAmount(stock)
  }

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
      <div>
         <CartAmount
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      <p>₹{price * amount}</p>
      <button>
        <FaTrash  onClick={()=> removeItem(id)} />
      </button>
    </div>
  );
};
