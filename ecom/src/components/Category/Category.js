import React from 'react'
import PageNavigation from '../PageNavigation/PageNavigation.js'
import './category.css';
const Category = ({filteredCategory}) => {
  return (
    <div>
      <PageNavigation filteredCategory={filteredCategory} />
    </div>
  )
}

export default Category