import React from 'react'
import { useNavigate } from 'react-router-dom';
const ProductCard = ({currentProducts, handleIdProduct}) => {
  const navigate = useNavigate();
  return (
    <>
    {currentProducts.map((p) => 
    <div className='product-card' key={p.id} onClick={() => {navigate(`product/${p.name}`); handleIdProduct(p.name)} }>
        <img className='product-card__img' src={p.src} alt="" />
        <h4 className='product-card__name'>{p.name}</h4>
        <p className='product-card__description'>{p.description}</p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px"}}>
          <p className='product-card__price'>{p.discountPrice}USD</p>
          <div className='product-card__button'>Buy now</div>
        </div>
    </div>)
    }
    </>
  )
}

export default ProductCard