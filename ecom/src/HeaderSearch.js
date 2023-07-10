import React from "react";
import UserIcon from "../src/assets/ic-user.svg";
import BasketIcon from "../src/assets/ic-basket.svg";
import Logo from "../src/assets/logo.svg";
import Search from "../src/assets/ic-search.svg";
import { Link, useNavigate } from "react-router-dom";
const HeaderSearch = ({
  handleCategory,
  searchProducts,
  allCategories,
  basketCounter,
}) => {
  const navigate = useNavigate();
  return (
    <div className="headersearch">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ marginTop: "3px" }} />
      </Link>
      <form className="headersearch__form">
        <select
          name="category"
          className="headersearch__select"
          onClick={(e) => {
            const selectedCategory = e.target.value;
            handleCategory(selectedCategory);
            navigate(`category/${selectedCategory}`);
          }}
        >
          {/* <option className="headersearch__option" defaultValue onChange={() => {
            console.log("w")
            handleCategory("All categories");
            navigate(`category/${"All categories"}`)}
          }
            >
          All categories
          </option> */}
          {allCategories.map((c) => (
            <option className="headersearch__option" value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className="headersearch__input"
          type="text"
          name="search"
          placeholder="Search Products, categories ..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              console.log(e.target.value);
              searchProducts(e.target.value);
              navigate(`category/${e.target.value}`);
            }
          }}
        />
        <button className="headersearch__search-button" type="button">
          <img src={Search} alt="" />
        </button>
      </form>
      <div style={{ display: "flex" }}>
        <img style={{ marginRight: "40px" }} src={UserIcon} alt="user" />
        <div style={{ position: "relative" }}>
          <img src={BasketIcon} alt="basket" />
          <div className="headersearch__basket-count">{basketCounter}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
