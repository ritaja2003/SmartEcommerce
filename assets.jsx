// src/assets/assets.jsx

import logo from './logo.png';

// Saree Images
import saree1 from './saree1.jpg';
import saree2 from './saree2.jpg';
import saree3 from './saree3.jpg';
import saree4 from './saree4.jpg';
import saree5 from './saree5.jpg';
import saree6 from './saree6.jpg';
import saree7 from './saree7.jpg';
import saree8 from './saree8.jpg';
import saree9 from './saree9.jpg';
import saree10 from './saree10.jpg';

// Jewellery Images
import jewel1 from './jewellery1.jpg';
import jewel2 from './jewellery2.jpg';
import jewel3 from './jewellery3.jpg';
import jewel4 from './jewellery4.jpg';
import jewel5 from './jewellery5.jpg';
import jewel6 from './jewellery6.jpg';
import jewel7 from './jewellery7.jpg';
import jewel8 from './jewellery8.jpg';
import jewel9 from './jewellery9.jpg';
import jewel10 from './jewellery10.jpg';

const getTimestamp = () => Date.now();

// Sample description
const defaultDescription = "Beautifully crafted, perfect for every occasion.";

// Product data
export const products = [
  {
    _id: "s1",
    name: "Elegant light Golden Saree",
    description: defaultDescription,
    price: 2499,
    image: saree1,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s2",
    name: "Dark Gold saree ",
    description: defaultDescription,
    price: 2999,
    image: saree2,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: false,
  },
  // ...add saree3 to saree10 similarly with unique _id and image...
  {
    _id: "s3",
    name: "White Diamond Studded Saree",
    description: defaultDescription,
    price: 2999,
    image: saree3,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s4",
    name: "Pink Saree",
    description: defaultDescription,
    price: 2999,
    image: saree4,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s6",
    name: "Blue Saree",
    description: defaultDescription,
    price: 2999,
    image: saree4,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s7",
    name: "Dark Pink Saree",
    description: defaultDescription,
    price: 2999,
    image: saree4,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s8",
    name: "Green Saree",
    description: defaultDescription,
    price: 2999,
    image: saree4,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s9",
    name: "Dark Blue Saree",
    description: defaultDescription,
    price: 2999,
    image: saree4,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "s10",
    name: "Light Green Saree",
    description: defaultDescription,
    price: 2999,
    image: saree4,
    category: "Women",
    subCategory: "Saree",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: getTimestamp(),
    bestseller: true,
  },
   
   
   
  {
    _id: "j1",
    name: "Jwellery1",
    description: defaultDescription,
    price: 1499,
    image: jewellery1,
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "j2",
    name: "Jwellery2",
    description: defaultDescription,
    price: 799,
    image: jewellery2,
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: false,
  },
  {
    _id: "j3",
    name: "Jwellery3",
    description: defaultDescription,
    price: 1499,
    image: jewellery3,
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },
  {
    _id: "j4",
    name: "Jwellery4",
    description: defaultDescription,
    price: 1499,
    image: jewellery4, 
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  }, 
  {
    _id: "j5",
    name: "Jwellery5",
    description: defaultDescription,
    price: 1499,
    image: jewellery5, 
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  }, 
  {
    _id: "j6",
    name: "Jwellery6",
    description: defaultDescription,
    price: 1499,
    image: jewellery6,  
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },  
  {
    _id: "j7",
    name: "Jwellery7",
    description: defaultDescription,
    price: 1499,
    image: jewellery7, 
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },  
  {
    _id: "j8",
    name: "Jwellery8",
    description: defaultDescription,
    price: 1499,
    image: jewellery8, 
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },  
  {
    _id: "j9",
    name: "Jwellery9",
    description: defaultDescription,
    price: 1499,
    image: jewellery9, 
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },   
  {
    _id: "j10",
    name: "Jwellery10",
    description: defaultDescription,
    price: 1499,
    image: jewellery10, 
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["Standard"],
    date: getTimestamp(),
    bestseller: true,
  },    
  
];

// Logo export
export const brandLogo = logo;
