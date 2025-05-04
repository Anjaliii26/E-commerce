import React from 'react'
import { useFilterContext } from '../context/filterContext'
import { GridView } from './GridView'
import { ListView } from './ListView';

export const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();

  if (gridView === true) {
    return <GridView products={filteredProducts} />;
  }

  if (gridView === false) {
    return <ListView products={filteredProducts} />;
  }
  
  // if (setGridView===false){
  //   return <ListView products={FilteredProducts} />
  // }
  
  return (
    <>
    </>
  )
}
