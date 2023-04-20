import Header from './Header.js'
import Menu from './Menu.js'
import HomePage from './HomePage.js'

const categories = [
  {name: "Bakery"}, 
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

const productsContent = {
  header: "Best selling products",
  button: "More products"
}

const productsCard = [
  {name: "mango", description: "wai wai", price: "1$", src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg"}, 
  {name: "mango2", description: "wai wai", price: "1$", src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg"}, 
  {name: "mango3", description: "wai wai", price: "1$", src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg"}, 
]

const basketCounter = 4;

function App() {
  return (
    <div className="container">
      <Header 
       categories={categories} 
       basketCounter={basketCounter}
      />
      <Menu categories={categories}/>
      <HomePage 
      categories={categories}
      products={products}
      categoriesContent={categoriesContent}
      productsContent={productsContent}
      productsCard={productsCard}
       />
      {/* 
      <Category /> 
      <Detail />
      <Checkout />
      <Blog /> 
      <BlogDetail />
      <Footer /> */}
    </div>
  );
}

export default App;
