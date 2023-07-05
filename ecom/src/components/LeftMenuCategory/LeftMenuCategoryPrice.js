import React from 'react'
import RangeSlider from '../Range/RangeSlider'
// import LeftMenuCategoryButtons from './LeftMenuCategoryButtons'
const LeftMenuCategoryPrice = () => {
  
  return (
    <div className="left-menu__block">
      <h4 className="left-menu__header">Price</h4>
        <div className="left-menu__prise">
        <RangeSlider
        min={0}
        max={1000}
        onClick={({ min, max }) => (console.log(`${min} and ${max}`))}
        /> 
        </div>
      <div className='left-menu-buttons'>
        <div className='left-menu-buttons__apply'>Apply</div>
        <div className='left-menu-buttons__reset'>Reset</div>
      </div>
    </div>
  )
}

export default LeftMenuCategoryPrice