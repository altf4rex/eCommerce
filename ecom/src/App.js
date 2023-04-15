import Header from './Header.js'
import Menu from './Menu.js'

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
const basketCounter = 4;
function App() {
  return (
    <div className="container">
      <Header 
       categories={categories} 
       basketCounter={basketCounter}
      />
      <Menu categories={categories}/>
      {/* 
      <HomePage />
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
