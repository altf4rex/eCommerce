import React from 'react'
import CategoryProductsCard from '../CategoryProductsCard/CategoryProductsCard'
import RaitingFive from '../../assets/rating-4-black.svg'

const productsCardList = [
  {name: "mango", description: "Space for a small product description", rating: RaitingFive, discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", delivery: "Europe", stock: "320 pcs"}, 
  {name: "mango1", description: "Space for a small product description", rating: RaitingFive, discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", delivery: "Europe", stock: "320 pcs"}, 
  {name: "mango2", description: "Space for a small product description", rating: RaitingFive, discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", delivery: "Europe", stock: "320 pcs"}, 
  {name: "mango3", description: "Space for a small product description", rating: RaitingFive, discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", delivery: "Europe", stock: "320 pcs"}, 
  {name: "mango4", description: "Space for a small product description", rating: RaitingFive, discountPrice: "36.99USD", price: "48.56USD", src:"https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg", fresheness: "New (Extra fresh)", farm: "Grocery Tarm Fields", delivery: "Europe", stock: "320 pcs"}, 
]

const CategoryProducts = () => {
  
  return (
    <div>
      <CategoryProductsCard productsCardList={productsCardList}/>
    </div>
  )
}

export default CategoryProducts