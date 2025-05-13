import React from 'react';
import { CartItem } from './CartItem';
import { useCartContext } from '../context/cartContext';

export const Cart = () => {
  const { cart, total_amount, total_items, removeItem } = useCartContext();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shopping Cart</h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-6">
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 border-b">
          <p className="font-semibold text-lg">Item</p>
          <p className="font-semibold text-lg">Price</p>
          <p className="font-semibold text-lg">Quantity</p>
          <p className="font-semibold text-lg">Total</p>
          <p className="font-semibold text-lg">Remove</p>
        </div>
        
        <hr className="border-t" />

        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} {...item} removeItem={removeItem} />
          ))
        ) : (
          <p className="text-center text-xl font-medium py-6">Your cart is empty!</p>
        )}
      </div>

      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <hr className="border-t" />

        <div className="flex justify-between mt-4">
          <span className="text-xl font-semibold">Total Items:</span>
          <span className="text-xl font-medium">{total_items}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-xl font-semibold">Total Amount:</span>
          <span className="text-xl font-medium">{total_amount} </span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-xl font-semibold">Shipping Fee:</span>
          <span className="text-xl font-medium">500</span>
        </div>

        <hr className="border-t" />

        <div className="flex justify-between mt-4">
          <span className="text-xl font-semibold">Grand Total:</span>
          <span className="text-xl font-medium text-green-500">
            {total_amount + 500}
          </span>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert('Proceed to checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
