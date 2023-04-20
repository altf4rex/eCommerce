import React from 'react'

const ProductCard = ({productsCard}) => {
    const product = productsCard.slice(0, 3);

  return (
    <>
    {product.map((p) => 
    <div className='product-card' key={p.name}>
        <img className='product-card__img' src={p.src} alt="" />
        <h4 className='product-card__name'>{p.name}</h4>
        <p className='product-card__description'>{p.description}</p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px"}}>
          <p className='product-card__price'>{p.price}</p>
          <div className='product-card__button'>Buy now</div>
        </div>
    </div>)
    }
    </>
  )
}

export default ProductCard