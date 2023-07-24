import React from 'react'
import LeftMenuHome from './LeftMenuHome.js'
import ProductCard from './ProductCard.js'

const SecondComponetHome = ({currentProducts, bestSelling, productsContent, handleIdProduct}) => {
  return (
    <div className='second-componet-home'>
        <LeftMenuHome
          categories={bestSelling}
          content={productsContent}
        />
        <div className='second-componet-home__cards'>
        
          <ProductCard handleIdProduct={handleIdProduct} currentProducts={currentProducts}/>
        </div>
        
    </div>
  )
}

export default SecondComponetHome