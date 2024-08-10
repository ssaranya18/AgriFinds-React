import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import corn from '../Assets/a4.jpg';
import wheat from '../Assets/a5.jpg';
import rice from '../Assets/a6.jpg';
import soyabean from '../Assets/a8.webp';
import tomato from '../Assets/a11.jpg';
import cucumber from '../Assets/a10.png';
import sunflower from '../Assets/a12.jpg';
import carrot from '../Assets/a13.webp';
import lettuce from '../Assets/a14.jpg';
import bellpepper from '../Assets/a15.jpg';
import pea from '../Assets/a16.jpg';
import onion from '../Assets/a17.jpg';
import garlic from '../Assets/a18.webp';
import pumpkin from '../Assets/a19.jpg';
import watermelon from '../Assets/a20.webp';
import spinach from '../Assets/a21.avif';
import radish from '../Assets/a22.avif';
import broccoli from '../Assets/a23.jpg';
import cauliflower from '../Assets/a24.webp';
import beetroot from '../Assets/a25.webp';

import organic from '../Assets/af1.avif';
import npk from '../Assets/af2.jpeg';
import urea from '../Assets/af3.webp';
import phosphate from '../Assets/af4.png';
import potash from '../Assets/af5.jpg';
import compost from '../Assets/af5.jpg';


const seeds = [
  { id: 1, name: 'Corn Seeds', variety: 'Sweet Corn', description: 'High-yield sweet corn seeds for delicious corn crops.', price: 20.99, rating: 4.5, image: corn },
  { id: 2, name: 'Wheat Seeds', variety: 'Winter Wheat', description: 'Robust winter wheat seeds suitable for cold climates.', price: 15.49, rating: 4.2, image: wheat },
  { id: 3, name: 'Rice Seeds', variety: 'Basmati Rice', description: 'Premium basmati rice seeds for fragrant rice crops.', price: 18.75, rating: 4.7, image: rice },
  { id: 4, name: 'Soybean Seeds', variety: 'Edamame', description: 'High-quality edamame seeds for nutritious soybean crops.', price: 22.00, rating: 4.4, image: soyabean },
  { id: 5, name: 'Tomato Seeds', variety: 'Heirloom Tomato', description: 'Classic heirloom tomato seeds for flavorful tomato crops.', price: 12.99, rating: 4.8, image: tomato },
  { id: 6, name: 'Cucumber Seeds', variety: 'English Cucumber', description: 'Crisp English cucumber seeds for refreshing cucumber crops.', price: 14.50, rating: 4.6, image: cucumber },
  { id: 7, name: 'Sunflower Seeds', variety: 'Giant Sunflower', description: 'Giant sunflower seeds for stunning, tall sunflowers.', price: 10.00, rating: 4.3, image: sunflower },
  { id: 8, name: 'Carrot Seeds', variety: 'Nantes Carrot', description: 'Sweet and crisp Nantes carrot seeds for nutritious crops.', price: 11.00, rating: 4.5, image: carrot },
  { id: 9, name: 'Lettuce Seeds', variety: 'Butterhead Lettuce', description: 'Tender butterhead lettuce seeds for fresh salads.', price: 8.50, rating: 4.7, image: lettuce },
  { id: 10, name: 'Bell Pepper Seeds', variety: 'Sweet Bell Pepper', description: 'Vibrant sweet bell pepper seeds for colorful gardens.', price: 13.00, rating: 4.4, image: bellpepper },
  { id: 11, name: 'Pea Seeds', variety: 'Sugar Snap Pea', description: 'Crisp sugar snap pea seeds for tasty and healthy snacks.', price: 9.75, rating: 4.6, image: pea },
  { id: 12, name: 'Onion Seeds', variety: 'Red Onion', description: 'Flavorful red onion seeds for aromatic cooking.', price: 10.50, rating: 4.5, image: onion },
  { id: 13, name: 'Garlic Seeds', variety: 'Hardneck Garlic', description: 'Robust hardneck garlic seeds for pungent flavor.', price: 14.00, rating: 4.7, image: garlic},
  { id: 14, name: 'Pumpkin Seeds', variety: 'Jack O Lantern', description: 'Jack O Lantern pumpkin seeds for festive decorations.', price: 15.00, rating: 4.8, image: pumpkin },
  { id: 15, name: 'Watermelon Seeds', variety: 'Sugar Baby', description: 'Sweet Sugar Baby watermelon seeds for juicy fruits.', price: 13.00, rating: 4.6, image: watermelon },
  { id: 16, name: 'Spinach Seeds', variety: 'Bloomsdale', description: 'Nutritious Bloomsdale spinach seeds for healthy leaves.', price: 9.50, rating: 4.5, image: spinach },
  { id: 17, name: 'Radish Seeds', variety: 'Cherry Belle', description: 'Crisp Cherry Belle radish seeds for quick-growing roots.', price: 8.00, rating: 4.4, image: radish },
  { id: 18, name: 'Broccoli Seeds', variety: 'Calabrese', description: 'Healthy Calabrese broccoli seeds for tasty florets.', price: 12.00, rating: 4.6, image: broccoli },
  { id: 19, name: 'Cauliflower Seeds', variety: 'Snowball', description: 'Smooth Snowball cauliflower seeds for creamy heads.', price: 11.50, rating: 4.5, image: cauliflower },
  { id: 20, name: 'Beetroot Seeds', variety: 'Detroit Dark Red', description: 'Rich Detroit Dark Red beetroot seeds for vivid color.', price: 10.00, rating: 4.7, image: beetroot },
];

