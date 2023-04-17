import React from 'react'
import LeftMenuHome from './LeftMenuHome.js'
import BanerRecipe from './BanerRecipe.js'

const FirstComponetHome = ({categories}) => {
  return (
    <div>
        <LeftMenuHome categories={categories}/>
        <BanerRecipe />
        <BanerRecipe />
    </div>
  )
}

export default FirstComponetHome