import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LikedProducts.css'; 
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
import bone from '../Assets/af6.jpg';
import blood from '../Assets/af7.webp';
import fish from '../Assets/af8.jpg';
import seaweed from '../Assets/af9.jpg';
import ammonium from '../Assets/af10.webp';
import calcium from '../Assets/af11.jpg';

const LikedProducts = () => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(savedLikedProducts);
    }, []);

    const handleRemove = (productId) => {
        const updatedLikedProducts = likedProducts.filter(id => id !== productId);
        setLikedProducts(updatedLikedProducts);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    };

    const products = [
        { id: 1, name: 'Corn Seeds', variety: 'Sweet Corn', description: 'High-yield sweet corn seeds for delicious corn crops.', price: '₹20.99', rating: 4.5, image: corn },
        { id: 2, name: 'Wheat Seeds', variety: 'Winter Wheat', description: 'Robust winter wheat seeds suitable for cold climates.', price: '₹15.49', rating: 4.2, image: wheat },
        { id: 3, name: 'Rice Seeds', variety: 'Basmati Rice', description: 'Premium basmati rice seeds for fragrant rice crops.', price: '₹18.75', rating: 4.7, image: rice },
        { id: 4, name: 'Soybean Seeds', variety: 'Edamame', description: 'High-quality edamame seeds for nutritious soybean crops.', price: '₹22.00', rating: 4.4, image: soyabean },
        { id: 5, name: 'Tomato Seeds', variety: 'Heirloom Tomato', description: 'Classic heirloom tomato seeds for flavorful tomato crops.', price: '₹12.99', rating: 4.8, image: tomato },
        { id: 6, name: 'Cucumber Seeds', variety: 'English Cucumber', description: 'Crisp English cucumber seeds for refreshing cucumber crops.', price: '₹14.50', rating: 4.6, image: cucumber },
        { id: 7, name: 'Sunflower Seeds', variety: 'Giant Sunflower', description: 'Giant sunflower seeds for stunning, tall sunflowers.', price: '₹10.00', rating: 4.3, image: sunflower },
        { id: 8, name: 'Carrot Seeds', variety: 'Nantes Carrot', description: 'Sweet and crisp Nantes carrot seeds for nutritious crops.', price: '₹11.00', rating: 4.5, image: carrot },
        { id: 9, name: 'Lettuce Seeds', variety: 'Butterhead Lettuce', description: 'Tender butterhead lettuce seeds for fresh salads.', price: '₹8.50', rating: 4.7, image: lettuce },
        { id: 10, name: 'Bell Pepper Seeds', variety: 'Sweet Bell Pepper', description: 'Vibrant sweet bell pepper seeds for colorful gardens.', price: '₹13.00', rating: 4.4, image: bellpepper },
        { id: 11, name: 'Pea Seeds', variety: 'Sugar Snap Pea', description: 'Crisp sugar snap pea seeds for tasty and healthy snacks.', price: '₹9.75', rating: 4.6, image: pea },
        { id: 12, name: 'Onion Seeds', variety: 'Red Onion', description: 'Flavorful red onion seeds for aromatic cooking.', price: '₹10.50', rating: 4.5, image: onion },
        

        { id: 21, name: 'Organic Fertilizer', variety: 'Compost Blend', description: 'Rich organic compost blend for healthy plant growth.', price: '₹30.00', rating: 4.8, image: organic },
        { id: 22, name: 'NPK Fertilizer', variety: '10-10-10 Formula', description: 'Balanced NPK formula for all-around plant nutrition.', price: '₹25.00', rating: 4.5, image: npk},
        { id: 23, name: 'Urea Fertilizer', variety: '46% Nitrogen', description: 'High-nitrogen urea fertilizer for rapid plant growth.', price: '₹20.00', rating: 4.3, image: urea },
        { id: 24, name: 'Phosphate Fertilizer', variety: 'Triple Superphosphate', description: 'Triple superphosphate for strong root development.', price: '₹27.50', rating: 4.6, image: phosphate },
        { id: 25, name: 'Potash Fertilizer', variety: 'Muriate of Potash', description: 'Muriate of potash for enhanced plant flowering.', price: '₹22.00', rating: 4.4, image: potash },
        { id: 26, name: 'Compost Fertilizer', variety: 'Organic Mix', description: 'Organic compost mix for environmentally friendly gardening.', price: '₹18.00', rating: 4.7, image: compost },
        { id: 27, name: 'Bone Meal Fertilizer', variety: 'Phosphorus Rich', description: 'Bone meal fertilizer for phosphorus-rich soil.', price: '₹21.00', rating: 4.5, image: bone },
        { id: 28, name: 'Blood Meal Fertilizer', variety: 'High Nitrogen', description: 'Blood meal fertilizer for nitrogen-hungry plants.', price: '₹23.00', rating: 4.6, image: blood },
        { id: 29, name: 'Fish Emulsion Fertilizer', variety: 'Natural Formula', description: 'Natural fish emulsion for organic plant feeding.', price: '₹19.50', rating: 4.4, image: fish },
        { id: 30, name: 'Seaweed Fertilizer', variety: 'Liquid Kelp', description: 'Liquid kelp fertilizer for vigorous plant growth.', price: '₹20.50', rating: 4.7, image: seaweed},
        { id: 31, name: 'Ammonium Sulfate Fertilizer', variety: '21% Nitrogen', description: 'Ammonium sulfate for quick nitrogen uptake.', price: '₹19.00', rating: 4.3, image: ammonium },
        { id: 32, name: 'Calcium Nitrate Fertilizer', variety: 'Calcium Rich', description: 'Calcium nitrate for strong cell wall development.', price: '₹22.50', rating: 4.5, image: calcium},
      


        ];

    const likedProductDetails = products.filter(product => likedProducts.includes(product.id));

    return (
        <div className="liked-products-container">
            <h2>Liked Products</h2>
            <div className="liked-products-grid">
                {likedProductDetails.map((product) => (
                    <div key={product.id} className="liked-product-card">
                        <img src={product.image} alt={product.name} className="liked-product-image" />
                        <div className="liked-product-info">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='likes'>
            {likedProductDetails.length === 0 && <p>No liked products found.</p>}
            </div>
        </div>
    );
};

export default LikedProducts;