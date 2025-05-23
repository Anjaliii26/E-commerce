import React from 'react'

export const Trusted = () => {
  return (
    <div className="bg-gray-100 py-16 flex flex-col items-center">
      <p className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Trusted by 1000+ Companies
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 px-10 justify-items-center">
        <img
          src={`${import.meta.env.BASE_URL}images/comp1.png`}
          alt="Brand 1"
          className="w-20 h-20 object-contain transition duration-300"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/comp2.png`}
          alt="Brand 2"
          className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/comp3.png`}
          alt="Brand 3"
          className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/comp2.png`}
          alt="Brand 4"
          className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  )
}
