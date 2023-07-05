import React from "react";

const LeftMenuBrendBlock = ({filter, handleToggleFilter}) => {
  return (
    <div className="left-menu__block">
      <h4 className="left-menu__header">Brand</h4>
      {filter.map((f) => (
        <div className="left-menu__brands" key={f.brand}>
          <input
            type="checkbox"
            style={{marginTop: "0.5px"}}
            className="left-menu__checkbox"
            name={f.brand}
            checked={f.checked}
            id={f.id}
            onChange={(e) => {
              handleToggleFilter(f.id, e.target.checked);
            }}
          ></input>
          <p className="left-menu__brands-name">{f.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftMenuBrendBlock;
