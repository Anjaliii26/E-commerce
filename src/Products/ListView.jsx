import React from 'react';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../context/filterContext';

export const ListView = ({ products }) => {
  const { FilteredProducts } = useFilterContext();

  return (
    <div className="flex flex-col gap-6">
      {products.map((product) => {
        const { id, name, image, description, price } = product;

        return (
          <div
            key={id}
            className="flex  h-50 max-w-xl mx-auto shadow-md overflow-hidden"
          >
            <img
              src={image}
              alt={name}
              className="object-cover flex-shrink-0"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {description.length > 150
                    ? `${description.substring(0, 130)}...`
                    : description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-blue-600">${price}</p>
                <Link
                  to={`/singleproduct/${id}`}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
