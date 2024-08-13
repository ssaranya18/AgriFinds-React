import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline, IoHeart } from 'react-icons/io5';
import { RiShoppingCartFill } from "react-icons/ri";
import { TbHeart } from "react-icons/tb";
import './Shop.css';

// Import images
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

// Create a mapping of product IDs to image imports
const imageMapping = {
    1: corn,
    2: wheat,
    3: rice,
    4: soyabean,
    5: tomato,
    6: cucumber,
    7: sunflower,
    8: carrot,
    9: lettuce,
    10: bellpepper,
    11: pea,
    12: onion,
    13: garlic,
    14: pumpkin,
    15: watermelon,
    16: spinach,
    17: radish,
    18: broccoli,
    19: cauliflower,
    20: beetroot,
};
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    // Fetch products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to fetch the products from the backend
    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
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
                        Seeds Products
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
                                <img src={imageMapping[product.id]} alt={product.name} />
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

export default Shop;
