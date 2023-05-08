import React from 'react'
import RangeSlider from '../Range/RangeSlider'

const LeftMenuCategoryPrice = () => {
  
  return (
    <div className="left-menu__block">
      <h4 className="left-menu__header">Price</h4>
        <div className="left-menu__prise">
        <RangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} /> 
        </div>
    </div>
  )
}

export default LeftMenuCategoryPrice