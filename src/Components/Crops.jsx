import React, { useState } from 'react';
import './Crops.css';
import { Link } from 'react-router-dom';

const cropData = [
  {
    name: 'Wheat',
    image: 'https://img.freepik.com/premium-photo/wheat-background-hd-wallpaper-photographic-image_993236-3015.jpg',
    description: 'Wheat is a global staple crop. Master soil prep, irrigation, and pest management for a plentiful harvest.',
    growthDuration: '120-150 days',
    fertilizers: 'Nitrogen, Phosphorus, Potassium',
    soilType: 'Loamy',
    weather: 'Cool, Dry',
    season: 'Autumn',
    profit: '$200 per acre',
  },
  {
    name: 'Corn',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-yellow-corn-plant-with-dark-background-image_2518503.jpg',
    description: 'Maximize corn yields with insights into planting techniques, nutrient management, and disease prevention.',
    growthDuration: '90-100 days',
    fertilizers: 'Nitrogen, Phosphorus, Zinc',
    soilType: 'Clay, Sandy Loam',
    weather: 'Warm, Humid',
    season: 'Spring',
    profit: '$300 per acre',
  },
  {
    name: 'Rice',
    image: 'https://media.istockphoto.com/id/481869420/photo/autumn-rice.jpg?s=612x612&w=0&k=20&c=SbuJe7ZJnV4PxWHOLBW08fIdouKLmFyH_57u2s6r8fU=',
    description: 'Rice is a crucial global food crop. Learn key strategies for water management,pest control, and variety.',
    growthDuration: '120-150 days',
    fertilizers: 'Nitrogen, Phosphorus, Potassium',
    soilType: 'Clayey',
    weather: 'Hot, Humid',
    season: 'Summer',
    profit: '$250 per acre',
  },
  {
    name: 'Soybean',
    image: 'https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg',
    description: 'Unlock the potential of soybeans with guidance on planting density, crop rotation, and harvest timing.',
    growthDuration: '80-120 days',
    fertilizers: 'Phosphorus, Potassium',
    soilType: 'Loamy, Sandy',
    weather: 'Warm',
    season: 'Spring, Summer',
    profit: '$350 per acre',
  },
  {
    name: 'Tomato',
    image: 'https://t4.ftcdn.net/jpg/03/54/24/17/360_F_354241708_IrEvwS6AeMei4ZZJHTSOC1xqtl79rS10.jpg',
    description: 'Learn how to grow juicy tomatoes with tips on pruning, pest control, and optimal sun exposure.',
    growthDuration: '60-85 days',
    fertilizers: 'Nitrogen, Phosphorus, Potassium',
    soilType: 'Loamy',
    weather: 'Warm',
    season: 'Summer',
    profit: '$400 per acre',
  },
  {
    name: 'Potato',
    image: 'https://static.vecteezy.com/system/resources/previews/036/491/729/non_2x/ai-generated-summer-harvest-potatoes-freshly-picked-arranged-in-a-farmers-field-for-social-media-post-size-free-photo.jpg',
    description: 'Potatoes are versatile crops. Discover strategies for planting, hilling, and disease management.',
    growthDuration: '90-120 days',
    fertilizers: 'Nitrogen, Phosphorus, Potassium',
    soilType: 'Sandy Loam',
    weather: 'Cool',
    season: 'Spring',
    profit: '$250 per acre',
  },
  {
    name: 'Carrot',
    image: 'https://c4.wallpaperflare.com/wallpaper/204/872/868/carrots-vegetables-harvest-wallpaper-preview.jpg',
    description: 'Enhance carrot growth with insights on soil health, spacing, and pest resistance.',
    growthDuration: '70-80 days',
    fertilizers: 'Phosphorus, Potassium',
    soilType: 'Sandy, Loamy',
    weather: 'Cool',
    season: 'Spring',
    profit: '$350 per acre',
  },
  {
    name: 'Lettuce',
    image: 'https://c1.wallpaperflare.com/preview/768/968/969/lettuce-green-vegetables-greens.jpg',
    description: 'Grow fresh lettuce with advice on watering techniques, spacing, and pest control.',
    growthDuration: '45-55 days',
    fertilizers: 'Nitrogen',
    soilType: 'Loamy, Sandy',
    weather: 'Cool',
    season: 'Spring, Fall',
    profit: '$150 per acre',
  },
  // {
  //   name: 'Strawberry',
  //   image: 'https://static.vecteezy.com/system/resources/previews/027/006/834/large_2x/ripe-red-strawberries-on-a-branch-in-the-garden-at-sunset-a-branch-with-natural-strawberries-on-a-blurred-background-of-a-strawberry-field-at-golden-hour-ai-generated-free-photo.jpg',
  //   description: 'Strawberries are beloved; master soil prep, pest control, and harvesting techniques for the best yield.',
  //   growthDuration: '4-6 weeks',
  //   fertilizers: 'Phosphorus, Potassium',
  //   soilType: 'Loamy, Sandy',
  //   weather: 'Warm',
  //   season: 'Spring',
  //   profit: '$500 per acre',
  // },
  // {
  //   name: 'Banana',
  //   image: 'https://img.freepik.com/premium-photo/banana-background-fruit-background-hd-8k-wallpaper-stock-photographic-image_890746-50314.jpg',
  //   description: 'Bananas require specific conditions. Discover tips on soil, irrigation, and pest management for a fruitful yield.',
  //   growthDuration: '9-12 months',
  //   fertilizers: 'Nitrogen, Potassium',
  //   soilType: 'Loamy, Well-drained',
  //   weather: 'Tropical',
  //   season: 'All year round',
  //   profit: '$600 per acre',
  // },
];

