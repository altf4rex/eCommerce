import React from "react";
import "./add-description.css"
const AdditionalDescription = ({ currentInformation }) => {
  return (
    <>
      {currentInformation.map((c) => (
        <div className="description" key={c.name}>
          <div>
            <h4 className="description__header">Origins</h4>
            <p className="description__text">{c.origins}</p>
          </div>
          <div style={{marginTop: "32px"}}>
            <h4 className="description__header">How to cook</h4>
            <p className="description__text">{c.recipe}</p>
          </div>
          <div style={{marginTop: "32px"}}>
            <h4 className="description__header">Full of Vitamins!</h4>
            <div className="description__table-row">
              <p className="description__table-cell description__table-header">Vitamins</p>
              <p className="description__table-cell description__table-header">Quantity</p>
              <p className="description__table-cell description__table-header">% DV</p>
            </div>
            {c.vitamins.map((v) => (
              <div className="description__table" key={v.name}>
                <div className="description__table-row">
                  <p className="description__table-cell">{v.name}</p>
                  <p className="description__table-cell">{v.quantity}</p>
                  <p className="description__table-cell">{v.dv}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdditionalDescription;
