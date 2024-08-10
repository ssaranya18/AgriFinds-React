// src/Components/Seeds.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Seeds.css';
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

const Seeds = () => {
  return (
    <div className="products-page">
      <h1>Seeds</h1>
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
  );
};

export default Seeds;
