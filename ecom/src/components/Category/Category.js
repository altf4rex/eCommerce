import React, { useState } from 'react'
import PageNavigation from '../PageNavigation/PageNavigation.js'
import './category.css';
import CategoryHeader from '../CategoryHeader/CategoryHeader.js';
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import LeftMenuCategory from '../LeftMenuCategory/LeftMenuCategory.js';
import CategoryProducts from '../CategoryProducts/CategoryProducts.js';
import ButtonMoreProducts from '../ButtonMoreProducts/ButtonMoreProducts';



const Category = ({filteredCategory, handleIdProduct, productsCardList}) => {
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

  const [currentProduct, setCurrentProduct] = useState(5);
  const handleMore = () => {
    setCurrentProduct(currentProduct + 5);
  };

  const currentProducts = productsCardList.slice(0, currentProduct);

  return (
    <div>
      <PageNavigation filteredCategory={filteredCategory} />
      <CategoryHeader />
      <CategoryFilter /> 
      <div style={{display:'flex', padding: "64px 0"}}>
        <LeftMenuCategory />
        <CategoryProducts 
        handleIdProduct={handleIdProduct}
        currentProducts={currentProducts}
        /> 
      </div>
      <ButtonMoreProducts 
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