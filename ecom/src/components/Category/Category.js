import React, { useState, useEffect } from 'react'
import PageNavigation from '../PageNavigation/PageNavigation.js'
import './category.css';
import CategoryHeader from '../CategoryHeader/CategoryHeader.js';
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import LeftMenuCategory from '../LeftMenuCategory/LeftMenuCategory.js';
import CategoryProducts from '../CategoryProducts/CategoryProducts.js';
import ButtonMoreProducts from '../ButtonMoreProducts/ButtonMoreProducts';
import RatingFive from '../../assets/rating-5.svg';
import RatingFour from '../../assets/rating-4.svg';
import RatingThree from '../../assets/rating-3.svg';
import RatingTwo from '../../assets/rating-2.svg';
import RatingOne from '../../assets/rating-1.svg';
import { useParams } from "react-router-dom";


const Category = ({filteredCategory, handleIdProduct, countOfCategories, productsCardList, pageName}) => {
  
 // const [currentPage, setCurrentPage] = useState(1); // текущая страница
  
  // Функция для перехода к следующей странице
  // const goToNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // // Функция для перехода к предыдущей странице
  // const goToPreviousPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // // Определение текущих продуктов на странице
  // const productsPerPage = 5; // количество продуктов на странице
  // const startIndex = (currentPage - 1) * productsPerPage;
  // const endIndex = startIndex + productsPerPage;
  // const currentProducts = productsCardList.slice(startIndex, endIndex);

  // const [currentProduct, setCurrentProduct] = useState(5);
  // const handleMore = () => {
  //   setCurrentProduct(currentProduct + 5);
  // };
  
  // const currentProducts = productsCardList.slice(0, currentProduct);
  const rating = [
    {src: RatingFive, id: "rating-5", checked: false},
    {src: RatingFour, id: "rating-4", checked: false},
    {src: RatingThree, id: "rating-3", checked: false},
    {src: RatingTwo, id: "rating-2", checked: false},
    {src: RatingOne, id: "rating-1", checked: false},
  ]

  
const[ratingStarts, setRatingStarts] = useState(rating);

function handleToggleRating(ratingId, check) {
  handleRatingToggle(ratingId);
    setRatingStarts(ratingStarts.map((r) => {
    if (r.id === ratingId) {
      // Create a *new* object with changes
      return { ...r, checked: check};
    } else {
      // No changes
      return r;
    }
    
  }));
  
}

const [filteredCategories, setFilteredCategories] = useState({
  categories: "All",
  rating: {
    "rating-1": false,
    "rating-2": false,
    "rating-3": false,
    "rating-4": false,
    "rating-5": false,
  },
});

const handleRatingToggle = (ratingId) => {
  setFilteredCategories((prevState) => ({
    ...prevState,
    rating: {
      ...prevState.rating,
      [ratingId]: !prevState.rating[ratingId],
    },
  }));
};

const filter = (e) => {
  setFilteredCategories((prevState) => ({
    ...prevState,
    categories: e.target.textContent,
  }));
};

const filteredProducts = () => {
  let specificFilter = filteredCategory;
  
  if (filteredCategories.categories !== "All") {
    specificFilter = specificFilter.filter(
      (a) => a.category === filteredCategories.categories
    );
  }
  let previousSort = [];

  for (let ratingId in filteredCategories.rating) {
    if (filteredCategories.rating[ratingId]) {
      const ratingArray = specificFilter.filter((r) => r.ratingId === ratingId);
      previousSort.push(...ratingArray);
    }
  }
  
  if (previousSort.length > 0) {
    specificFilter = previousSort;
  } 
  
  
  setFilteredSpecificCategory(specificFilter);
  localStorage.setItem("specificFilter", JSON.stringify(specificFilter));
};

const [filteredSpecificCategory, setFilteredSpecificCategory] = useState(
  () => JSON.parse(localStorage.getItem("specificFilter")) || filteredCategory
);

useEffect(() => {
  return () => localStorage.removeItem("specificFilter");
}, []);

useEffect(() => {
  filteredProducts();
}, [filteredCategories, filteredCategory]);


const { categoryId, productId  } = useParams();

  return (
    <div>
      <PageNavigation 
      productId={productId}
      categoryId={categoryId} />
      <CategoryHeader categoryId={categoryId}/>
      <CategoryFilter /> 
      <div style={{display:'flex', padding: "64px 0"}}>
        <LeftMenuCategory 
        filter={filter}
        ratingStarts={ratingStarts}
        filteredProducts={filteredProducts}
        handleToggleRating={handleToggleRating}
        // handleRating={handleRating}
        rating={rating}
        countOfCategories={countOfCategories}
        // handleSpecificCategory={handleSpecificCategory}
        />
        <CategoryProducts 
        handleIdProduct={handleIdProduct}
        currentProducts={filteredSpecificCategory}
        /> 
      </div>
      <ButtonMoreProducts 
      // handleMore={handleMore}
      // goToNextPage={goToNextPage}
      // goToPreviousPage={goToPreviousPage}
      // currentPage={currentPage}
      // endIndex={endIndex}
      // productsCardList={productsCardList}
      />  
    </div>  
  )  
}   

export default Category