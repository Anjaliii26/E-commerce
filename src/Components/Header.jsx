import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6  bg-white shadow-md">
      <NavLink to="/" className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-20 w-auto "
        />
      </NavLink>
      <Navbar />
    </header>
  )
}
