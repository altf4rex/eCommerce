import React from 'react';
import Arrow from '../src/assets/arrow-down.svg';
import { Link } from 'react-router-dom';


const Menu = ({categories, handleCategory}) => {
  
  return (
    <div className='menu'>
        {
         categories.map((c) =>
         <Link to='/category'
             onClick={handleCategory}
             
             className='menu__category' 
             value={c.category}
             key={c.category}>
             {c.category}
             <img 
             style={{marginBottom: "2px", marginLeft: "2px"} } 
             src={Arrow} alt="" />
            </Link>
         )
        }
    </div>
  )
}

export default Menu