import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="relative">
      <div className="md:hidden flex justify-end px-4">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex flex-col md:flex-row md:items-center gap-6 text-gray-700 font-medium px-4 
                      ${menuOpen ? 'block' : 'hidden'} md:flex md:justify-between`}>
        <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
        <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
        <NavLink to="/products" className="hover:text-blue-600">Products</NavLink>

        <NavLink to="/cart" className="relative flex items-center gap-1 hover:text-blue-600">
          <FiShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            
          </span>
          Cart
        </NavLink>

        <NavLink to="/checkout" className="hover:text-blue-600">Checkout</NavLink>
        {/* <NavLink to="/orders" className="hover:text-blue-600">Orders</NavLink>
        <NavLink to="/profile" className="hover:text-blue-600">Profile</NavLink> */}
      </div>
    </nav>
  )
}
