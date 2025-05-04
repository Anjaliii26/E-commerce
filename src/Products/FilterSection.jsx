import React from 'react'
import { useFilterContext } from '../context/filterContext'

export const FilterSection = () => {
  const{filters:{text,category}, 
  allProducts, 
  updateFilter} = useFilterContext()

  const getUniqueData=(data,property)=>{
    let unique= data.map((item)=>item[property])
    return (unique=["all",...new Set(unique)])
  }

  const categoryOnlyData=getUniqueData(allProducts,'category')
  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className='flex items-center justify-between mb-4'>
          <input type="text" 
          placeholder='Search...' 
          name="text" 
          value={text} 
          onChange={updateFilter}
          className='border p-2 rounded' />
          </form>
      </div>

      <div>
        <h3>Category</h3>
        <div className='flex flex-col md:flex-row md:gap-4'>
          {categoryOnlyData.map((category, index) => {
            return (
              <button key={index} 
              name='category' 
              type="button"
              value={category} 
              onClick={updateFilter}
              className='border p-2 rounded m-1'>
                {category}
              </button>
            )
          })}

        </div>
      </div>


    </div>
  )
}
