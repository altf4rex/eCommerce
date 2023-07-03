import React from 'react'
import './page-navigation.css';
import { Link } from 'react-router-dom';
import  {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const PageNavigation = ({categoryId, productId}) => {

  // const [link, setLink] = useState(filteredCategory)  

  

  // const navigation = [{name: "Bakery", content: "dgfsdg"}];
  // console.log(filteredCategory);


  // server part

  // const [product, setProduct] = useState(null);
  // const { productId } = useParams();

  // useEffect(() => {
  //   // загрузка данных о продукте с сервера
  //   fetch(`/api/products/${productId}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.error(error));
    
  //   // очистка состояния при удалении компонента из DOM
  //   return () => {
  //     setProduct(null);
  //   }
  // }, [productId]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }
  
  //
  return (
    <div className='page-navigation'>
       <Link to="/" className='page-navigation__link'>Homepage / </Link> 
        { categoryId && <Link to={categoryId} className='page-navigation__link active' key={categoryId}>{categoryId}</Link> }

    </div>
  )
}

export default PageNavigation