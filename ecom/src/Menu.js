import React from 'react'
import Arrow from '../src/assets/arrow-down.svg'
const Menu = ({categories}) => {
  return (
    <div className='menu'>
        {
         categories.map((c) =>
            <div className='menu__category' value={c.name} key={c.name}>{c.name} <img style={{marginBottom: "2px"}} src={Arrow} alt="" /></div>
         )
        }  
    </div>
  )
}

export default Menu