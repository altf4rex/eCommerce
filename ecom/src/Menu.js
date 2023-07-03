import React from 'react';
import Arrow from '../src/assets/arrow-down.svg';
import { Link, useNavigate, useParams  } from 'react-router-dom';




const Menu = ({categories, handleCategory}) => {
  // const { categoryId } = useParams();
  const navigate = useNavigate();
 
  return (
    <div className='menu'>
        {
         categories.map((c) =>
         <div 
            
             onClick={() => {
              
              navigate(`category/${c.category}`);
              
              handleCategory(c.category)
             }}
             className='menu__category' 
             value={c.category}
             key={c.category}>
             {c.category}
            
             <img 
             style={{marginBottom: "2px", marginLeft: "2px"} } 
             src={Arrow} alt="" />
            </div>
         )
        }
    </div>
  )
}

export default Menu