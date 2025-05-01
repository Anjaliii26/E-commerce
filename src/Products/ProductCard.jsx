import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image, price, category }) => {
  return (
    <Link to={`/singleproduct/${id}`} key={id}>
      <div className=' p-3 rounded-md shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out text-center max-w-xs mx-auto'>
        <div className="relative">
          <img src={image} alt={name} className='w-full h-40 object-cover rounded-md mb-3' />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs p-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className='text-lg font-semibold text-left'>{name}</h2>
          <p className='text-base text-right'>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
