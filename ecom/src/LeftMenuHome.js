import React from 'react'
import ArrowRight from '../src/assets/arrow-right.svg'
const LeftMenuHome = ({categories}) => {
  const category = categories.slice(0, 5);
  return (
    <div className='left-menu-home'>
        <h3 className='left-menu-home__name'>Category menu</h3>
        <ul className='left-menu-home__categories'>
          {
         category.map((c) =>
            <li className='left-menu-home__category' href="#" key={c.name}><a className='left-menu-home__link' href="№">{c.name}</a></li>
         )
        }
        </ul>
        <div className='left-menu-home__button'>
        More categories<img src={ArrowRight} alt="" style={{marginLeft: "12.5px"}}/>
        </div>
    </div>
  )
}

export default LeftMenuHome