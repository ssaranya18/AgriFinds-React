import React, { useState, useEffect } from 'react';
import { FaUsers, FaUserMd, FaSeedling, FaLeaf } from 'react-icons/fa'; // Import icons
import './Home.css'; // Ensure you have appropriate styling

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [expertCount, setExpertCount] = useState(0);
  const [seedProductCount, setSeedProductCount] = useState(0);
  const [fertilizerProductCount, setFertilizerProductCount] = useState(0);

  useEffect(() => {
    // Fetch counts from your backend API
    const fetchCounts = async () => {
      try {
        // Fetch user count
        const usersResponse = await fetch('http://localhost:8080/users/count');
        const usersData = await usersResponse.json();
        console.log('User Count Response:', usersData);
        setUserCount(usersData.count || usersData);

        // Fetch expert count
        const expertsResponse = await fetch('http://localhost:8080/api/experts/count');
        const expertsData = await expertsResponse.json();
        console.log('Expert Count Response:', expertsData);
        setExpertCount(expertsData.count || expertsData);

        // Fetch seed product count
        const seedProductsResponse = await fetch('http://localhost:8080/api/products/count');
        const seedProductsData = await seedProductsResponse.json();
        console.log('Seed Product Count Response:', seedProductsData);
        setSeedProductCount(seedProductsData.count || seedProductsData);

        // Fetch fertilizer product count
        const fertilizerProductsResponse = await fetch('http://localhost:8080/api/fertilizers/count');
        const fertilizerProductsData = await fertilizerProductsResponse.json();
        console.log('Fertilizer Product Count Response:', fertilizerProductsData);
        setFertilizerProductCount(fertilizerProductsData.count || fertilizerProductsData);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="home-container">
      <h1>Dashboard</h1>
      <div className="counts-container">
        <div className="count-card">
          <FaUsers size={30} />
          <h2>Users</h2>
          <p>{userCount}</p>
        </div>
        <div className="count-card">
          <FaUserMd size={30} />
          <h2>Experts</h2>
          <p>{expertCount}</p>
        </div>
        <div className="count-card">
          <FaSeedling size={30} />
          <h2>Seed Products</h2>
          <p>{seedProductCount}</p>
        </div>
        <div className="count-card">
          <FaLeaf size={30} />
          <h2>Fertilizer Products</h2>
          <p>{fertilizerProductCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
