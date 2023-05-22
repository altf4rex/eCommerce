import React, { useState } from "react";
import Add from "../../assets/ic-add.svg";
import Like from "../../assets/ic-like-coral.svg";
import Compare from "../../assets/ic-compare-coral.svg";
import AdditionalDescription from "../AdditionalDescription/AdditionalDescription";
import AdditionalReview from "../AdditionalReview/AdditionalReview";
import AdditionalQuestion from "../AdditionalQuestion/AdditionalQuestion";
const ProductDetail = ({currentProduct, reviewContent, questionContent}) => {
  const product = currentProduct[0];
  const [currentInformation, setCurrentInformation] = useState(currentProduct);
  
  return (
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={product.src}
        alt={product.name}
      />
      <div className="product-detail__container">
        <h2 className="product-detail__name">{product.name}</h2>
        <div>
          <img src={product.rating} alt="" />
          <p>({product.reviewCount} customer review)</p>
        </div>
        <p className="product-detail__description">{product.fullDescription}</p>
        <div style={{ display: "flex" }}>
          <div className="category-products-card__card-info">
            <div style={{ paddingRight: "32px" }}>
              <p className="card-info-gap">Fresheness</p>
              <p className="card-info-gap">Farm</p>
              <p className="card-info-gap">Delivery area</p>
              <p className="card-info-gap">Stock</p>
            </div>
            <div style={{ paddingRight: "32px" }}>
              <p className="card-info-gap add-green">{product.fresheness}</p>
              <p className="card-info-gap">{product.farm}</p>
              <p className="card-info-gap">{product.deliveryArea}</p>
              <p className="card-info-gap add-green">{product.stock}</p>
            </div>
          </div>
          <div className="category-products-card__card-info">
            <div style={{ paddingRight: "32px" }}>
              <p className="card-info-gap">SKU:</p>
              <p className="card-info-gap">Category:</p>
              <p className="card-info-gap">Buy by:</p>
              <p className="card-info-gap">Delivery:</p>
            </div>
            <div style={{ paddingRight: "32px" }}>
              <p className="card-info-gap">{product.sku}</p>
              <p className="card-info-gap add-green">{product.category}</p>
              <p className="card-info-gap">{product.buyBy.join(", ")}</p>
              <p className="card-info-gap add-green">
                In {product.delivery} days
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p className="product-detail__discount-price">36.23 USD</p>
          <p className="product-detail__price">48.56 USD</p>
          <form className="product-detail__form">
            <input
              className="product-detail__input"
              type="text"
              name="count"
              placeholder="1"
            />
            <select name="category" className="product-detail__select">
              {product.buyBy.map((p) => (
                <option className="product-detail__option" value={p} key={p}>
                  {p}
                </option>
              ))}
            </select>
          </form>
          <div className="product-detail__add-cart-button">
            <img src={Add} alt="" />
            Add to cart
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="product-detail__add-wish-button">
            <img src={Like} alt="" />
            Add to my wish list
          </div>
          <div className="product-detail__compare-button">
            <img src={Compare} alt="" />
            Compare
          </div>
        </div>
        <div className="product-detail__addittionally">
          <div className="product-detail__addittionally-buttons">
            <div 
            className="product-detail__addittionally-button-description"
            onClick={() => setCurrentInformation(currentProduct)}>
              Description
              </div>
            <div 
            className="product-detail__addittionally-button-reviews"
            onClick={() => setCurrentInformation(reviewContent)}>
              Reviews
            </div>
            <div 
            className="product-detail__addittionally-button-questions"
            onClick={() => setCurrentInformation(questionContent)}>
              Questions
            </div>
          </div>
          
          {currentInformation === currentProduct && <AdditionalDescription currentInformation={currentInformation}/>}
          {currentInformation === reviewContent && <AdditionalReview currentInformation={currentInformation}/>}
          {currentInformation === questionContent && <AdditionalQuestion currentInformation={currentInformation}/>}
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
