import React from 'react'
import UserIcon from '../src/assets/ic-user.svg';
import BasketIcon from '../src/assets/ic-basket.svg'
import Logo from '../src/assets/logo.svg'
import Search from '../src/assets/ic-search.svg'

const HeaderSearch = ({categories, basketCounter}) => {
  return (
    <div className='headersearch'>
        <img src={Logo} alt="logo" className='headersearch__logo'/>
        <form className='headersearch__form'>
            <select name="category" className='headersearch__select'>
            <option className='headersearch__option' defaultValue >All categories</option>
                {
                  categories.map((c) => <option className='headersearch__option' value={c.name} key={c.name}>{c.name}</option>) 
                }
            </select>
            <input className='headersearch__input' type="text" name="search" placeholder="Search Products, categories ..." />
            <button className='headersearch__search-button' type='button'><img src={Search} alt="" /></button>
        </form>
        <div style={{display: "flex"}}>
            <img style={{marginRight: "40px"}} src={UserIcon} alt="user" />
            <div style={{position: "relative"}}>
              <img src={BasketIcon} alt="basket" />
              <div className='headersearch__basket-count'>{basketCounter}</div>
            </div>
        </div>
    </div>
  )
}

export default HeaderSearch
