import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline, IoHeart } from 'react-icons/io5';
import { RiShoppingCartFill } from "react-icons/ri";
import { TbHeart } from "react-icons/tb";
import './ShopFertilizers.css';

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

const ShopFertilizers = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const products = [
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
//   { id: 33, name: 'Sulfur Fertilizer', variety: 'Elemental Sulfur', description: 'Elemental sulfur for soil acidity management.', price: 17.50, rating: 4.6, image: '/images/sulfur-fertilizer.jpg' },
//   { id: 34, name: 'Lime Fertilizer', variety: 'Dolomite Lime', description: 'Dolomite lime for pH balance and calcium boost.', price: 16.00, rating: 4.4, image: '/images/lime-fertilizer.jpg' },
//   { id: 35, name: 'Epsom Salt Fertilizer', variety: 'Magnesium Sulfate', description: 'Epsom salt for magnesium-deficient soils.', price: 18.50, rating: 4.5, image: '/images/epsom-salt-fertilizer.jpg' },
//   { id: 36, name: 'Kelp Meal Fertilizer', variety: 'Organic Kelp', description: 'Organic kelp meal for improved soil health.', price: 24.00, rating: 4.7, image: '/images/kelp-meal-fertilizer.jpg' },
//   { id: 37, name: 'Manure Fertilizer', variety: 'Aged Manure', description: 'Aged manure for rich organic matter and nutrients.', price: 15.00, rating: 4.3, image: '/images/manure-fertilizer.jpg' },
//   { id: 38, name: 'Humic Acid Fertilizer', variety: 'Liquid Concentrate', description: 'Humic acid for soil structure improvement.', price: 26.00, rating: 4.5, image: '/images/humic-acid-fertilizer.jpg' },
//   { id: 39, name: 'Fulvic Acid Fertilizer', variety: 'Soil Booster', description: 'Fulvic acid for enhanced nutrient uptake.', price: 25.50, rating: 4.6, image: '/images/fulvic-acid-fertilizer.jpg' },
//   { id: 40, name: 'Gypsum Fertilizer', variety: 'Calcium Sulfate', description: 'Gypsum for improved soil aeration and drainage.', price: 14.00, rating: 4.4, image: '/images/gypsum-fertilizer.jpg' },
];

    useEffect(() => {
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(savedLikedProducts);
        
        const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(savedCartProducts);
    }, []);

    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    const handleLikeToggle = (productId) => {
        setLikedProducts(prevLiked => 
            prevLiked.includes(productId) 
                ? prevLiked.filter(id => id !== productId) 
                : [...prevLiked, productId]
        );
    };

    const handleAddToCart = (product) => {
        setCartProducts(prevCart => {
            const existingProduct = prevCart.find(p => p.id === product.id);
            if (existingProduct) {
                return prevCart.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className="shop-component">
            <main className="main">
                <div className="center-paragraph">
                    <p style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        Fertilizer Products
                    </p>
                </div>
                <div className="top-icons">
                    <Link to="/Cart" className="icon-link">
                        <RiShoppingCartFill className="nav-icon" />
                        {cartProducts.length > 0 && (
                            <span className="notification-badge cart-badge">{cartProducts.length}</span>
                        )}
                    </Link>
                    <Link to="/LikedProducts" className="icon-link">
                        <TbHeart className="nav-icon" />
                        {likedProducts.length > 0 && (
                            <span className="notification-badge liked-badge">{likedProducts.length}</span>
                        )}
                    </Link>
                </div>

                <div className="bd-grid">
                    {products.map((product) => (
                        <article key={product.id} className="shop-card">
                            <div className="shop-card__img">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="shop-card__name">
                                <p>{product.name}</p>
                            </div>
                            <div className="shop-card__description">
                                <p>{product.description}</p>
                            </div>
                            <div className="shop-card__precis">
                                <a
                                    href="#"
                                    className="shop-card__icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLikeToggle(product.id);
                                    }}
                                >
                                    {likedProducts.includes(product.id) ? (
                                        <IoHeart style={{ color: "darkgreen" }} />
                                    ) : (
                                        <IoHeartOutline />
                                    )}
                                </a>
                                <div>
                                    <span className="shop-card_preci shop-card_preci--before">{product.priceBefore}</span>
                                    <span className="shop-card_preci shop-card_preci--now">{product.price}</span>
                                </div>
                                <a
                                    href="#"
                                    className="shop-card__icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(product);
                                    }}
                                >
                                    <IoCartOutline />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ShopFertilizers;
