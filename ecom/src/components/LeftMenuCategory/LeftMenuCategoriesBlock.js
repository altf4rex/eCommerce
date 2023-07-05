import React, { useState, useEffect } from 'react'

const LeftMenuCategoriesBlock = ({countOfCategories, handleSpecificCategory, filter, filteredCategory}) => {
  const [activeButton, setActiveButton] = useState("All");
  
  const handleButtonClick = (name) => {
    setActiveButton(name);
  };
  useEffect(() => {
    setActiveButton("All")
  }, [filteredCategory]);
  return (
    <div>
      <h4 className='left-menu__header'>Categories</h4>
      { Object.keys(countOfCategories).map((key) => 
      <div className='left-menu__categories' id="categories" key={key}>
        <p 
        className={
          activeButton === key
            ? "left-menu__categories-name active-button"
            : "left-menu__categories-name"
        }
        onClick={(e) => {
          handleButtonClick(key);
          // handleSpecificCategory(e);
          filter(e);
        }}
        >{key}</p>
        <p 
        className="left-menu__categories-count"
        >{countOfCategories[key]}</p>
      </div>
      )}
    </div>
  )
}

export default LeftMenuCategoriesBlock