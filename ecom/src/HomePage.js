import React from 'react'
import FirstComponetHome from './FirstComponetHome.js'
import SecondComponetHome from './SecondComponetHome.js'
import ThirdComponentHome from './ThirdComponentHome.js'
import Reviews from './Reviews.js'
import BlogPost from './BlogPost.js'

const HomePage = ({ allCategories, products, categoriesContent, productsContent, productsCard, productsContentFermers, farmerProducts, reviewContent}) => {
  return (
    <div>
        <FirstComponetHome
         allCategories={allCategories}
         categoriesContent={categoriesContent}
         />
        <SecondComponetHome 
          products={products}
          productsContent={productsContent}
          productsCard={productsCard}
        />
        <ThirdComponentHome 
          productsContentFermers={productsContentFermers}
          productsCard={productsCard}
          farmerProducts={farmerProducts}
        />
        <Reviews reviewContent={reviewContent} />
        <BlogPost /> 
    </div>
  )
}

export default HomePage