import Header from "./Header.js";
import Menu from "./Menu.js";
import HomePage from "./HomePage.js";
import Photo from "../src/assets/photo.jpg";
import Category from "./components/Category/Category.js";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import { useState, useEffect } from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail.js";

import categories from './content/data.js';


const categoriesContent = {
  header: "Category menu",
  button: "More categories",
};

const products = [
  { category: "Kitchen" },
  { category: "Meat and fish" },
  { category: "Special nutrition" },
  { category: "Pharmacy" },
  { category: "Baby" },
  { category: "Fruit and vegetables" },
  { category: "Drinks" },
  { category: "Me" },
];

const farmerProducts = [
  { category: "Carrots" },
  { category: "Tomatoes" },
  { category: "Potatoes" },
  { category: "Chicken" },
  { category: "Pork" },
  { category: "Fruit and vegetables" },
];

const productsContent = {
  header: "Best selling products",
  button: "More products",
};

const productsContentFermers = {
  header: "Best from Farmers",
  button: "More products",
};

const productsCard = [
  {
    name: "mango",
    description: "wai wai",
    price: "1$",
    src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
  },
  {
    name: "mango2",
    description: "wai wai",
    price: "1$",
    src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
  },
  {
    name: "mango3",
    description: "wai wai",
    price: "1$",
    src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
  },
];

const reviewContent = [
  {
    name: "random dude 1",
    comment:
      "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
    src: Photo,
  },
  {
    name: "random dude 2",
    comment:
      "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
    src: Photo,
  },
  {
    name: "random dude 3",
    comment:
      "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
    src: Photo,
  },
  {
    name: "random dude 4",
    comment:
      "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
    src: Photo,
  },
  {
    name: "random dude 5",
    comment:
      "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
    src: Photo,
  },
];


const questionContent = [
  { question: "What about.... idk?", id: Date.now(), answer: "mmm... idk" },
  { question: "What about.... idk?", id: Date.now(), answer: "mmm... idk" },
  { question: "What about.... idk?", id: Date.now(), answer: "mmm... idk" },
];

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

  function countCategories(products) {
    const categories = {"All": products.length};
  
    // Перебираем каждый объект в массиве продуктов
    products.forEach(product => {
      const category = product.category;
      
      // Если категория уже существует в объекте categories, увеличиваем ее счетчик на 1
      if (categories.hasOwnProperty(category)) {
        categories[category] += 1;
      } else {
        // Если категория не существует, добавляем ее в объект categories со счетчиком 1
        categories[category] = 1;
      }
    });
  
    // Возвращаем объект categories, содержащий количество уникальных категорий и их количества
    return categories;
  }

const [pageName, setPageName] = useState('');


  const handleCategory = (item) => {
    const filteredName = categories.filter((c) => c.category === item);
    setCountOfCategories(countCategories(filteredName[0].array))
    // const filteredProducts = textContent.filter((p) => p.array === filteredName[0].category);
    // setFilteredCategory(filteredProducts);
    
    setFilteredName(filteredName[0].array);
    setPageName(filteredName[0].category);
    // localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
    localStorage.setItem("filteredName", JSON.stringify(filteredName[0].array));
  };
  
  // const handleSpecificCategory = (e) => {
  //   const filteredSpecificName = filteredName.filter((a) => a.category === e.target.textContent);
  //   // const filteredProducts = textContent.filter((p) => p.array === filteredName[0].category);
  //   // setFilteredCategory(filteredProducts);
  //   setFilteredSpecificName(filteredSpecificName);
  //   // localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
  //   localStorage.setItem("filteredSpecificName", JSON.stringify(filteredSpecificName));
  // };

  // const [filteredCategory, setFilteredCategory] = useState(
  //   JSON.parse(localStorage.getItem("filteredProducts")) || null
    
  // );
  const [filteredName, setFilteredName] = useState(
    JSON.parse(localStorage.getItem("filteredName")) || null
    
  );
  // const [filteredSpecificName, setFilteredSpecificName] = useState(
  //   JSON.parse(localStorage.getItem("filteredSpecificName")) || null
    
  // );

  useEffect(() => {
    return () => localStorage.removeItem("filteredName");
  }, []);

  const [countOfCategories, setCountOfCategories] = useState(
    JSON.parse(localStorage.getItem("countOfCategories")) || 0
    
  );
  // const [filteredSpecificName, setFilteredSpecificName] = useState(
  //   JSON.parse(localStorage.getItem("filteredSpecificName")) || null
    
  // );

  useEffect(() => {
    return () => localStorage.removeItem("countOfCategories");
  }, []);

  const [currentProduct, setCurrentProduct] = useState([]);

  const handleIdProduct = (name) => {
    setCurrentProduct(filteredName.filter((f) => f.name === name) );
  };


  const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname])
  }


  return (
    <div className="container">
      <Header categories={categories} basketCounter={basketCounter} />
      <Menu categories={categories} handleCategory={handleCategory} />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
            pageName={pageName}
              categories={categories}
              products={products}
              categoriesContent={categoriesContent}
              productsContent={productsContent}
              productsCard={productsCard}
              productsContentFermers={productsContentFermers}
              farmerProducts={farmerProducts}
              reviewContent={reviewContent}
            />
          }
        />
        <Route
          path="category/:categoryId"
          element={
            <Category
              countOfCategories={countOfCategories}
              productsCardList={filteredName}
              filteredCategory={filteredName}
              handleIdProduct={handleIdProduct}
            />
          }
        />
        <Route
          path="category/:categoryId/product/:productId"
          element={
            <ProductDetail
              filteredCategory={filteredName}
              currentProduct={currentProduct}
              reviewContent={reviewContent}
              questionContent={questionContent}
            />
          }
        />
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
