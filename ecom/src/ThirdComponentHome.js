import React from 'react'
import ProductCard from './ProductCard.js'
import LeftMenuHome from './LeftMenuHome.js'

const ThirdComponentHome = ({currentProducts, products, productsCard, productsContentFermers, farmerProducts, handleIdProduct}) => {
  return (
    <div className='third-componet-home'>
        <LeftMenuHome
          categories={farmerProducts}
          content={productsContentFermers}
        />
        <div className='third-componet-home__cards'>
          <ProductCard
          handleIdProduct={handleIdProduct}
           currentProducts={currentProducts}
           />
        </div>
        
    </div>
  )
}

export default ThirdComponentHome