const Crops = () => {
  
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleLearnMore = (crop) => {
    setSelectedCrop(crop);
  };

  const handleCloseDetails = () => {
    setSelectedCrop(null);
  };

  return (
    
    <div className="crops-page">
      {selectedCrop && <div className="background-blur" />}
      
      <header className="crops-header">
        <h1>Crops Management</h1>
        <p>Discover insights and best practices for managing your crops effectively.</p>
      </header>

      
      <section className="crop-overview">
        <div className="overview-content">
          <h2>Crop Overview</h2>
          <p>
            Managing crops efficiently is vital for achieving high yields and sustainable farming practices. With AgriFinds,
             you can monitor crop health, track growth stages, and receive tailored a
             dvice for each crop type. Our platform offers a comprehensive overview of your crops,
              helping you make informed decisions to optimize productivity.
          </p>
        </div>
        <img src="https://st3.depositphotos.com/1177973/16777/i/450/depositphotos_167778562-stock-photo-concept-of-smart-agriculture-and.jpg" alt="Crop Overview" className="overview-image" />
      </section>

      
      <section className="featured-crops">
        <h2>Featured Crops</h2>
        <div className="crop-grid">
          {cropData.map((crop, index) => (
            <div className="crop-card" key={index}>
              <img src={crop.image} alt={crop.name} />
              <h3>{crop.name}</h3>
              <p>{crop.description}</p>
              <button className="learn-more-buttonc" onClick={() => handleLearnMore(crop)}>Learn More</button>              
            </div>
            
          ))}
          <section className='esection'>
            <Link to="/cropdetails">
        <button className='bute'>VIEW MORE CROPS</button>
        </Link>
      </section>
        </div>
      </section>

      
      {selectedCrop && (
        <div className="crop-detail-card">
          <div className="crop-detail-content">
            <img src={selectedCrop.image} alt={selectedCrop.name} className="crop-detail-image" />
            <h2>{selectedCrop.name}</h2>
            <ul className="crop-detail-list">
              <li><strong>Growth Duration:</strong> {selectedCrop.growthDuration}</li>
              <li><strong>Fertilizers Used:</strong> {selectedCrop.fertilizers}</li>
              <li><strong>Soil Type:</strong> {selectedCrop.soilType}</li>
              <li><strong>Weather Condition:</strong> {selectedCrop.weather}</li>
              <li><strong>Season:</strong> {selectedCrop.season}</li>
              <li><strong>Profit:</strong> {selectedCrop.profit}</li>
            </ul>
            <button className="close-details-button" onClick={handleCloseDetails}>Close</button>
          </div>
        </div>
      )}

      
      <section className="crop-management-tips">
        <h2>Crop Management Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Soil Health</h4>
            <p>Maintain healthy soil with proper pH balance, organic matter, and nutrient availability for optimal crop growth.</p>
          </div>
          <div className="tip-card">
            <h4>Irrigation Techniques</h4>
            <p>Implement efficient irrigation methods to conserve water while ensuring adequate moisture for crops.</p>
          </div>
          <div className="tip-card">
            <h4>Pest Control</h4>
            <p>Utilize integrated pest management practices to reduce crop damage and increase resilience.</p>
          </div>
          <div className="tip-card">
            <h4>Harvest Timing</h4>
            <p>Determine the optimal time for harvesting to maximize yield and quality of produce.</p>
          </div>
          <div className="tip-card">
            <h4>Crop Rotation</h4>
            <p>Rotate crops to improve soil fertility, reduce pests, and enhance overall farm sustainability.</p>
          </div>
          <div className="tip-card">
            <h4>Nutrient Management</h4>
            <p>Apply fertilizers and organic amendments based on soil tests to provide essential nutrients to your crops.</p>
          </div>
          <div className="tip-card">
            <h4>Companion Planting</h4>
            <p>Use companion planting strategies to naturally deter pests and promote beneficial interactions among plants.</p>
          </div>
          <div className="tip-card">
            <h4>Weed Management</h4>
            <p>Implement effective weed management techniques to prevent competition for resources with your crops.</p>
          </div>
        </div>
      </section>

      
      <section className="crops-action">
        <h2>Enhance Your Crop Management Today!</h2>
        <p>Sign up for AgriFinds and start making data-driven decisions for better farming outcomes.</p>
        <Link to="/get-started">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>
    </div>
    
  );
};

export default Crops;
