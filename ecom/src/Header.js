import React from 'react'
import Headertop from './Headertop.js'
import HeaderSearch from './HeaderSearch.js'
const Header = ({handleCategory, searchProducts, allCategories, basketCounter}) => {
  return (
    <header className='header'>
        <Headertop />
        <HeaderSearch
        handleCategory={handleCategory}
        searchProducts={searchProducts}
         allCategories={allCategories} 
         basketCounter={basketCounter}
        />
    </header>
  )
}

export default Header