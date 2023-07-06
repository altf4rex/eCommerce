import React from "react";
import './range.css'
const RangeSlider = ({ handleMinChange, handleMaxChange, handleMinField, handleMaxField, min, max }) => {
  
  return (
    <div className="wrapper">
      <div className="price-input">
        <div className="field">
          <p className="min-max">Min $</p>
          <input
            type="number"
            className="input-min"
            value={min}
            onInput={handleMinField}
          />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <p className="min-max">Max $</p>
          <input
            type="number"
            className="input-max"
            value={max}
            onInput={handleMaxField}
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