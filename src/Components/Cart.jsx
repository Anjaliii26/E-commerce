import React from 'react'
import { CartItem } from './CartItem';
import { useCartContext } from '../context/cartContext';

export const Cart = () => {
    const { cart } = useCartContext();
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className='grid grid-cols-5 gap-4 '>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>

        <div>
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
        </div>
    </div>
  )
}
