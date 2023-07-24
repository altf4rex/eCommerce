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
  
  // const[brandList, setBrandList] = useState(
  //   filteredCategory.map(c => c.brand ? {brand: c.brand, id: c.id, checked: false} : {})
  // );
  

  
    const brandList = filteredCategory.reduce((accumulator, value) => {
      if (!accumulator.find(item => item.brand === value.brand)) {
        accumulator.push({brand: value.brand, check: false });
      }
      return accumulator;
    }, [])


    // NE PON WHY WE NEED ALL OBJECK NOT BREND and checked wtf
   // console.log('BRANDLIST', brandList )

    const [filteredBrandList, setFilteredBrandList] = useState(brandList)

  // useEffect(() => {
  //   setBrandList(
  //     filteredCategory.reduce((accumulator, value) => {
  //       if (!accumulator.find(item => item.brand === value.brand)) {
  //         accumulator.push(value);
  //       }
  //       return accumulator;
  //     }, [])
  //   );
  // }, [filteredCategory]);

  

  const [currentProduct, setCurrentProduct] = useState(5);
  const handleMore = () => {
    setCurrentProduct(currentProduct + 5);
  };

  const [isNeedButton, setisNeedButton] = useState(true);

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


function handleToggleBrand(brand, check) {
  setFilteredBrandList(filteredBrandList.map((b) => {
   
    if (b.brand === brand) {
      // Create a *new* object with changes
      return { ...b, check: check};
    } else {
      // No changes
      return b;
    }
  }));
  //filteredProducts();
  //setFilteredCategories(prevState)
}



const [filteredCategories, setFilteredCategories] = useState({
  categories: "All",
  brandList: filteredBrandList,
  rating: {
    "rating-1": false,
    "rating-2": false,
    "rating-3": false,
    "rating-4": false,
    "rating-5": false,
  },
  minPrice: "All",
  maxPrice: "All"
});



// const filteredArray = [
//   {brand: , id:"1", checked: false},
//   {brand: "Filtre by brand item 2", id:"2", checked: false},
//   {brand: "Filtre by brand item 3", id:"3", checked: false},
//   {brand: "Filtre by brand item 4", id:"4", checked: false},
//   {brand: "Filtre by brand item 5", id:"5", checked: false}
// ]





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


const handlePriceApply = (min, max) => {
  setFilteredCategories((prevState) => ({
    ...prevState,
    minPrice: min,
    maxPrice: max,
  }));
};

const handlePriceReset = (min, max) => {
  setFilteredCategories((prevState) => ({
    ...prevState,
    minPrice: min,
    maxPrice: max,
  }));
}

const filteredProducts = () => {
  let specificFilter = filteredCategory;
  
  if (filteredCategories.categories !== "All") {
    specificFilter = specificFilter.filter(
      (a) => a.category === filteredCategories.categories
    );
  }
  // price range filtering
  if (filteredCategories.minPrice !== "All" && filteredCategories.maxPrice !== "All") {
    specificFilter = specificFilter.filter(
      (a) => ((a.discountPrice <= filteredCategories.maxPrice) && (a.discountPrice >= filteredCategories.minPrice))
    );
  }

  let previousSortBrend = [];
  let countTrueBrend = 0;
  
  filteredBrandList.map(f => {
    if (f.check) {
      const ratingArray = specificFilter.filter((r) => r.brand === f.brand);
      previousSortBrend.push(...ratingArray);
      countTrueBrend++;
    } 
  })
    
    
  if(previousSortBrend.length === 0 && countTrueBrend > 0){
    specificFilter = [];
  }
  if (previousSortBrend.length > 0) {
    specificFilter = previousSortBrend;
  }
  

  let previousSortRating = [];
  let countTrueRating= 0;

  for (let ratingId in filteredCategories.rating) {
    if (filteredCategories.rating[ratingId]) {
      const ratingArray = specificFilter.filter((r) => r.ratingId === ratingId);
      previousSortRating.push(...ratingArray);
      countTrueRating++;
    } 
  }
  
if(previousSortRating.length === 0 && countTrueRating > 0){
  specificFilter = [];
}
if (previousSortRating.length > 0) {
  specificFilter = previousSortRating;
}

  if(specificFilter.length > 5){
    specificFilter = specificFilter.slice(0, currentProduct);
    setisNeedButton(true)
  } else {
    setisNeedButton(false)
  }
  
 

  setFilteredSpecificCategory(specificFilter);
  localStorage.setItem("specificFilter", JSON.stringify(specificFilter));
};

const [filteredSpecificCategory, setFilteredSpecificCategory] = useState(
  () => JSON.parse(localStorage.getItem("specificFilter")) || filteredCategory
);

// switching Grid
const [isGrid, setIsGrid] = useState(false);
const handleGrid = () => {
  setIsGrid(!isGrid);
}


useEffect(() => {
  filteredProducts();
}, [filteredCategories, filteredCategory, currentProduct, filteredBrandList]);

useEffect(() => {
  // Сбросить значения фильтрации при изменении категории
  setFilteredCategories({
    categories: "All",
    brandList: filteredBrandList,
    rating: {
      "rating-1": false,
      "rating-2": false,
      "rating-3": false,
      "rating-4": false,
      "rating-5": false,
    },
    minPrice: "All",
    maxPrice: "All"
  });
  setFilteredSpecificCategory(filteredCategory);
  setRatingStarts(rating);
  setCurrentProduct(5);
  setisNeedButton(true);
  setFilteredBrandList(brandList);
  // Запуск фильтрации продуктов
  filteredProducts();
}, [filteredCategory]);

useEffect(() => {
  return () => localStorage.removeItem("specificFilter");
}, []);

 const { categoryId } = useParams();
  //  <PageNavigation categoryId={categoryId} />
  return (
    <div>
      <CategoryHeader
      
      handleGrid={handleGrid}
      categoryId={categoryId}
      isGrid={isGrid} />
      <CategoryFilter /> 
      <div style={{display:'flex', padding: "64px 0"}}>
        <LeftMenuCategory
        filter={filter}
        handleToggleBrand={handleToggleBrand}
        handlePriceApply={handlePriceApply}
        handlePriceReset={handlePriceReset} 
        brandList={filteredBrandList}
        ratingStarts={ratingStarts}
        filteredProducts={filteredProducts}
        handleToggleRating={handleToggleRating}
        // handleRating={handleRating}
        rating={rating}
        countOfCategories={countOfCategories}
        // handleSpecificCategory={handleSpecificCategory}
        filteredCategory={filteredCategory}
        />
        <CategoryProducts 
        
        handleIdProduct={handleIdProduct}
        currentProducts={filteredSpecificCategory}
        isGrid={isGrid}
        /> 
      </div>
      <ButtonMoreProducts 
      isNeedButton={isNeedButton}
       handleMore={handleMore}
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