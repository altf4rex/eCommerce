import React from "react";
import GridIcon from '../../assets/ic-grid.svg';
import GridIconActive from '../../assets/ic-grid-active.svg';
import ListIcon from "../../assets/ic-list.svg";
import ListIconActive from "../../assets/ic-list-active.svg";

import "./category-header.css"
const CategoryHeader = ({handleGrid, category, count, categoryId, isGrid}) => {
  count = 117;
  
  return (
    <div className="category-header">
      <h2 className="category-header__header">{categoryId}</h2>
      <div className="category-header__buttons">
        <div className="category-header__grid" onClick={handleGrid}>
          <img src={isGrid ? GridIconActive : GridIcon} alt="" style={{marginRight: "5px"}} />
          Grid view
        </div>
        <div className="category-header__list" onClick={handleGrid}>
          <img src={isGrid ? ListIcon : ListIconActive} alt="" style={{marginRight: "5px"}}/>
          List view
        </div>
        {/* <div className="category-header__products">
          <div className="category-header__products-count" style={{marginRight: "5px"}}>
            {count}
          </div>
          <p className="category-header__products-name">Products</p>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryHeader;
