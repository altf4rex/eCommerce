
import { React, useState } from 'react';
import "./button-more-products.css";
import ArrowDown from '../../assets/arrow-down-white.svg';
// import {Link} from 'react-router-dom';
// import { sculptureList } from './data.js';

const ButtonMoreProducts = ({isNeedButton, handleMore, goToNextPage, goToPreviousPage, currentPage, endIndex, productsCardList }) => {
  
  return (
    
    <div className='button' style={{ display: isNeedButton ? "block" : "none" }}>
      {/* <button onClick={goToPreviousPage} disabled={currentPage === 1}>Предыдущая страница</button>
      <button onClick={goToNextPage} disabled={endIndex >= productsCardList.length}>Следующая страница</button> */}
    <div 
    className='button__more'
    onClick={handleMore}
    >
      Show more products <img src={ArrowDown} alt="" style={{marginLeft: "6px", marginBottom: "1px"}}/>
    </div>

    </div>
  )
}


export default ButtonMoreProducts
