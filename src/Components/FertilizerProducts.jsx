import React from 'react';
import { Link } from 'react-router-dom';
import './FertilizerProducts.css';
import organic from '../Assets/af1.avif';
import npk from '../Assets/af2.jpeg';
import urea from '../Assets/af3.webp';
import phosphate from '../Assets/af4.png';
import potash from '../Assets/af5.jpg';
import compost from '../Assets/af5.jpg';
import Fertilizer from './Fertilizer';

const fertilizers = [
  { id: 21, name: 'Organic Fertilizer', variety: 'Compost Blend', description: 'Rich organic compost blend for healthy plant growth.', price: 30.00, rating: 4.8, image: organic },
  { id: 22, name: 'NPK Fertilizer', variety: '10-10-10 Formula', description: 'Balanced NPK formula for all-around plant nutrition.', price: 25.00, rating: 4.5, image: npk },
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

const FertilizersProducts = () => {
  return (
    <div>
      <Fertilizer/>
    <div className="products-page">
      <h1>Fertilizers</h1>

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

export default FertilizersProducts;
