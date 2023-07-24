import React from 'react';
import CategoryProductsCard from '../CategoryProductsCard/CategoryProductsCard'
import ProductCard from '../../ProductCard';





const CategoryProducts = ({currentProducts, handleIdProduct, isGrid}) => {
  
const gridStyle = { display: "flex", gap: "10px", flexWrap: "wrap"}; 
  return (
    <div style={isGrid ? gridStyle : undefined}>
      {isGrid ? 
    <ProductCard 
    handleIdProduct={handleIdProduct} 
    currentProducts={currentProducts}
    />
    : <CategoryProductsCard
    handleIdProduct={handleIdProduct} 
    currentProducts={currentProducts}/> 
    }
      
      
    </div>
  )
}

export default CategoryProducts