import React, { useState } from 'react';
import './Schemes.css';

const schemesData = [
  {
    title: 'Pradhan Mantri Fasal Bima Yojana',
    description: 'A government-sponsored crop insurance scheme to support farmers in case of crop failure due to unforeseen events.',
    details: 'This scheme offers insurance coverage and financial support to farmers in the event of crop failure. It aims to stabilize farm incomes and encourage farmers to adopt innovative practices.',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Pradhan_Mantri_Fasal_Bima_Yojana_%28PMFBY%29_logo.png'
  },
  {
    title: 'Soil Health Card Scheme',
    description: 'This scheme aims to provide soil cards to farmers that carry crop-wise recommendations for nutrients and fertilizers.',
    details: 'The Soil Health Card Scheme is designed to improve soil fertility and productivity by providing farmers with detailed soil analysis and recommendations for fertilizers. It helps farmers make informed decisions for sustainable agriculture.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZBwaglnYR_ubU4VRMnydEfeR3OmGgZkkYQ&s'
  },
  {
    title: 'Pradhan Mantri Krishi Sinchai Yojana',
    description: 'A scheme to improve farm productivity and ensure better utilization of resources in the irrigation sector.',
    details: 'This initiative focuses on enhancing irrigation facilities to increase farm productivity. It promotes efficient water management practices, micro-irrigation systems, and sustainable water resources development.',
    image: 'https://st5.depositphotos.com/27132560/69402/i/450/depositphotos_694024498-stock-photo-agriculture-logo-template-icon-design.jpg'
  },
  {
    title: 'National Agriculture Market (e-NAM)',
    description: 'A pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.',
    details: 'e-NAM connects multiple agricultural markets across India, providing farmers with transparent pricing and easy access to buyers. It aims to boost farmers\' income and streamline agricultural supply chains.',
    image: 'https://education.sakshi.com/sites/default/files/images/2022/04/18/enam-1650286269.jpg'
  },
  {
    title: 'Kisan Credit Card (KCC)',
    description: 'Provides farmers with adequate and timely credit support from the banking system under a single window.',
    details: 'The Kisan Credit Card offers a simplified credit mechanism for farmers to access loans for agricultural activities. It reduces the burden of high-interest rates and helps farmers manage financial needs effectively.',
    image: 'https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Kisan-Credit-Card-800x500.jpg'
  },
  {
    title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    description: 'Encourages organic farming practices and provides incentives to farmers for sustainable agriculture.',
    details: 'PKVY promotes organic farming by offering financial incentives and support for traditional farming practices. It aims to reduce chemical usage and promote environmentally friendly farming techniques.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22IyyV36xQPdac5DL8-QFeBD17d8ZVrIpxA&s'
  },
  {
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    description: 'Provides financial assistance to small and marginal farmers to help them meet their agricultural expenses.',
    details: 'PM-KISAN is a financial support scheme for farmers, offering direct cash transfers to eligible beneficiaries. It assists in meeting agricultural expenses and improving farmers\' livelihoods.',
    image: 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/39901971/39901971-1701549858272-91ca3be1f5722.jpg'
  },
  {
    title: 'Rashtriya Krishi Vikas Yojana (RKVY)',
    description: 'Provides incentives to states for increasing public investment in agriculture and allied sectors.',
    details: 'RKVY encourages states to enhance investments in agriculture and related sectors. It aims to achieve higher growth in agriculture and address regional imbalances in agricultural development.',
    image: 'https://www.angraurabitpt.org/utilities/frontend/images/nadp.png'
  },
  {
    title: 'Gramin Bhandaran Yojana',
    description: 'Supports the construction and renovation of rural godowns to improve storage infrastructure.',
    details: 'This scheme focuses on improving rural storage facilities to reduce post-harvest losses. It supports farmers in building and renovating godowns, ensuring better storage and distribution of agricultural produce.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NG1QyXMW7Tv5pXM1cqpyeBu_HyfTUFg-skbFp_F5lboYTF71dvSeeXmxLBvWuI0PszI&usqp=CAU'
  },
  {
    title: 'Dairy Entrepreneurship Development Scheme',
    description: 'Provides financial support for dairy development and encourages entrepreneurship in the dairy sector.',
    details: 'This scheme offers financial aid to dairy farmers and entrepreneurs to enhance dairy production. It promotes entrepreneurship, quality enhancement, and innovation in the dairy sector.',
    image: 'https://media.istockphoto.com/id/2022550503/vector/cow-logo-cow-farm-logo-design-vector-vintage-cattle-angus-beef-logo.jpg?s=612x612&w=0&k=20&c=eSDaE5jws547scOmx8z1C8LLDbXs-123PCowMZ6ARM8='
  },
  
];

const SchemesPage = () => {
  const [visibleSchemes, setVisibleSchemes] = useState(5);
  const [expandedScheme, setExpandedScheme] = useState(null);

  const loadMoreSchemes = () => {
    setVisibleSchemes((prev) => prev + 5);
  };

  const toggleSchemeDetails = (index) => {
    setExpandedScheme(expandedScheme === index ? null : index);
  };

  return (
    <div className="schemes-page">
      <h1 className="page-title">Government Schemes</h1>
      <div className="schemes-list">
        {schemesData.slice(0, visibleSchemes).map((scheme, index) => (
          <div
            className={`scheme-card ${expandedScheme === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleSchemeDetails(index)}
          >
            <img src={scheme.image} alt={scheme.title} className="scheme-image" />
            <div className="scheme-content">
              <h2 className="scheme-title">{scheme.title}</h2>
              <p className="scheme-description">{scheme.description}</p>
              {expandedScheme === index && (
                <div className="scheme-details">
                  <p>{scheme.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleSchemes < schemesData.length && (
        <button className="load-more-button" onClick={loadMoreSchemes}>
          Load More
        </button>
      )}
    </div>
  );
};

export default SchemesPage;