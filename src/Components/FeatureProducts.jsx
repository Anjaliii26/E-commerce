import React from 'react';
import { useGlobalContext } from '../context/productcontext';
import ProductCard from '../Products/ProductCard';

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
          {featureProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
