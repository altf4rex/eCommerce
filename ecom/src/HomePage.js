import React from 'react'
import FirstComponetHome from './FirstComponetHome.js'
import SecondComponetHome from './SecondComponetHome.js'
import ThirdComponentHome from './ThirdComponentHome.js'
import Reviews from './Reviews.js'
import BlogPost from './BlogPost.js'

const HomePage = ({handleIdProduct, currentProducts, bestSelling, allCategories, products, categoriesContent, productsContent, productsCard, productsContentFermers, farmerProducts, reviewContent}) => {
  return (
    <div>
        <FirstComponetHome
        products={products}
         allCategories={allCategories}
         categoriesContent={categoriesContent}
         />
        <SecondComponetHome
        handleIdProduct={handleIdProduct}
        bestSelling={bestSelling} 
        currentProducts={currentProducts}
          productsContent={productsContent}
          productsCard={productsCard}
        />
        <ThirdComponentHome
        handleIdProduct={handleIdProduct}
          currentProducts={currentProducts} 
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