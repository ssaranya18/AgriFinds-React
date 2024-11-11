import React from 'react';
import './GetStarted.css';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  window.scroll(0, 0);
  return (
    <div className="get-started-page">
      <header className="get-started-header">
        <h1>Get Started with AgriFinds</h1>
        <p>
          Welcome to AgriFinds, your partner in modern agriculture. We offer a comprehensive suite of tools and resources designed to boost
          productivity and sustainability in farming. From precision agriculture and smart irrigation to pest management and supply chain optimization, 
          our solutions help you make informed decisions.
           {/* With advanced weather forecasting and soil health monitoring, you can plan
          effectively and enhance your operations. Committed to innovation and sustainability, AgriFinds empowers you to achieve higher yields 
          while promoting eco-friendly practices. Join us in transforming agriculture for a better future. */}
        </p>
      </header>

      {/* Introduction Section */}
      {/* <section className="get-started-introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to AgriFinds, your partner in modern agriculture. We offer a comprehensive suite of tools and resources designed to boost
          productivity and sustainability in farming. From precision agriculture and smart irrigation to pest management and supply chain optimization, 
          our solutions help you make informed decisions. With advanced weather forecasting and soil health monitoring, you can plan
          effectively and enhance your operations. Committed to innovation and sustainability, AgriFinds empowers you to achieve higher yields 
          while promoting eco-friendly practices. Join us in transforming agriculture for a better future.
        </p>
      </section> */}

      {/* Resources Section */}
      <section className="get-started-resources">
        <h2>Resources</h2>
        <div className="resources-container">
          <Link to="/video-tutorials" className="resource-item">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-ios-app-maker-for-video-and-movies-with-background-icon-and-image_2910655.jpg" alt="Resource 1" />
            <h3>Video Tutorials</h3>
            <p>Watch comprehensive video tutorials to learn about AgriManage's features.</p>
          </Link>
          <Link to='/schemes' className="resource-item">
            <img src="https://t3.ftcdn.net/jpg/06/08/83/64/360_F_608836456_mHSejPSpYbKVdlNJR6JZebSygodG7awY.jpg" alt="Resource 2" />
            <h3>Knowledge Base</h3>
            <p>Access articles and guides that cover every aspect of agricultural management.</p>
          </Link>
          <Link to='/agri' className="resource-item">
            <img src="https://img.freepik.com/free-photo/business-brain-storming_53876-95301.jpg" alt="Resource 3" />
            <h3>Community Forums</h3>
            <p>Join discussions with other farmers and experts to exchange ideas and solutions.</p>
          </Link>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="get-started-guides">
        <h2>How to Get Started</h2>
        <ol className="guides-list">
          <li>
            <h3>Watch Video Tutorials</h3>
            <p>
              Begin by watching our comprehensive video tutorials to understand AgriFinds' features and benefits.
            </p>
          </li>
          <li>
            <h3>Explore the Knowledge Base</h3>
            <p>
              Dive into our knowledge base to learn more about agricultural management techniques, tools, and practices.
            </p>
          </li>
          <li>
            <h3>Join the Community Forums</h3>
            <p>
              Connect with other farmers and experts, share insights, and gain valuable advice through our community forums.
            </p>
          </li>
          <li>
            <h3>Create Your AgriFinds Account</h3>
            <p>
              Sign up for an account to access personalized tools, insights, and join a network of modern farmers.
            </p>
          </li>
        </ol>
      </section>

      

      {/* Call to Action Section */}
      {/* <section className="get-started-action">
        <h2>Ready to Take the Next Step?</h2>
        <p>Sign up for AgriFinds today and start revolutionizing your agricultural operations.</p>
        <Link to="/register">
          <button className="cta-button3">Sign Up Now</button>
        </Link>
      </section> */}
    </div>
  );
};

export default GetStarted;
