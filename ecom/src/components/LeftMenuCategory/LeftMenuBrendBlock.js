import React, { useState } from "react";

const LeftMenuBrendBlock = ({brandList, handleToggleBrand}) => {

  // const [isChecked, setIsChecked] = useState(false);

  // const sorted = brandList.reduce((accumulator, value) => {
  //   if (!accumulator.includes(value.brand)) {
  //     accumulator.push(value.brand);
  //   }
  //   return accumulator;
  // }, []);
  

  return (
    <div className="left-menu__block">
      <h4 className="left-menu__header">Brand</h4>
      {brandList.map((b) => (
        <div className="left-menu__brands" key={b.brand}>
          <input
            type="checkbox"
            style={{marginTop: "0.5px"}}
            className="left-menu__checkbox"
            name={b.brand}
            checked={b.check}
            id={b.brand}
            onChange={(e) => {
              handleToggleBrand(b.brand, e.target.checked);
             
            }}
          ></input>
          <p className="left-menu__brands-name">{b.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftMenuBrendBlock;