const fertilizers = [
  { id: 21, name: 'Organic Fertilizer', variety: 'Compost Blend', description: 'Rich organic compost blend for healthy plant growth.', price: 30.00, rating: 4.8, image: organic },
  { id: 22, name: 'NPK Fertilizer', variety: '10-10-10 Formula', description: 'Balanced NPK formula for all-around plant nutrition.', price: 25.00, rating: 4.5, image: npk},
  { id: 23, name: 'Urea Fertilizer', variety: '46% Nitrogen', description: 'High-nitrogen urea fertilizer for rapid plant growth.', price: 20.00, rating: 4.3, image: urea },
  { id: 24, name: 'Phosphate Fertilizer', variety: 'Triple Superphosphate', description: 'Triple superphosphate for strong root development.', price: 27.50, rating: 4.6, image: phosphate },
  { id: 25, name: 'Potash Fertilizer', variety: 'Muriate of Potash', description: 'Muriate of potash for enhanced plant flowering.', price: 22.00, rating: 4.4, image: potash },
  { id: 26, name: 'Compost Fertilizer', variety: 'Organic Mix', description: 'Organic compost mix for environmentally friendly gardening.', price: 18.00, rating: 4.7, image: compost },
  { id: 27, name: 'Bone Meal Fertilizer', variety: 'Phosphorus Rich', description: 'Bone meal fertilizer for phosphorus-rich soil.', price: 21.00, rating: 4.5, image: '/images/bone-meal-fertilizer.jpg' },
  { id: 28, name: 'Blood Meal Fertilizer', variety: 'High Nitrogen', description: 'Blood meal fertilizer for nitrogen-hungry plants.', price: 23.00, rating: 4.6, image: '/images/blood-meal-fertilizer.jpg' },
  { id: 29, name: 'Fish Emulsion Fertilizer', variety: 'Natural Formula', description: 'Natural fish emulsion for organic plant feeding.', price: 19.50, rating: 4.4, image: '/images/fish-emulsion-fertilizer.jpg' },
  { id: 30, name: 'Seaweed Fertilizer', variety: 'Liquid Kelp', description: 'Liquid kelp fertilizer for vigorous plant growth.', price: 20.50, rating: 4.7, image: '/images/seaweed-fertilizer.jpg' },
  { id: 31, name: 'Ammonium Sulfate Fertilizer', variety: '21% Nitrogen', description: 'Ammonium sulfate for quick nitrogen uptake.', price: 19.00, rating: 4.3, image: '/images/ammonium-sulfate-fertilizer.jpg' },
  { id: 32, name: 'Calcium Nitrate Fertilizer', variety: 'Calcium Rich', description: 'Calcium nitrate for strong cell wall development.', price: 22.50, rating: 4.5, image: '/images/calcium-nitrate-fertilizer.jpg' },
  { id: 33, name: 'Sulfur Fertilizer', variety: 'Elemental Sulfur', description: 'Elemental sulfur for soil acidity management.', price: 17.50, rating: 4.6, image: '/images/sulfur-fertilizer.jpg' },
  { id: 34, name: 'Lime Fertilizer', variety: 'Dolomite Lime', description: 'Dolomite lime for pH balance and calcium boost.', price: 16.00, rating: 4.4, image: '/images/lime-fertilizer.jpg' },
  { id: 35, name: 'Epsom Salt Fertilizer', variety: 'Magnesium Sulfate', description: 'Epsom salt for magnesium-deficient soils.', price: 18.50, rating: 4.5, image: '/images/epsom-salt-fertilizer.jpg' },
  { id: 36, name: 'Kelp Meal Fertilizer', variety: 'Organic Kelp', description: 'Organic kelp meal for improved soil health.', price: 24.00, rating: 4.7, image: '/images/kelp-meal-fertilizer.jpg' },
  { id: 37, name: 'Manure Fertilizer', variety: 'Aged Manure', description: 'Aged manure for rich organic matter and nutrients.', price: 15.00, rating: 4.3, image: '/images/manure-fertilizer.jpg' },
  { id: 38, name: 'Humic Acid Fertilizer', variety: 'Liquid Concentrate', description: 'Humic acid for soil structure improvement.', price: 26.00, rating: 4.5, image: '/images/humic-acid-fertilizer.jpg' },
  { id: 39, name: 'Fulvic Acid Fertilizer', variety: 'Soil Booster', description: 'Fulvic acid for enhanced nutrient uptake.', price: 25.50, rating: 4.6, image: '/images/fulvic-acid-fertilizer.jpg' },
  { id: 40, name: 'Gypsum Fertilizer', variety: 'Calcium Sulfate', description: 'Gypsum for improved soil aeration and drainage.', price: 14.00, rating: 4.4, image: '/images/gypsum-fertilizer.jpg' },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="product-section">
        <h2>Seeds</h2>
        <div className="product-grid">
          {seeds.map((seed) => (
            <div key={seed.id} className="product-card">
              <img src={seed.image} alt={seed.name} className="product-image" />
              <h3>{seed.name}</h3>
              <p>{seed.variety}</p>
              <p>{seed.description}</p>
              <p>Price: ${seed.price}</p>
              <p>Rating: {seed.rating} ⭐</p>
              <Link to={`/seeds/${seed.id}`}>
                <button className="buy-now-button">Buy Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="product-section">
        <h2>Fertilizers</h2>
        <div className="product-grid">
          {fertilizers.map((fertilizer) => (
            <div key={fertilizer.id} className="product-card">
              <img src={fertilizer.image} alt={fertilizer.name} className="product-image" />
              <h3>{fertilizer.name}</h3>
              <p>{fertilizer.variety}</p>
              <p>{fertilizer.description}</p>
              <p>Price: ${fertilizer.price}</p>
              <p>Rating: {fertilizer.rating} ⭐</p>
              <Link to={`/payment/${fertilizer.id}`}>
                <button className="buy-now-button">Buy Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
