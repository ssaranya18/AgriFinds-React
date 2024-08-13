import React from 'react';
import './Profile.css';

const Profile = ({ adminName, adminEmail }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/036/093/165/small/ai-generated-portrait-of-successful-and-happy-businesswoman-office-worker-smiling-and-looking-at-camera-working-inside-modern-office-photo.jpg" // Replace with the actual admin's picture URL
          alt="Admin" 
          className="profile-image"
        />
      </div>
      <div className="profile-card-body">
        <h2>Name: {adminName}</h2>
        <p>Email: sara@gmail.com{adminEmail}</p>
      </div>
    </div>
  );
};

export default Profile;
