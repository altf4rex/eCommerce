import React from 'react'

const Headertop = () => {
  return (
    <div className='headertop'>
        <div  className='headertop__left'>
            <a href='#' className='headertop__chat'>Chat whit us</a>
            <p className='headertop__number'>+420 336 775 664</p>
            <p className='headertop__email'>info@freshnesecom.com</p>
        </div>
        <div className='headertop__right'>
            <a href='#' className='headertop__blog' >Blog</a>
            <a href='#' className='headertop__about'>About Us</a>
            <a href='#' className='headertop__careers'>Careers</a>
        </div>
    </div>
  )
}

export default Headertop