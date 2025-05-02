import React from 'react';
import { FilterSection } from './FilterSection';
import { ProductList } from './ProductList';
import { Sort } from './Sort';
import { useFilterContext } from '../context/filterContext';

export const Products = () => {
  const { FilteredProducts } = useFilterContext();
  const { allProducts } = useFilterContext();

  return (
    <div className="grid grid-cols-[0.2fr_1fr] gap-4 max-w-[1200px] mx-auto px-4 py-6">
      {/* Left: Filter Section */}
      <div className="border rounded-md p-4 shadow-md">
        <FilterSection />
      </div>

      {/* Right: Sort on top, ProductList below */}
      <div className="flex flex-col gap-4">
        <div className="border rounded-md p-4 shadow-md">
          <Sort />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};
