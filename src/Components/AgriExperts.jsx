// src/Components/AgriExperts.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './AgriExperts.css';

const experts = [
  {
    name: 'Dr. Emily Carter',
    domain: 'Crop Science',
    experience: 15,
    description: 'Dr. Emily Carter is a renowned crop scientist with over 15 years of experience in improving crop yields and sustainability. She specializes in wheat and corn genetics and has published numerous papers on crop resilience.',
    achievements: [
      'Developed a drought-resistant wheat variety',
      'Published over 30 research papers on crop genetics',
      'Keynote speaker at international agriculture conferences',
    ],
    image: 'https://materials.princeton.edu/sites/g/files/toruqf551/files/styles/freeform_750w/public/people/carter_headshot_2.jpg?itok=BUEagoLO',
  },
  {
    name: 'Mr. John Smith',
    domain: 'Agricultural Technology',
    experience: 20,
    description: 'With a background in mechanical engineering, Mr. John Smith has pioneered the development of precision farming technologies. His innovations in drone technology have transformed modern agricultural practices.',
    achievements: [
      'Invented a GPS-guided drone for pesticide application',
      'Authored a book on smart farming technologies',
      'Consultant for top agritech companies globally',
    ],
    image: 'https://www.celebrityspeakers.com.au/content/uploads/2020/12/Dr-John-Smith-1-website.jpeg',
  },
  {
    name: 'Dr. Aisha Patel',
    domain: 'Soil Science',
    experience: 10,
    description: 'Dr. Aisha Patel is a soil scientist dedicated to improving soil health and fertility. Her research focuses on organic farming practices and sustainable soil management.',
    achievements: [
      'Developed a soil rejuvenation program for organic farms',
      'Recipient of the International Soil Science Award',
      'Published a series of articles on soil conservation',
    ],
    image: 'https://penntoday.upenn.edu/sites/default/files/2023-08/Ayesha%20Patel.jpg',
  },
  {
    name: 'Prof. Carlos Mendes',
    domain: 'Agricultural Economics',
    experience: 25,
    description: 'Professor Carlos Mendes is an expert in agricultural economics, focusing on market trends and economic strategies for farmers. His insights help farmers maximize profits and navigate global markets.',
    achievements: [
      'Advised governments on agricultural policy reforms',
      'Published influential research on global agricultural markets',
      'Awarded Economist of the Year by the Global Agriculture Forum',
    ],
    image: 'https://carlos-mendez.org/authors/admin/avatar_huc9e2812f9d36a477d99029666499abe0_131593_270x270_fill_q75_lanczos_center.jpg',
  },
  {
    name: 'Ms. Sofia Kim',
    domain: 'Sustainable Farming',
    experience: 12,
    description: 'Ms. Sofia Kim is a leader in sustainable farming practices, promoting eco-friendly techniques and biodiversity. She has worked with numerous NGOs to implement sustainable farming projects worldwide.',
    achievements: [
      'Implemented sustainable farming projects in over 20 countries',
      'Authored a guide on biodiversity in agriculture',
      'Featured in National Geographic for her work in sustainability',
    ],
    image: 'https://www.peakscientific.com/media/vfvjxcex/scientist-plants-01.jpg',
  },
  {
    name: 'Dr. Lin Wang',
    domain: 'Aquaculture',
    experience: 18,
    description: 'Dr. Lin Wang is an aquaculture expert specializing in sustainable fish farming practices. She has developed innovative techniques to improve fish health and productivity while minimizing environmental impact.',
    achievements: [
      'Pioneered the use of eco-friendly fish feed alternatives',
      'Published research on sustainable aquaculture systems',
      'Recognized as a leader in environmental conservation',
    ],
    image: 'https://www.nanotech-now.com/news_images/35893.jpg',
  },
  {
    name: 'Dr. Rajiv Kumar',
    domain: 'Plant Pathology',
    experience: 22,
    description: 'Dr. Rajiv Kumar is a leading expert in plant pathology, specializing in the diagnosis and management of plant diseases. His work has helped farmers worldwide protect their crops from devastating diseases.',
    achievements: [
      'Developed an early detection system for plant diseases',
      'Trained over 1,000 farmers in plant disease management',
      'Recipient of the Plant Health Award',
    ],
    image: 'https://www.rgcirc.org/wp-content/uploads/2017/08/Rajeev-Kumar.jpg',
  },
  {
    name: 'Ms. Maria Gonzales',
    domain: 'Horticulture',
    experience: 16,
    description: 'Ms. Maria Gonzales is a horticulturist with expertise in ornamental plants and landscape design. Her innovative designs have been featured in numerous garden exhibitions.',
    achievements: [
      'Won the International Garden Design Competition',
      'Published a book on urban horticulture',
      'Featured in top gardening magazines worldwide',
    ],
    image: 'https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2022/08/Lily-Photo.jpg',
  },
  {
    name: 'Mr. Ahmed Khalil',
    domain: 'Agroforestry',
    experience: 14,
    description: 'Mr. Ahmed Khalil is an agroforestry expert, specializing in integrating trees into agricultural landscapes. His work promotes biodiversity and sustainable land management.',
    achievements: [
      'Developed agroforestry systems for degraded lands',
      'Conducted workshops on agroforestry practices worldwide',
      'Recipient of the Green Innovation Award',
    ],
    image: 'https://ahmedkhalil.me/wp-content/uploads/2018/03/sbb_1554-e1520499511403.jpg',
  },
  {
    name: 'Dr. Lila Srinivasan',
    domain: 'Genetic Engineering',
    experience: 17,
    description: 'Dr. Lila Srinivasan is a genetic engineer focused on developing genetically modified crops for improved resistance and yield. Her groundbreaking work has set new standards in biotechnology.',
    achievements: [
      'Developed disease-resistant rice and maize varieties',
      'Published influential papers on genetic modifications',
      'Awarded the Biotechnology Pioneer Award',
    ],
    image: 'https://img.freepik.com/free-photo/portrait-smiling-female-scientist-standing-greenhouse-looking-camera_637285-1614.jpg',
  },
];

const AgriExperts = () => {
  return (
    <div className="agri-experts">
      <section className="header">
        <div className="header-content">
          <h1>Meet Our Agricultural Experts</h1>
          <p>Learn from the best in the field of agriculture and sustainable farming.</p>
        </div>
      </section>

      <section className="experts-section">
        <h2>Our Experts</h2>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <img src={expert.image} alt={`${expert.name}`} className="expert-image" />
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <p className="expert-domain">{expert.domain}</p>
                <p className="expert-experience">{expert.experience} years of experience</p>
                <p className="expert-description">{expert.description}</p>
                <h4>Achievements</h4>
                <ul className="achievements-list">
                  {expert.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="call-to-action">
        <h2>Want to Connect with Our Experts?</h2>
        <p>Contact us today to schedule a consultation with our agricultural experts and take your farming to the next level.</p>
        <Link to="/contactform">
        <button className="cta-button">Contact Us</button>
        </Link>
      </section>
    </div>
  );
};

export default AgriExperts;
