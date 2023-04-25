import React from 'react'
import ProductCard from './ProductCard.js'
import LeftMenuHome from './LeftMenuHome.js'

const ThirdComponentHome = ({ productsCard, productsContentFermers, farmerProducts}) => {
  return (
    <div className='third-componet-home'>
        <LeftMenuHome
          categories={farmerProducts}
          content={productsContentFermers}
        />
        <div className='third-componet-home__cards'>
          <ProductCard
           productsCard={productsCard}
           />
        </div>
        
    </div>
  )
}

export default ThirdComponentHome