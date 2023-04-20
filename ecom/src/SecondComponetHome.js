import React from 'react'
import LeftMenuHome from './LeftMenuHome.js'
import ProductCard from './ProductCard.js'

const SecondComponetHome = ({products, productsContent, productsCard}) => {
  return (
    <div className='second-componet-home'>
        <LeftMenuHome
          categories={products}
          content={productsContent}
        />
        <div className='second-componet-home__cards'>
          <ProductCard productsCard={productsCard}/>
        </div>
        
    </div>
  )
}

export default SecondComponetHome