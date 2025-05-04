import React from 'react';
import { useFilterContext } from '../context/filterContext';
import { FaTh, FaList } from 'react-icons/fa';

export const Sort = () => {
  const { setGridView, setListView, gridView,filteredProducts, sorting } = useFilterContext();

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-2">
        <button
          onClick={setGridView}
          className={`p-2 border ${gridView ? 'bg-blue-500 text-white' : ''}`}
        >
          <FaTh />
        </button>
        <button
          onClick={setListView}
          className={`p-2 border ${!gridView ? 'bg-blue-500 text-white' : ''}`}
        >
          <FaList />
        </button>
      </div>

      <p>{filteredProducts.length} Products Found</p>

      <form>
        <label htmlFor='sort'>Sort by </label>
        <select name='sort' id='sort' onClick={sorting}>
          <option value='lowest'>Price (Lowest)</option>
          <option value='highest'>Price (Highest)</option>
          <option value='a-z'>Name (A-Z)</option>
          <option value='z-a'>Name (Z-A)</option>
        </select>
      </form>
    </div>
  );
};
