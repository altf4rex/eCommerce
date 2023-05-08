import React, { useState } from 'react'
import './left-menu-category.css'
import LeftMenuBrendBlock from './LeftMenuBrendBlock.js'
import LeftMenuCategoriesBlock from './LeftMenuCategoriesBlock.js'
import LeftMenuCategoryRating from './LeftMenuCategoryRating'
import RatingFive from '../../assets/rating-5.svg';
import RatingFour from '../../assets/rating-4.svg';
import RatingThree from '../../assets/rating-3.svg';
import RatingTwo from '../../assets/rating-2.svg';
import RatingOne from '../../assets/rating-1.svg';
import LeftMenuCategoryPrice from './LeftMenuCategoryPrice'
import LeftMenuCategoryButtons from './LeftMenuCategoryButtons'

const filter = [
  {brand: "Filtre by brand item 1", id:"1", checked: false},
  {brand: "Filtre by brand item 2", id:"2", checked: false},
  {brand: "Filtre by brand item 3", id:"3", checked: false},
  {brand: "Filtre by brand item 4", id:"4", checked: false},
  {brand: "Filtre by brand item 5", id:"5", checked: false}
]

const subcategories = [
  {name: "Fruit", count: "320"},
  {name: "Vegetables", count: "112"}
]

const rating = [
  {src: RatingFive, id: "rating-5", checked: false},
  {src: RatingFour, id: "rating-4", checked: false},
  {src: RatingThree, id: "rating-3", checked: false},
  {src: RatingTwo, id: "rating-2", checked: false},
  {src: RatingOne, id: "rating-1", checked: false},
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

const[ratingStarts, setRatingStarts] = useState(rating);

function handleToggleRating(ratingId, check) {
  setRatingStarts(ratingStarts.map((r) => {
    if (r.id === ratingId) {
      // Create a *new* object with changes
      return { ...r, checked: check};
    } else {
      // No changes
      return r;
    }
    
  }));
}

  return (
    <div className='left-menu'>
      <LeftMenuCategoriesBlock subcategories={subcategories} />
      <LeftMenuBrendBlock
      filter={brandList}
      handleToggleFilter={handleToggleFilter}/> 
      <LeftMenuCategoryRating
      handleToggleRating={handleToggleRating}
      ratingStarts={ratingStarts}
       />
      <LeftMenuCategoryPrice />
      <LeftMenuCategoryButtons />
    </div>
  )
}

export default LeftMenuCategory