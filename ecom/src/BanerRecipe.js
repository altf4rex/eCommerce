import React from 'react'
import BgRecipe from '../src/assets/BgRecipe.svg'
import ArrowRightGrin from '../src/assets/ArrowRightGrin.svg'

const BanerRecipe = () => {
  return (
    <div style={{backgroundImage: `url(${BgRecipe})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "420px", height: "280px", backgroundColor: "#F4F8EC", borderRadius: "12px"}}>
      <div style={{padding: "48px 0 0 33px"}}>
        <h4 className='baner-recipe__name'>Banner subfocus</h4>
        <h3 className='baner-recipe__header'>Space for heading</h3>
        <div className='baner-recipe__button'>
          Read recepies<img src={ArrowRightGrin} alt="" style={{marginLeft: "6px"}}/>
        </div>
      </div>
    </div>
  )
}

export default BanerRecipe