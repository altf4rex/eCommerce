import React from 'react';
import Arrow from '../src/assets/arrow-down.svg';
import { Link, useNavigate, useParams  } from 'react-router-dom';




const Menu = ({allCategories, handleCategory}) => {
  // const { categoryId } = useParams();
  const navigate = useNavigate();
 
  return (
    <div className='menu'>
        {
         allCategories.map((c) =>
         <div 
            
             onClick={() => {
              
              navigate(`category/${c}`);
              
              handleCategory(c)
             }}
             className='menu__category' 
             value={c}
             key={c}>
             {c}
            
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