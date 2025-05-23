import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeroSection = ({myData}) => {

    const name = myData.name
    // const name = "OUR STORE"
  return (
    <div className="grid md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto px-6 py-20">
      {/* Left Column: Text Content */}
      <div className="space-y-6">
        <p className="text-lg text-gray-600">Welcome to </p>
        <h1 className="text-5xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum consequatur
          voluptas quia numquam velit in voluptate ullam magni consequuntur, delectus
          voluptatibus fugiat natus, cum ut iure aliquid officia dolor.
        </p>
        <NavLink to="/products">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <figure>
         <img
  src={`${import.meta.env.BASE_URL}images/hero.png`}
  alt="hero"
  className="w-full max-w-md rounded-xl shadow-lg object-cover"
/>

        </figure>
      </div>
    </div>
  )
}
