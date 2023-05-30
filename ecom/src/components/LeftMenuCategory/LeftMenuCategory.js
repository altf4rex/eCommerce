import React, { useState } from 'react'
import './left-menu-category.css'
import LeftMenuBrendBlock from './LeftMenuBrendBlock.js'
import LeftMenuCategoriesBlock from './LeftMenuCategoriesBlock.js'
import LeftMenuCategoryRating from './LeftMenuCategoryRating'

import LeftMenuCategoryPrice from './LeftMenuCategoryPrice'
import LeftMenuCategoryButtons from './LeftMenuCategoryButtons'

const filteredArray = [
  {brand: "Filtre by brand item 1", id:"1", checked: false},
  {brand: "Filtre by brand item 2", id:"2", checked: false},
  {brand: "Filtre by brand item 3", id:"3", checked: false},
  {brand: "Filtre by brand item 4", id:"4", checked: false},
  {brand: "Filtre by brand item 5", id:"5", checked: false}
]





const LeftMenuCategory = ({handleSpecificCategory, countOfCategories, rating, handleRating, filter, handleToggleRating, ratingStarts}) => {
  
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
      countOfCategories={countOfCategories} />
      <LeftMenuBrendBlock
      filter={brandList}
      handleToggleFilter={handleToggleFilter}/> 
      <LeftMenuCategoryRating
      filter={filter}
      handleToggleRating={handleToggleRating}
      ratingStarts={ratingStarts}
       />
      <LeftMenuCategoryPrice />
      <LeftMenuCategoryButtons />
    </div>
  )
}

export default LeftMenuCategory