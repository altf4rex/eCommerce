import RaitingFive from "../assets/rating-4-black.svg";
import { v4 as uuidv4 } from 'uuid';
const products = 
    {
        "Bakery": [
            {
                name: "notmango",
                brand: "SmT",
                id: uuidv4(), 
                description: "Space for a small product description",
                rating: RaitingFive,
                ratingId: "rating-5",
                reviewCount: "1",
                fullDescription:
                  "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
                discountPrice: 36.99,
                price: "48.56USD",
                src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
                fresheness: "New (Extra fresh)",
                farm: "Grocery Tarm Fields",
                deliveryArea: "Europe",
                stock: "320 pcs",
                sku: "76645",
                category: "Bakery",
                buyBy: ["pcs", "kgs", "box", "pack"],
                delivery: "2",
                origins:
                  "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
                recipe:
                  "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
                vitamins: [
                  {
                    name: "Vitamin A equiv",
                    quantity:  "735 μg",
                    dv: "104 %"
                  },
                  {
                    name: "Thiamine (B1)",
                    quantity:  "0.066 mg",
                    dv: "6 %"
                  },
                  {
                    name: "Niacin (B3)",
                    quantity:  "0.983 mg",
                    dv: "7 %"
                  },
                  {
                    name: "Folate (Bg)",
                    quantity:  "19 μg",
                    dv: "5 %"
                  }
                ]
              },
            {
                name: "notmango1",
                brand: "HiH",
                description: "Space for a small product description",
                rating: RaitingFive,
              ratingId: "rating-5",
              id: uuidv4(), 
                reviewCount: "1",
                fullDescription:
                  "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
                  discountPrice: 36.99,
                price: "48.56USD",
                src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
                fresheness: "New (Extra fresh)",
                farm: "Grocery Tarm Fields",
                deliveryArea: "Europe",
                stock: "320 pcs",
                sku: "76645",
                category: "Bakery",
                buyBy: ["pcs", "kgs", "box", "pack"],
                delivery: "2",
                origins:
                  "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
                recipe:
                  "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
                vitamins: [
                  {
                    name: "Vitamin A equiv",
                    quantity:  "735 μg",
                    dv: "104 %"
                  },
                  {
                    name: "Thiamine (B1)",
                    quantity:  "0.066 mg",
                    dv: "6 %"
                  },
                  {
                    name: "Niacin (B3)",
                    quantity:  "0.983 mg",
                    dv: "7 %"
                  },
                  {
                    name: "Folate (Bg)",
                    quantity:  "19 μg",
                    dv: "5 %"
                  }
                ]
              },
          ],
        "Fruit and vegetables": [
            {
            name: "Mango",
            brand: "HiH",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-4",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 36.99,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Fruit",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
              vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }, 
              {
                name: "Vitamin C",
                quantity:  "5.9 mg",
                dv: "7 %"
              },
              {
                name: "Vitamin E",
                quantity:  "0.66 mg",
                dv: "4 %"
              },
              {
                name: "Vitamin K",
                quantity:  "13.2",
                dv: "13 %"
              }
            ]
          },
          {
            name: "Mango1",
            brand: "HiH",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-5",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 32.99,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Fruit",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
            vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }
            ]
          },
          {
            name: "Mango2",
            brand: "TnT",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-5",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 30.99,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Fruit",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
            vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }
            ]
            
            
          },
          {
            name: "Mango3",
            brand: "Brand",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-5",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 60,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Fruit",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
            vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }
            ]
          },
          {
            name: "Mango4",
            brand: "Brand",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-5",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 6,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Fruit",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
            vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }
            ]
          },
          {
            name: "NotMango5",
            brand: "Hmmm",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-5",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 36.99,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Vegetables",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
            vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }
            ]
          },
          {
            name: "NotMango6",
            brand: "OtherHmmmm",
            description: "Space for a small product description",
            rating: RaitingFive,
            ratingId: "rating-4",
            id: uuidv4(), 
            reviewCount: "1",
            fullDescription:
              "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
            discountPrice: 30,
            price: "48.56USD",
            src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
            fresheness: "New (Extra fresh)",
            farm: "Grocery Tarm Fields",
            deliveryArea: "Europe",
            stock: "320 pcs",
            sku: "76645",
            category: "Vegetables",
            buyBy: ["pcs", "kgs", "box", "pack"],
            delivery: "2",
            origins:
              "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
            recipe:
              "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
            vitamins: [
              {
                name: "Vitamin A equiv",
                quantity:  "735 μg",
                dv: "104 %"
              },
              {
                name: "Thiamine (B1)",
                quantity:  "0.066 mg",
                dv: "6 %"
              },
              {
                name: "Niacin (B3)",
                quantity:  "0.983 mg",
                dv: "7 %"
              },
              {
                name: "Folate (Bg)",
                quantity:  "19 μg",
                dv: "5 %"
              }
            ]
          }
        ],
        "Meat and fish": [
            {
                name: "Meat",
                brand: "OtherHmmmm",
                description: "Space for a small product description",
                rating: RaitingFive,
              
                ratingId: "rating-5",
                id: uuidv4(), 
                reviewCount: "1",
                fullDescription:
                  "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
                discountPrice: 36.99,
                price: "48.56USD",
                src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
                fresheness: "New (Extra fresh)",
                farm: "Grocery Tarm Fields",
                deliveryArea: "Europe",
                stock: "320 pcs",
                sku: "76645",
                category: "Meat",
                buyBy: ["pcs", "kgs", "box", "pack"],
                delivery: "2",
                origins:
                  "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
                recipe:
                  "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
                vitamins: [
                  {
                    name: "Vitamin A equiv",
                    quantity:  "735 μg",
                    dv: "104 %"
                  },
                  {
                    name: "Thiamine (B1)",
                    quantity:  "0.066 mg",
                    dv: "6 %"
                  },
                  {
                    name: "Niacin (B3)",
                    quantity:  "0.983 mg",
                    dv: "7 %"
                  },
                  {
                    name: "Folate (Bg)",
                    quantity:  "19 μg",
                    dv: "5 %"
                  }
                ]
              },
            {
                name: "Fish",
                brand: "OtherHmmmm",
                description: "Space for a small product description",
                rating: RaitingFive,
              ratingId: "rating-3",
              id: uuidv4(), 
                reviewCount: "1",
                fullDescription:
                  "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
                discountPrice: 36.99,
                price: "48.56USD",
                src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
                fresheness: "New (Extra fresh)",
                farm: "Grocery Tarm Fields",
                deliveryArea: "Europe",
                stock: "320 pcs",
                sku: "76645",
                category: "Fish",
                buyBy: ["pcs", "kgs", "box", "pack"],
                delivery: "2",
                origins:
                  "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
                recipe:
                  "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
                vitamins: [
                  {
                    name: "Vitamin A equiv",
                    quantity:  "735 μg",
                    dv: "104 %"
                  },
                  {
                    name: "Thiamine (B1)",
                    quantity:  "0.066 mg",
                    dv: "6 %"
                  },
                  {
                    name: "Niacin (B3)",
                    quantity:  "0.983 mg",
                    dv: "7 %"
                  },
                  {
                    name: "Folate (Bg)",
                    quantity:  "19 μg",
                    dv: "5 %"
                  }
                ]
              },
          ],
        "Drinks": [
            {
                name: "Drink",
                brand: "CoraRora",
                description: "Space for a small product description",
                rating: RaitingFive,
              
                ratingId: "rating-5",
                id: uuidv4(), 
                reviewCount: "1",
                fullDescription:
                  "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
                discountPrice: 36.99,
                price: "48.56USD",
                src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
                fresheness: "New (Extra fresh)",
                farm: "Grocery Tarm Fields",
                deliveryArea: "Europe",
                stock: "320 pcs",
                sku: "76645",
                category: "Drinks",
                buyBy: ["pcs", "kgs", "box", "pack"],
                delivery: "2",
                origins:
                  "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
                recipe:
                  "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
                vitamins: [
                  {
                    name: "Vitamin A equiv",
                    quantity:  "735 μg",
                    dv: "104 %"
                  },
                  {
                    name: "Thiamine (B1)",
                    quantity:  "0.066 mg",
                    dv: "6 %"
                  },
                  {
                    name: "Niacin (B3)",
                    quantity:  "0.983 mg",
                    dv: "7 %"
                  },
                  {
                    name: "Folate (Bg)",
                    quantity:  "19 μg",
                    dv: "5 %"
                  }
                ]
              },
            {
                name: "Dr",
                brand: "CoraRora",
                description: "Space for a small product description",
                rating: RaitingFive,
              ratingId: "rating-5",
              id: uuidv4(), 
                reviewCount: "1",
                fullDescription:
                  "Mango from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s mango are growing on the fields naturally.",
                discountPrice: "36.99USD",
                price: "48.56USD",
                src: "https://frutco.ch/wp-content/uploads/2020/05/3-4_Mango_Content-986x1024.jpg",
                fresheness: "New (Extra fresh)",
                farm: "Grocery Tarm Fields",
                deliveryArea: "Europe",
                stock: "320 pcs",
                sku: "76645",
                category: "Drinks",
                buyBy: ["pcs", "kgs", "box", "pack"],
                delivery: "2",
                origins:
                  "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
                recipe:
                  "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
                vitamins: [
                  {
                    name: "Vitamin A equiv",
                    quantity:  "735 μg",
                    dv: "104 %"
                  },
                  {
                    name: "Thiamine (B1)",
                    quantity:  "0.066 mg",
                    dv: "6 %"
                  },
                  {
                    name: "Niacin (B3)",
                    quantity:  "0.983 mg",
                    dv: "7 %"
                  },
                  {
                    name: "Folate (Bg)",
                    quantity:  "19 μg",
                    dv: "5 %"
                  }
                ]
              },
          ],
        "Kitchen": "",
        "Special nutrition": "",
        "Baby": "",
        "Pharmacy": "",
    }
;



export default products;