import Header from './Header.js';
import Menu from './Menu.js';
import HomePage from './HomePage.js';
import Photo from '../src/assets/photo.jpg';
import Category from './components/Category/Category.js';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer.js'
import { useState, useEffect } from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail.js';
import RaitingFive from './assets/rating-4-black.svg'
const categories = [
  {name: "Bakery", content: "dgfsdg"}, 
  {name: "Fruit and vegetables"}, 
  {name: "Meat and fish"}, 
  {name: "Drinks"}, 
  {name: "Kitchen"}, 
  {name: "Special nutrition"}, 
  {name: "Baby"}, 
  {name: "Pharmacy"}, 
]

const categoriesContent = {
  header: "Category menu",
  button: "More categories"
}

const products = [
  {name: "Kitchen"}, 
  {name: "Meat and fish"}, 
  {name: "Special nutrition"}, 
  {name: "Pharmacy"}, 
  {name: "Baby"}, 
  {name: "Fruit and vegetables"}, 
  {name: "Drinks"}, 
  {name: "Me"}, 
  
]

const farmerProducts = [
  {name: "Carrots"}, 
  {name: "Tomatoes"}, 
  {name: "Potatoes"}, 
  {name: "Chicken"}, 
  {name: "Pork"}, 
  {name: "Fruit and vegetables"}
  
]

const productsContent = {
  header: "Best selling products",
  button: "More products"
}

const productsContentFermers = {
  header: "Best from Farmers",
  button: "More products"
}

const productsCard = [
  {name: "mango", description: "wai wai", price: "1$", src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg"}, 
  {name: "mango2", description: "wai wai", price: "1$", src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg"}, 
  {name: "mango3", description: "wai wai", price: "1$", src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg"}, 
]

const reviewContent = [
  {name: "random dude 1", comment: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “", src: Photo}, 
  {name: "random dude 2", comment: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “", src: Photo}, 
  {name: "random dude 3", comment: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “", src: Photo}, 
  {name: "random dude 4", comment: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “", src: Photo}, 
  {name: "random dude 5", comment: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “", src: Photo} 
]

const productsCardList = [
  {name: "Mango", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",  discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"},  
  {name: "Mango1", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango2", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango3", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango4", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango5", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango6", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango7", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango8", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango9", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango10", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango11", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango12", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango13", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango14", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango15", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango16", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
  {name: "Mango17", description: "Space for a small product description", rating: RaitingFive, reviewCount: "1", fullDescription:"Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.", discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", deliveryArea: "Europe", stock: "320 pcs", sku: "76645",  category: "fruit", buyBy: ["pcs", "kgs", "box", "pack"], delivery: "2"}, 
   
]

const basketCounter = 4;

function App() {
  // const [filteredCategory, setFilteredCategory] = useState(null);
  // const handleCategory = (e) => {
  //   setFilteredCategory(categories.filter(c => c.name === e.target.textContent));
  // };


  // idk

  // const [filteredCategory, setFilteredCategory] = useState(null);
  // const handleCategory = (e) => {
  //   const category = categories.filter(c => c.name === e.target.textContent)[0];
  //   localStorage.setItem('selectedCategory', JSON.stringify(category));
  //   setFilteredCategory(category);
  // };
  
  // useEffect(() => {
  //   const storedCategory = JSON.parse(localStorage.getItem('selectedCategory'));
  //   setFilteredCategory(storedCategory);

  //   return () => {
  //     filteredCategory(null);
  //   };
  // }, [filteredCategory]);



  const handleCategory = (e) => {
    const filtered = categories.filter(c => c.name === e.target.textContent);
    setFilteredCategory(filtered);
    localStorage.setItem('filteredCategory', JSON.stringify(filtered));
  };

  const [filteredCategory, setFilteredCategory] = useState(JSON.parse(localStorage.getItem('filteredCategory')) || null);
  
  useEffect(() => {
    return () => localStorage.removeItem('filteredCategory');
  }, []);
  
  const [currentProduct, setCurrentProduct] = useState([]);

  const handleIdProduct = (e) => {
    setCurrentProduct(productsCardList.filter(p => p.name === e.target.id))
  }


  return (
    <div className="container">
      <Header 
       categories={categories} 
       basketCounter={basketCounter}
      />
      <Menu 
      categories={categories} 
      handleCategory={handleCategory}/>
      <Routes>
        <Route path='/' element={<HomePage 
        categories={categories}
        products={products}
        categoriesContent={categoriesContent}
        productsContent={productsContent}
        productsCard={productsCard}
        productsContentFermers={productsContentFermers}
        farmerProducts={farmerProducts}
        reviewContent={reviewContent}
       />}/>
        <Route path='/category' element={
        <Category
        productsCardList={productsCardList} 
        filteredCategory={filteredCategory}
        handleIdProduct={handleIdProduct}
        /> }/>
        <Route path='/product' element={<ProductDetail currentProduct={currentProduct}/> }/>
      </Routes>
      <Footer />
      
      {/* 
      <Checkout />
      <Blog /> 
      <BlogDetail />
      <Footer /> */}
    </div>
  );
}

export default App;
