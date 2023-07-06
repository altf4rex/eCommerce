import React, { useCallback, useEffect, useRef, useState } from "react";
import './range.css'
const RangeSlider = ({ defmin, defmax }) => {
  
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
    
    // const handleMinInput = (e) => {
    //   const value = parseInt(e.target.value);
    //   if (value < max) {
    //     setMin(value);
    //   } 
    // };
  
    // const handleMaxInput  = (e) => {
    //   const value = parseInt(e.target.value);
    //   if (value > min) {
    //     setMax(value);
    //   } 
    // };

  useEffect(() => {
    setMin(defmin);
    setMax(defmax);
  }, [defmin, defmax]);

  return (
    <div className="wrapper">
      <div className="price-input">
        <div className="field">
          <p className="min-max">Min $</p>
          <input
            type="number"
            className="input-min"
            value={min}
            onInput={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <p className="min-max">Max $</p>
          <input
            type="number"
            className="input-max"
            value={max}
            onInput={(e) => setMax(e.target.value)}
          />
        </div>
      </div>
      <div className="slider">
        <div className="progress" style={{ left: min < 0 ? 0 : `${min}%`, right: max > 100 ? 100 : `${100 - max}%` }}></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="100"
          value={min}
          onInput={handleMinChange}
          step="1"
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="100"
          value={max}
          onInput={handleMaxChange}
          step="1"
        />
      </div>
    </div>
  );
};


export default RangeSlider;