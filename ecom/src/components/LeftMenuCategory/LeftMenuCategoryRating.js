import React from 'react'

const LeftMenuCategoryRating = ({handleToggleRating, ratingStarts}) => {
  return (
    <div className="left-menu__block">
      <h4 className='left-menu__header'>Rating</h4>
      {ratingStarts.map((r) => (
        <div className="left-menu__rating" key={r.id}>
          <input
            type="checkbox"
            style={{marginTop: "0.7px"}}
            className="left-menu__checkbox"
            name="rating"
            checked={r.checked}
            id={r.id}
            onChange={(e) => {
              handleToggleRating(r.id, e.target.checked);
            }}
          ></input>
          <img src={r.src} alt="" className="left-menu__brands-name" />
        </div>
      ))}
    </div>
  )
}

export default LeftMenuCategoryRating