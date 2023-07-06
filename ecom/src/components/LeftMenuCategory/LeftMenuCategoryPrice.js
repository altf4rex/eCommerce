import React from 'react'
import RangeSlider from '../Range/RangeSlider'


function LeftMenuCategoryPrice() {
 const defmin = 25;
 const defmax = 75;
  return (
    <div className="left-menu__block">
      <h4 className="left-menu__header">Price</h4>
      <div className="left-menu__prise">
        <RangeSlider 
        defmin={defmin}
        defmax={defmax}
        />
      </div>
      <div className="left-menu-buttons">
        <div className="left-menu-buttons__apply" >
          Apply
        </div>
        <div className="left-menu-buttons__reset">
          Reset
        </div>
      </div>
    </div>
  );
}

export default LeftMenuCategoryPrice