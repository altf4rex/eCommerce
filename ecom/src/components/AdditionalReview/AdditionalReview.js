import React from "react";
import "./add-review.css"

const AdditionalReview = ({ currentInformation }) => {
  return (
    <>
    <div className="review" >
      {currentInformation.map((r) => (
          <div className="review__card" key={r.name}>
            <p className="review__card-comment">{r.comment}</p>
            <p className="review__card-name">{r.name}</p>
            <img className="review__card-img" src={r.src} alt="" />
          </div>
      ))}
      </div>
    </>
  );
};

export default AdditionalReview;
