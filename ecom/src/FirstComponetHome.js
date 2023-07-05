import React from 'react'
import LeftMenuHome from './LeftMenuHome.js'
import BanerRecipe from './BanerRecipe.js'

const FirstComponetHome = ({allCategories, categoriesContent}) => {
  return (
    <div className='first-componet-home'>
        <LeftMenuHome 
        categories={allCategories}
        content={categoriesContent}
        />
        <div className='banners-recipe'>
          <BanerRecipe />
          <BanerRecipe />
        </div>
        
    </div>
  )
}

export default FirstComponetHome