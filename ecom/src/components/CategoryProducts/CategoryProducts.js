import React from 'react';
import CategoryProductsCard from '../CategoryProductsCard/CategoryProductsCard'





const CategoryProducts = ({currentProducts, handleIdProduct}) => {
  

  return (
    <div>
      <CategoryProductsCard
      handleIdProduct={handleIdProduct} 
      currentProducts={currentProducts}/>
    </div>
  )
}

export default CategoryProducts