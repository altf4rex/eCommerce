import React, { useEffect, useState } from "react";
import RangeSlider from '../Range/RangeSlider'


function LeftMenuCategoryPrice({handlePriceApply, handlePriceReset}) {
 const defmin = 25;
 const defmax = 75;


 const [min, setMin] = useState(defmin);
 const [max, setMax] = useState(defmax);

 const handleMinChange = (e) => {
   const value = parseInt(e.target.value);
   if (value < max) {
     setMin(value);
   }
 };

 const handleMaxChange = (e) => {
   const value = parseInt(e.target.value);
   if (value > min) {
     setMax(value);
   }
 };

 const handleMinField = (e) => {
   const value = parseInt(e.target.value);
     setMin(value);
 };

 const handleMaxField = (e) => {
   const value = parseInt(e.target.value);
     setMax(value);
 };
 

useEffect(() => {
 setMin(defmin);
 setMax(defmax);
}, [defmin, defmax]);

  return (
    <div className="left-menu__block">
      <h4 className="left-menu__header">Price</h4>
      <div className="left-menu__prise">
        <RangeSlider
        handleMinChange={handleMinChange} 
        handleMaxChange={handleMaxChange} 
        handleMinField={handleMinField} 
        handleMaxField={handleMaxField} 
        min={min}
        max={max}
        />
      </div>
      <div className="left-menu-buttons">
        <div 
        className="left-menu-buttons__apply" 
        onClick={() => (handlePriceApply(min, max))}
        >
          Apply
        </div>
        <div 
        className="left-menu-buttons__reset"
        onClick={() => {
          handlePriceReset(defmin, defmax);
          setMin(defmin);
          setMax(defmax)
        }}
        >
          Reset
        </div>
      </div>
    </div>
  );
}

export default LeftMenuCategoryPrice