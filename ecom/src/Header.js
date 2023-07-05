import React from 'react'
import Headertop from './Headertop.js'
import HeaderSearch from './HeaderSearch.js'
const Header = ({allCategories, basketCounter}) => {
  return (
    <header className='header'>
        <Headertop />
        <HeaderSearch
         allCategories={allCategories} 
         basketCounter={basketCounter}
        />
    </header>
  )
}

export default Header