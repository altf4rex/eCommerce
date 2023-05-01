import React from 'react'
import './page-navigation.css';
import { Link } from 'react-router-dom';
const PageNavigation = ({filteredCategory}) => {
  const navigation = [...filteredCategory]
  return (
    <div className='page-navigation'>
       <Link to="/" className='page-navigation__link'>Homepage / </Link> 
       {
        navigation.map((c) => 
          <Link to={c.link}className='page-navigation__link active'>{c.name}</Link>
        )
       }
    </div>
  )
}

export default PageNavigation