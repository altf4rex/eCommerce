import React from 'react'
import LeftMenuHome from './LeftMenuHome.js'
import BanerRecipe from './BanerRecipe.js'

const FirstComponetHome = ({categories, categoriesContent}) => {
  return (
    <div className='first-componet-home'>
        <LeftMenuHome 
        categories={categories}
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