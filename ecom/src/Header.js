import React from 'react'
import Headertop from './Headertop.js'
import HeaderSearch from './HeaderSearch.js'
const Header = ({categories, basketCounter}) => {
  return (
    <header className='header'>
        <Headertop />
        <HeaderSearch
         categories={categories} 
         basketCounter={basketCounter}
        />
    </header>
  )
}

export default Header