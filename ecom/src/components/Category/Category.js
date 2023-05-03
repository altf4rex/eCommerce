import React from 'react'
import PageNavigation from '../PageNavigation/PageNavigation.js'
import './category.css';
import CategoryHeader from '../CategoryHeader/CategoryHeader.js';
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import LeftMenuCategory from '../LeftMenuCategory/LeftMenuCategory.js';
const Category = ({filteredCategory}) => {
  return (
    <div>
      <PageNavigation filteredCategory={filteredCategory} />
      <CategoryHeader />
      <CategoryFilter /> 
      <LeftMenuCategory />
    </div>
  )
}

export default Category