import React from 'react';
import './category-product-card.css';
import ArrowRight from '../../assets/arrow-right-white.svg';
import Like from '../../assets/like.svg';
import { Link, useNavigate } from 'react-router-dom';

const CategoryProductsCard = ({currentProducts, handleIdProduct}) => {
  const navigate = useNavigate();
  return (
    <>
        {currentProducts.map((p) => 
         <div className="category-products-card__card" key={p.name}>
            <img src={p.src} alt="product" className="category-products-card__card-left" />
            <div className="category-products-card__card-centre">
                <h4 className="category-products-card__card-name">{p.name}</h4>
                <p className="category-products-card__card-description">{p.description}</p>
                <img src={p.rating} alt="" />
                <div className="category-products-card__card-info">
                  <div style={{paddingRight: "32px"}}>
                    <p className='card-info-gap'>Category</p>
                    <p className='card-info-gap'>Fresheness</p>
                    <p className='card-info-gap'>Delivery</p>
                    <p className='card-info-gap'>Stock</p>
                  </div>
                  <div style={{paddingRight: "32px"}}>
                    <p className='card-info-gap '>{p.category}</p>
                    <p className='card-info-gap add-green'>{p.fresheness}</p>
                    <p className='card-info-gap'>{p.delivery}</p>
                    <p className='card-info-gap add-green '>{p.stock}</p>
                  </div>
                </div>
            </div>
            <div className="category-products-card__card-right">
              <p className="category-products-card__card-discount-price">{p.discountPrice}</p>
              <p className="category-products-card__card-price">{p.price}</p>
              <p className="category-products-card__card-shipping">Free Shipping</p>
              <p className="category-products-card__card-shipping-days">Delivery in 1 day</p>
              <div
              id={p.name} 
              to='/product' 
              className="category-products-card__card-button-detail"
              onClick={() => {
              
                navigate(`product/${p.name}`);
                handleIdProduct(p.name)
               }}
              >
                Product Detail
                <img src={ArrowRight} alt="" style={{marginLeft: "6px"}}/>
              </div>
              <div className="category-products-card__card-button-add">
                <img src={Like} alt="" style={{marginRight: "8px"}}/>
                Add to wish list
              </div>
            </div>
         </div>
        )}
    </>
  )
}

export default CategoryProductsCard