import React from "react";
import GridIcon from '../../assets/ic-grid.svg';
import ListIcon from "../../assets/ic-list.svg";
import "./category-header.css"
const CategoryHeader = ({ category, count, categoryId }) => {
  count = 117;
  
  return (
    <div className="category-header">
      <h2 className="category-header__header">{categoryId}</h2>
      <div className="category-header__buttons">
        <div className="category-header__grid">
          <img src={GridIcon} alt="" style={{marginRight: "5px"}}/>
          Grid view
        </div>
        <div className="category-header__list">
          <img src={ListIcon} alt="" style={{marginRight: "5px"}} />
          List view
        </div>
        <div className="category-header__products">
          <div className="category-header__products-count" style={{marginRight: "5px"}}>
            {count}
          </div>
          <p className="category-header__products-name">Products</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
