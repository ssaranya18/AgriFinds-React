import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./OrganicFarm.css"; // Assuming CSS is stored in this file

const OrganicFarmSection = () => {
  const imagesRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (imagesRef.current) {
      observer.observe(imagesRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (imagesRef.current) {
        observer.unobserve(imagesRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="organic-farm">
      <div className="container">
        <div
          className={`images-container ${isVisible ? "visible" : ""}`}
          ref={imagesRef}
        >
          <img
            src="https://media.istockphoto.com/id/1501984364/photo/farmer-examining-sunflower-seedlings-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=beQTiO8fLRU5N2XcV6tWverR0NfDYoHdjpoFbc1Hkco="
            alt="Farmer"
            className="farm-image"
          />
          <img
            src="https://t3.ftcdn.net/jpg/02/71/63/24/360_F_271632489_iZexHnP4LtGvDD39QvklpgrgdMeGj7PH.jpg"
            alt="Tomatoes"
            className="produce-image"
          />
          <img
            src="https://img.freepik.com/free-photo/farmers-are-working-chinese-cabbage-farm_1150-7108.jpg"
            alt="farm"
            className="farmer-image"
          />
        </div>
        <div
          className={`text-container ${isVisible ? "visible" : ""}`}
          ref={textRef}
        >
          <h4 className="section-title">ABOUT US</h4>
          <h2>An organic farm with a big mission behind</h2>
          <p>
            At AgriFinds, our mission is to cultivate fresh, organic produce
            while supporting our local community. We are committed to
            sustainable farming practices that ensure the health and well-being
            of our customers and the planet.
          </p>
          <ul className="features-list">
            <li>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              100% Organic Products
            </li>
            <li>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              Cruelty Free
            </li>
            <li>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              Support Local Community
            </li>
          </ul>
          <Link to="/about" className="learn-more-button">
            Learn More <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrganicFarmSection;
