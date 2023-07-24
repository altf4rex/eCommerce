import React, { useState } from "react";
import Add from "../../assets/ic-add.svg";
import Like from "../../assets/ic-like-coral.svg";
import Compare from "../../assets/ic-compare-coral.svg";
import AdditionalDescription from "../AdditionalDescription/AdditionalDescription";
import AdditionalReview from "../AdditionalReview/AdditionalReview";
import AdditionalQuestion from "../AdditionalQuestion/AdditionalQuestion";
import "./product-detail.css";
import PageNavigation from "../PageNavigation/PageNavigation";

const ProductDetail = ({ currentProduct, reviewContent, questionContent, filteredCategory }) => {
  const product = currentProduct[0];
  
  const [currentInformation, setCurrentInformation] = useState(currentProduct);
  const [activeButton, setActiveButton] = useState("Description");

  const handleButtonClick = (array, name) => {
    setCurrentInformation(array);
    setActiveButton(name);
  };
  // function to add additional information for the selected item
  // const { itemId } = useParams();
  return (
    <>
   
    
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={product.src}
        alt={product.name}
      />
      <div className="product-detail__container">
        <h2 className="product-detail__name">{product.name}</h2>
        <div className="product-detail__count-review">
          <img style={{ marginRight: "8px" }} src={product.rating} alt="" />
          <p>({product.reviewCount} customer review)</p>
        </div>
        <p className="product-detail__description">{product.fullDescription}</p>
        <div style={{ display: "flex", marginTop: "40px" }}>
          <div className="product-detail__card-info">
            <div style={{ paddingRight: "32px" }}>
              <p>Fresheness</p>
              <p>Farm</p>
              <p>Delivery area</p>
              <p>Stock</p>
            </div>
            <div style={{ paddingRight: "68px" }}>
              <p>{product.fresheness}</p>
              <p>{product.farm}</p>
              <p>{product.deliveryArea}</p>
              <p>{product.stock}</p>
            </div>
          </div>
          <div className="product-detail__card-info">
            <div style={{ paddingRight: "32px" }}>
              <p>SKU:</p>
              <p>Category:</p>
              <p>Buy by:</p>
              <p>Delivery:</p>
            </div>
            <div>
              <p>{product.sku}</p>
              <p>{product.category}</p>
              <p>{product.buyBy.join(", ")}</p>
              <p>In {product.delivery} days</p>
            </div>
          </div>
        </div>
        <div className="product-detail__purchase-container">
          <div>
            <p className="product-detail__discount-price">
              {product.discountPrice}USD
            </p>
            <p className="product-detail__price">{product.price}</p>
          </div>
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
            <img style={{ marginRight: "6px" }} src={Add} alt="" />
            Add to cart
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="product-detail__add-wish-button">
            <img style={{ marginRight: "6px" }} src={Like} alt="" />
            Add to my wish list
          </div>
          <div className="product-detail__compare-button">
            <img style={{ marginRight: "6px" }} src={Compare} alt="" />
            Compare
          </div>
        </div>
        <div className="product-detail__addittionally">
          <div className="product-detail__addittionally-buttons">
            <div
              className={
                activeButton === "Description"
                  ? "product-detail__addittionally-button underlined-button"
                  : "product-detail__addittionally-button"
              }
              onClick={() => handleButtonClick(currentProduct, "Description")}
            >
              Description
            </div>
            <div
              className={
                activeButton === "Reviews"
                  ? "product-detail__addittionally-button underlined-button"
                  : "product-detail__addittionally-button"
              }
              onClick={() => handleButtonClick(reviewContent, "Reviews")}
            >
              Reviews
            </div>
            <div
              className={
                activeButton === "Questions"
                  ? "product-detail__addittionally-button underlined-button"
                  : "product-detail__addittionally-button"
              }
              onClick={() => handleButtonClick(questionContent, "Questions")}
            >
              Questions
            </div>
          </div>
          <div style={{ marginTop: "48px" }}>
          {currentInformation === currentProduct && (
            <AdditionalDescription currentInformation={currentInformation} />
          )}
          {currentInformation === reviewContent && (
            <AdditionalReview currentInformation={currentInformation} />
          )}
          {currentInformation === questionContent && (
            <AdditionalQuestion currentInformation={currentInformation} />
          )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
