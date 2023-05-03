import React from 'react'

const LeftMenuCategoriesBlock = ({subcategories}) => {
  return (
    <div>
      <h4 className='left-menu__header'>Categories</h4>
      {subcategories.map((s) => 
      <div className='left-menu__categories'  key={s.name}>
        <p className='left-menu__categories-name'>{s.name}</p>
        <p className="left-menu__categories-count">{s.count}</p>
      </div>
      )}
    </div>
  )
}

export default LeftMenuCategoriesBlock