import React, { useState } from 'react'
import './left-menu-category.css'
import LeftMenuBrendBlock from './LeftMenuBrendBlock.js'
import LeftMenuCategoriesBlock from './LeftMenuCategoriesBlock.js'

const filter = [
  {brand: "Filtre by brand item 1", id:"1", checked: false},
  {brand: "Filtre by brand item 2", id:"2", checked: false},
  {brand: "Filtre by brand item 3", id:"3", checked: false},
  {brand: "Filtre by brand item 4", id:"4", checked: true},
  {brand: "Filtre by brand item 5", id:"5", checked: false}
]

const subcategories = [
  {name: "Fruit", count: "320"},
  {name: "Vegetables", count: "112"}
]

const LeftMenuCategory = ({c}) => {
  
const[brandList, setBrandList] = useState(filter);

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
      <LeftMenuCategoriesBlock subcategories={subcategories} />
      <LeftMenuBrendBlock
      filter={brandList}
      handleToggleFilter={handleToggleFilter}/> 
    </div>
  )
}

export default LeftMenuCategory