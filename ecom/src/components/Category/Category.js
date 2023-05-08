import React from 'react'
import PageNavigation from '../PageNavigation/PageNavigation.js'
import './category.css';
import CategoryHeader from '../CategoryHeader/CategoryHeader.js';
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import LeftMenuCategory from '../LeftMenuCategory/LeftMenuCategory.js';
import CategoryProducts from '../CategoryProducts/CategoryProducts.js';
const Category = ({filteredCategory}) => {
  return (
    <div>
      <PageNavigation filteredCategory={filteredCategory} />
      <CategoryHeader />
      <CategoryFilter /> 
      <div style={{display:'flex', padding: "64px 0"}}>
        <LeftMenuCategory />
        <CategoryProducts />
      </div>
      
    </div>
  )
}

export default Category