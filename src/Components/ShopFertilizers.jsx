import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline, IoHeart } from 'react-icons/io5';
import { RiShoppingCartFill } from "react-icons/ri";
import { TbHeart } from "react-icons/tb";
import './ShopFertilizers.css';
import axios from 'axios';


import organic from '../Assets/af1.avif';
import npk from '../Assets/af2.jpeg';
import urea from '../Assets/af3.webp';
import phosphate from '../Assets/af4.png';
import potash from '../Assets/af5.jpg';
import compost from '../Assets/af12.webp';
import bone from '../Assets/af6.jpg';
import blood from '../Assets/af7.webp';
import fish from '../Assets/af8.jpg';
import seaweed from '../Assets/af9.jpg';
import ammonium from '../Assets/af10.webp';
import calcium from '../Assets/af11.jpg';

const imageMap = {
    1: organic,
    2: npk,
    3: urea,
    4: phosphate,
    5: potash,
    6: compost,
    7: bone,
    8: blood,
    9: fish,
    10: seaweed,
    11: ammonium,
    12: calcium,
};

const ShopFertilizers = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(savedLikedProducts);
        
        const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(savedCartProducts);

        // Fetch fertilizers data from backend
        axios.get('http://localhost:8080/api/fertilizers')
            .then(response => {
                // Map image URLs to the data fetched from backend
                const productsWithImages = response.data.map(product => ({
                    ...product,
                    image: imageMap[product.id]
                }));
                setProducts(productsWithImages);
            })
            .catch(error => console.error('Error fetching fertilizers:', error));
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
