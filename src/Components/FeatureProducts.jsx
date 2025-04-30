import React from 'react';
import { useGlobalContext } from '../context/productcontext';
import { Link } from 'react-router-dom'; // 🛑 import Link from react-router-dom

export const FeatureProducts = () => {
  const { isLoading, featureProducts } = useGlobalContext();

  if (isLoading) {
    return <div className="text-center text-xl font-medium">Loading...</div>;
  }

  return (
    <div className='flex justify-center items-center '>
      <div className='w-full max-w-6xl'>
        <p className="text-center text-sm text-gray-500">Check Now!</p>
        <h1 className='text-2xl font-bold text-center mb-6'>OUR FEATURED PRODUCTS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featureProducts.map((curElem) => {
            const { id, name, image, price, category } = curElem;
            return (
              <Link to={`/singleproduct/${id}`} key={id}>
                <div
                  className='border p-3 rounded-md shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out text-center max-w-xs mx-auto'
                >
                  <img src={image} alt={name} className='w-full h-40 object-contain mb-3 rounded-md' />
                  <h2 className='text-lg font-semibold mb-1'>{name}</h2>
                  <p className='text-gray-500 mb-1 text-sm'>Category: {category}</p>
                  <p className='text-base font-bold'>${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
