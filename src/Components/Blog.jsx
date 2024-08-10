import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-content">
      <h2 className="section-title">News & Articles</h2>
      <div className="articles-grid">
        <div className="main-article">
          <img
            src="path-to-your-image.jpg"
            alt="Main Article"
            className="article-image"
          />
          <p className="article-category">MEALS — September 13, 2021</p>
          <h3 className="article-title">
            6 Reasons why Eating Organic is Better for you and Your Family
          </h3>
          <a href="/" className="learn-more">
            Learn More
          </a>
        </div>

        <div className="side-articles">
          <div className="article">
            <img
              src="path-to-your-image.jpg"
              alt="Article"
              className="side-article-image"
            />
            <p className="article-category">GARDENING — September 13, 2021</p>
            <h4 className="side-article-title">
              How to Start Your Own Organic Garden Right From Your Home
            </h4>
          </div>

          <div className="article">
            <img
              src="path-to-your-image.jpg"
              alt="Article"
              className="side-article-image"
            />
            <p className="article-category">MEALS — September 13, 2021</p>
            <h4 className="side-article-title">
              3 Delicious Recipes with Fruits and Vegetables for the Morning
            </h4>
          </div>

          <div className="article">
            <img
              src="path-to-your-image.jpg"
              alt="Article"
              className="side-article-image"
            />
            <p className="article-category">GARDENING — September 13, 2021</p>
            <h4 className="side-article-title">
              How to Level up Your Garden by Choosing the Right Seeds
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
