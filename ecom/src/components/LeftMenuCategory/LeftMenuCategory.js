import React, { useState } from 'react'
import './left-menu-category.css'
import LeftMenuBrendBlock from './LeftMenuBrendBlock.js'
import LeftMenuCategoriesBlock from './LeftMenuCategoriesBlock.js'
import LeftMenuCategoryRating from './LeftMenuCategoryRating'

import LeftMenuCategoryPrice from './LeftMenuCategoryPrice'


const filteredArray = [
  {brand: "Filtre by brand item 1", id:"1", checked: false},
  {brand: "Filtre by brand item 2", id:"2", checked: false},
  {brand: "Filtre by brand item 3", id:"3", checked: false},
  {brand: "Filtre by brand item 4", id:"4", checked: false},
  {brand: "Filtre by brand item 5", id:"5", checked: false}
]





const LeftMenuCategory = ({handlePriceApply, handlePriceReset, handleSpecificCategory, countOfCategories, rating, handleRating, filter, handleToggleRating, ratingStarts, filteredCategory}) => {
  
const[brandList, setBrandList] = useState(filteredArray);

function handleToggleFilter(brandId, check) {
  setBrandList(brandList.map((b) => {
    if (b.id === brandId) {
      // Create a *new* object with changes
      return { ...b, checked: check};
    } else {
      // No changes
      return b;
    }
    
  }));
}


  return (
    <div className='left-menu'>
      <LeftMenuCategoriesBlock
      filter={filter}
      // handleSpecificCategory={handleSpecificCategory}
      countOfCategories={countOfCategories} 
      filteredCategory={filteredCategory}
      />
      <LeftMenuBrendBlock
      filter={brandList}
      handleToggleFilter={handleToggleFilter}/> 
      <LeftMenuCategoryRating
      filter={filter}
      handleToggleRating={handleToggleRating}
      ratingStarts={ratingStarts}
       />
      <LeftMenuCategoryPrice
      handlePriceApply={handlePriceApply}
      handlePriceReset={handlePriceReset}
      />
       
    </div>
  )
}

export default LeftMenuCategory