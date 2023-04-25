import React from "react";
import ScrollLeft from "../src/assets/arrow-left-scroll.svg";
import ScrollRight from "../src/assets/arrow-right-scroll.svg";
import SectionButton from "./SectionButton.js"
const Reviews = ({ reviewContent }) => {
  const handleClickLeft = () => {
    document.getElementById('cards-scroll').scrollBy(-300, 0); 
  } 

  const handleClickRight = () => {
    document.getElementById('cards-scroll').scrollBy(300, 0);
  } 
  const header = {header: "Our customers says", button: "button"}
  return (
    <div className="reviews">
      <SectionButton header={header}/>
      <div className="reviews__content">
        <img className="reviews__scroll-left" src={ScrollLeft} alt="" onClick={handleClickLeft}/>
        <div className="reviews__cards" id="cards-scroll">
          {reviewContent.map((r) => (
            <div className="reviews__card" key={r.name}>
              <div className="reviews__card-content">
                <p className="reviews__card-comment">{r.comment}</p>
                <p className="reviews__card-name">{r.name}</p>
                <img className="reviews__card-img" src={r.src} alt="" />
              </div>
            </div>
          ))}
          </div>
          <img onClick={handleClickRight} className="reviews__scroll-right" src={ScrollRight} alt="" />
      </div>
    </div>
  );
};

export default Reviews;
