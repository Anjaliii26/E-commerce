import React from 'react'
import { FilterSection } from './FilterSection'
import { ProductList } from './ProductList'
import { Sort } from './Sort'
import { useFilterContext } from '../context/filterContext'

export const Products = () => {
  const {FilteredProducts} = useFilterContext()
  const {allProducts} = useFilterContext()
  return (
    <div className='grid grid-filter-cols 0.2fr 1fr'>
<div>
        <FilterSection/>
      </div>
      <div>
        <div>
          <Sort/>
        </div>
        <div>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}
