import React from 'react'
import ArrowRight from '../src/assets/arrow-right.svg'
const LeftMenuHome = ({categories, content}) => {
  const category = categories.slice(0, 5);

  return (
    <div className='left-menu-home'>
        <h3 className='left-menu-home__name'>{content.header}</h3>
        <ul className='left-menu-home__categories'>
          {
         category.map((c) =>
            <li className='left-menu-home__category' href="#" key={c}><a className='left-menu-home__link' href="№">{c}</a></li>
         )
        }
        </ul>
        <div className='left-menu-home__button'>
        {content.button}<img src={ArrowRight} alt="" style={{marginLeft: "12.5px"}}/>
        </div>
    </div>
  )
}

export default LeftMenuHome