import React, { useState } from 'react'
import './left-menu-category.css'
import LeftMenuBrendBlock from './LeftMenuBrendBlock.js'
import LeftMenuCategoriesBlock from './LeftMenuCategoriesBlock.js'
import LeftMenuCategoryRating from './LeftMenuCategoryRating'

import LeftMenuCategoryPrice from './LeftMenuCategoryPrice'








const LeftMenuCategory = ({brandList, handlePriceApply, handlePriceReset, handleSpecificCategory, handleToggleBrand, countOfCategories, rating, handleRating, filter, handleToggleRating, ratingStarts, filteredCategory}) => {
  




  return (
    <div className='left-menu'>
      <LeftMenuCategoriesBlock
      filter={filter}
      // handleSpecificCategory={handleSpecificCategory}
      countOfCategories={countOfCategories} 
      filteredCategory={filteredCategory}
      />
      <LeftMenuBrendBlock
      brandList={brandList}
      handleToggleBrand={handleToggleBrand}/> 
      <LeftMenuCategoryRating
      filter={filter}
      handleToggleRating={handleToggleRating}
      ratingStarts={ratingStarts}
       />
      <LeftMenuCategoryPrice
      filteredCategory={filteredCategory}
      handlePriceApply={handlePriceApply}
      handlePriceReset={handlePriceReset}
      />
       
    </div>
  )
}

export default LeftMenuCategory