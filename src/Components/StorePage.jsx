import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./StorePage.css"; 

const StorePage = () => {
  const containerRef = useRef(null);
  const productsRef = useRef(null);
  const exploreRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const elements = [
      containerRef.current,
      productsRef.current,
      exploreRef.current,
      buttonsRef.current
    ];

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className="store-container" ref={containerRef}>
      <div className="products-section" ref={productsRef}>
        <div className="text-content">
          <h2>Our Products</h2>
          <p>
            Discover a curated selection of high-quality agricultural products designed to meet your farming and gardening needs. From fresh organic
            produce to premium seeds and fertilizers, we ensure the best for your farm. Explore our range
            of eco-friendly and sustainable products. Elevate your harvest with solutions that work for you.
          </p>
          <div className="explorecontent" ref={exploreRef}>
            <h2>EXPLORE OUR PRODUCTS</h2>
            <div className="button-group" ref={buttonsRef}>
              <Link to="/shop">
                <button className="ebut">Seeds</button>
              </Link>
              <Link to="/fertilizerproducts">
                <button className="ebut">Fertilizers</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="image-content">
          <img
            src="https://www.euractiv.com/wp-content/uploads/sites/2/2020/05/shutterstock_126744209.jpg"
            alt="Organic Fruits"
          />
        </div>
      </div>
    </div>
  );
};

export default StorePage;
