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
      {brandList.map((f) => (
        <div className="left-menu__brands" key={f.brand}>
          <input
            type="checkbox"
            style={{marginTop: "0.5px"}}
            className="left-menu__checkbox"
            name={f.brand}
            checked={f.checked}
            id={f.brand}
            onChange={(e) => {
              handleToggleBrand(f.brand, e.target.checked);
            }}
          ></input>
          <p className="left-menu__brands-name">{f.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftMenuBrendBlock;
