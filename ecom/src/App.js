import Header from "./Header.js";
import Menu from "./Menu.js";
import HomePage from "./HomePage.js";
import Photo from "../src/assets/photo.jpg";
import Category from "./components/Category/Category.js";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import { useState, useEffect, useMemo } from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail.js";

// import categories from './content/data.js';
import products from "./content/databetter.js";
// import PageNavigation from "./components/PageNavigation/PageNavigation.js";

const categoriesContent = {
  header: "Category menu",
  button: "More categories",
};

const bestSelling = [
  "Kitchen",
  "Meat and fish",
  "Special nutrition",
  "Pharmacy",
  "Baby",
  "Fruit and vegetables",
  "Drinks",
  "Me",
];

const farmerProducts = [
  "Carrots",
  "Tomatoes",
  "Potatoes",
  "Chicken",
  "Pork",
  "Fruit and vegetables",
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

// const allCategories = Object.keys(products);

function App() {

  const currentProducts = products["Fruit and vegetables"].slice(0,3);


  const allCategories = useMemo(() => {
    return ["All categories", ...Object.keys(products)];
  }, [products]);

  function countCategories(productdsArray) {
    const categories = { All: productdsArray.length };

    // Перебираем каждый объект в массиве продуктов
    productdsArray.forEach((product) => {
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

  const [pageName, setPageName] = useState("");

  const handleCategory = (item) => {
    if (item === "All categories") {
      const grabAll = [];
      allCategories.forEach((p) => {
        if ("All categories" !== p) {
          grabAll.push(...products[p]);
        }
      });
      setFilteredCategory(grabAll);
      setCountOfCategories(countCategories(grabAll));
      localStorage.setItem("filteredCategory", JSON.stringify(grabAll));
    }
    if (products.hasOwnProperty(item)) {
      const filteredCategory = allCategories.filter(
        (p) => p.toLowerCase() === item.toLowerCase()
      );
      setCountOfCategories(countCategories(products[filteredCategory]));
      setFilteredCategory(products[filteredCategory]);
      setPageName(products[filteredCategory]);
      localStorage.setItem(
        "filteredCategory",
        JSON.stringify(products[filteredCategory])
      );
    }
  };

  function searchProducts(searchTerm) {
    const searchResults = [];
    
    for (const category in products) {
      const categoryProducts = Object.values(products[category]);
      
      const filteredProducts = categoryProducts.filter((product) => {
        // Поиск по названию продукта или категории
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      
      searchResults.push(...filteredProducts);
    }
    
    setFilteredCategory(searchResults);
    localStorage.setItem("filteredCategory", JSON.stringify(searchResults));
  }

  const [filteredCategory, setFilteredCategory] = useState(
    JSON.parse(localStorage.getItem("filteredCategory")) || null
  );

  useEffect(() => {
    return () => localStorage.removeItem("filteredCategory");
  }, []);

  const [countOfCategories, setCountOfCategories] = useState(
    JSON.parse(localStorage.getItem("countOfCategories")) || 0
  );

  useEffect(() => {
    return () => localStorage.removeItem("countOfCategories");
  }, []);

  const [currentProduct, setCurrentProduct] = useState([]);

  const handleIdProduct = (name) => {
    setCurrentProduct(filteredCategory.filter((f) => f.name === name));
    
  };
  


useEffect(() => {
  handleCategory("All categories");
}, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };



  return (
    <div className="container">
      <Header
        handleCategory={handleCategory}
        searchProducts={searchProducts}
        allCategories={allCategories}
        basketCounter={basketCounter}
      />
      <Menu allCategories={allCategories} handleCategory={handleCategory} />

      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
            handleCategory={handleCategory}
            handleIdProduct={handleIdProduct}
              // pageName={pageName}
              allCategories={allCategories}
              currentProducts={currentProducts}
              bestSelling={bestSelling}
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
              productsCardList={filteredCategory}
              filteredCategory={filteredCategory}
              handleIdProduct={handleIdProduct}
            />
          }
        />
        <Route
          path="category?/:categoryId?/product/:productId"
          element={
            <ProductDetail
              filteredCategory={filteredCategory}
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
