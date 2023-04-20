import React from 'react'
import FirstComponetHome from './FirstComponetHome.js'
import SecondComponetHome from './SecondComponetHome.js'
const HomePage = ({categories, products, categoriesContent, productsContent, productsCard}) => {
  return (
    <div className='home-page'>
        <FirstComponetHome
         categories={categories}
         categoriesContent={categoriesContent}
         />
        <SecondComponetHome 
          products={products}
          productsContent={productsContent}
          productsCard={productsCard}
        />
    </div>
  )
}

export default HomePage