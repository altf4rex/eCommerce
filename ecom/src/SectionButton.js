import React from 'react'
import ArrowRightGrin from "../src/assets/ArrowRightGrin.svg";
const SectionButton = ({header}) => {
  return (
    <div className="section-button">
        <h4 className="section-button__name">{header.header}</h4>
        <div className="section-button__button">
          {header.button}
          <img style={{ paddingLeft: "12.5px" }} src={ArrowRightGrin} alt="" />
        </div>
    </div>
  )
}

export default SectionButton