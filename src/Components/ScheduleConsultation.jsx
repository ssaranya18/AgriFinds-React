import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScheduleConsultation.css';

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
      email: 'emilycarter@gmail.com', 
      phone: '+919274563748', 
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
      email: 'johnsmith@gmail.com', // Corrected domain
      phone: '+919935728469', // Changed 'Phone' to 'phone'
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
      email: 'aishapatel@gmail.com', // Corrected domain
      phone: '+919829562859', // Changed 'Phone' to 'phone'
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
      email: 'carlosmendes@gmail.com', // Corrected domain
      phone: '+9183657295737', // Changed 'Phone' to 'phone'
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
      email: 'sofia.kim@gmail.com', // Corrected domain
      phone: '+915372943749', // Changed 'Phone' to 'phone'
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
      email: 'linwang@gmail.com', // Corrected domain
      phone: '+918275829573', // Changed 'Phone' to 'phone'
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
      email: 'rajivkumar@gmail.com', // Corrected domain
      phone: '+919264862958', // Changed 'Phone' to 'phone'
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
      email: 'mariagonzales@gmail.com', // Corrected domain
      phone: '+912846748693', // Changed 'Phone' to 'phone'
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
      email: 'ahmedkhalil@gmail.com', 
      phone: '+919820276159', 
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
      email: 'lila.srinivasan@gmail.com', // Corrected domain
      phone: '+917364203894', // Changed 'Phone' to 'phone'
      image: 'https://img.freepik.com/free-photo/portrait-smiling-female-scientist-standing-greenhouse-looking-camera_637285-1614.jpg',
    },
    {
      name: 'Dr. Priya Nair',
      domain: 'Agronomy',
      experience: 14,
      description: 'Dr. Priya Nair is an expert in agronomy, focusing on optimizing crop production through soil management and innovative farming techniques. Her research has led to significant improvements in crop yields and soil health.',
      achievements: [
        'Developed a soil management system that increased crop yields by 20%',
        'Published research on sustainable agronomy practices',
        'Recipient of the Agronomy Innovation Award',
      ],
      email: 'priya.nair@agronomy.org',
      phone: '+919876543210',
      image: 'https://images.moneycontrol.com/static-mcnews/2022/03/Priya-Nair-HUL-Beauty-and-personal-care-exec-VP-Unilever-South-Asia.jpg?impolicy=website&width=1600&height=900', // Replace with actual image URL
    },
    {
      name: 'Mr. Sam Patel',
      domain: 'Farm Management',
      experience: 18,
      description: 'Mr. Sam Patel is a farm management expert who specializes in the integration of modern technology and efficient practices in farm operations. His work helps farmers maximize productivity and sustainability.',
      achievements: [
        'Implemented technology solutions that reduced farm labor costs by 30%',
        'Authored a guide on modern farm management techniques',
        'Consulted for top agricultural firms on farm optimization',
      ],
      email: 'sam.patel@farmmanagement.org',
      phone: '+919123456789',
      image: 'https://orsp.pdpu.ac.in/Facphoto/samir.patel_photo.jpg', // Replace with actual image URL
    },    
];

const formatTimeTo12Hour = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${minutesFormatted} ${ampm}`;
};

const ScheduleConsultation = () => {
  const [selectedExpert, setSelectedExpert] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [userFarmName, setUserFarmName] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleExpertChange = (event) => setSelectedExpert(event.target.value);
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleTimeChange = (event) => setSelectedTime(event.target.value);
  const handleNameChange = (event) => setUserName(event.target.value);
  const handleEmailChange = (event) => setUserEmail(event.target.value);
  const handlePhoneChange = (event) => setUserPhone(event.target.value);
  const handleLocationChange = (event) => setUserLocation(event.target.value);
  const handleFarmNameChange = (event) => setUserFarmName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedTime = formatTimeTo12Hour(selectedTime);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/agri');
    }, 2000);
  };

  return (
    <div className="schedule-consultation">
      {showPopup && (
        <div className="popup">
          <p>Consultation scheduled successfully!</p>
        </div>
      )}
      <section className="schedule-header">
        <h1>Schedule a Consultation</h1>
        <p>Select your preferred expert and time for a consultation.</p>
      </section>

      <form className="schedule-form1" onSubmit={handleSubmit}>
        <div className="form-grid1">
          <div className="form-group1">
            <label htmlFor="name-input" className="form-label1">Your Name</label>
            <input
              type="text"
              id="name-input"
              className="form-input1"
              value={userName}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="email-input" className="form-label1">Your Email</label>
            <input
              type="email"
              id="email-input"
              className="form-input1"
              value={userEmail}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="farm-input" className="form-label1">Your Farm Name</label>
            <input
              type="text"
              id="farm-input"
              className="form-input1"
              value={userFarmName}
              onChange={handleFarmNameChange}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="phone-input" className="form-label1">Your Contact Number</label>
            <input
              type="tel"
              id="phone-input"
              className="form-input1"
              value={userPhone}
              onChange={handlePhoneChange}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="location-input" className="form-label1">Your Location</label>
            <input
              type="text"
              id="location-input"
              className="form-input1"
              value={userLocation}
              onChange={handleLocationChange}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="expert-select" className="form-label1">Choose Expert</label>
            <select
              id="expert-select"
              className="form-select1"
              value={selectedExpert}
              onChange={handleExpertChange}
              required
            >
              <option value="">Select an expert</option>
              {experts.map((expert, index) => (
                <option key={index} value={expert.name}>
                  {expert.name} - {expert.domain}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group1">
            <label htmlFor="date-input" className="form-label1">Select Date</label>
            <input
              type="date"
              id="date-input"
              className="form-input1"
              value={selectedDate}
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="form-group1">
            <label htmlFor="time-input" className="form-label1">Select Time</label>
            <input
              type="time"
              id="time-input"
              className="form-input1"
              value={selectedTime}
              onChange={handleTimeChange}
              required
            />
          </div>

        </div>
          <button type="submit" className="submit-buttons">Schedule Consultation</button>
      </form>
    </div>
  );
};

export default ScheduleConsultation;
