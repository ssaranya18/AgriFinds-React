import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(savedCartProducts);
    }, []);

    const handleQuantityChange = (productId, delta) => {
        setCartProducts(prevCart =>
            prevCart.map(product =>
                product.id === productId
                    ? { ...product, quantity: Math.max(1, product.quantity + delta) }
                    : product
            )
        );
    };

    const handleRemoveFromCart = (productId) => {
        setCartProducts(prevCart => prevCart.filter(product => product.id !== productId));
    };

    const calculateTotalPrice = () => {
        return cartProducts.reduce((total, product) => {
            const price = parseFloat(product.price.replace('₹', ''));
            return total + price * product.quantity;
        }, 0).toFixed(2);
    };
    

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            {cartProducts.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartProducts.map(product => (
                        <div key={product.id} className="cart-item">
                            <img src={product.image} alt={product.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h4>{product.name}</h4>
                                <p>{product.variety}</p>
                                <p>Price: {product.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                                </div>
                                <button onClick={() => handleRemoveFromCart(product.id)} className="remove-button">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total Price: ₹{calculateTotalPrice()}</h3>
                        <Link to="/Checkout" className="checkout-button">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
