import React from 'react'
import { useFilterContext } from '../context/filterContext'
import { GridView } from './GridView'

export const ProductList = () => {
  const { FilteredProducts, gridView } = useFilterContext();

  if (gridView === true) {
    return <GridView products={FilteredProducts} />;
  }
  
  // if (setGridView===false){
  //   return <ListView products={FilteredProducts} />
  // }
  
  return (
    <>
    </>
  )
}
