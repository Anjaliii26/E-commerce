import React from 'react';
import { useFilterContext } from '../context/filterContext';
import { FaCheck } from 'react-icons/fa';

export const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    allProducts,
    updateFilter,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let unique = data.map((item) => item[property]);
    if (property === 'colors') {
      unique = unique.flat();
    }
    return ['all', ...new Set(unique)];
  };

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categoryOnlyData = getUniqueData(allProducts, 'category');
  const companyOnlyData = getUniqueData(allProducts, 'company');
  const colorOnlyData = getUniqueData(allProducts, 'colors');

  return (
    <div className="p-4">
      {/* Search Input */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          name="text"
          value={text}
          onChange={updateFilter}
          className="border p-2 rounded w-full"
        />
      </form>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categoryOnlyData.map((cat, index) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={index}
                name="category"
                type="button"
                value={cat}
                onClick={(e) => {
                  updateFilter(e);
                  setSelectedCategory(cat);
                }}
                className={`border px-3 py-1 rounded hover:bg-gray-200 ${
                  isActive ? 'bg-gray-300 font-bold' : ''
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Company Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Company</h3>
        <select
          name="company"
          onChange={updateFilter}
          className="border p-2 rounded w-full"
        >
          {companyOnlyData.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {colorOnlyData.map((clr, index) => {
            const isActive = color === clr;
            return (
              <button
                key={index}
                name="color"
                type="button"
                value={clr}
                onClick={updateFilter}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  isActive ? 'opacity-500 border-black' : 'opacity- border-transparent'
                }`}
                style={{
                  backgroundColor: clr === 'all' ? '#fff' : clr,
                }}
                title={clr}
              >
                {isActive && <FaCheck className="text-white text-xs" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3>Price</h3>
        <p>{price}</p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilter}
          className="w-full"
        />
      </div>

      {/* Clear Filters Button */}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-red-600 transition" onClick={clearFilters}>
        Clear Filters
      </button>

    </div>

  );
};
