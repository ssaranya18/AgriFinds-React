import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FertilizerForm.css'; // Import the CSS file

const FertilizerForm = ({ fertilizer, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    description: '',
    price: '',
    rating: '',
  });

  useEffect(() => {
    if (fertilizer) {
      setFormData({
        name: fertilizer.name,
        variety: fertilizer.variety,
        description: fertilizer.description,
        price: fertilizer.price,
        rating: fertilizer.rating,
      });
    }
  }, [fertilizer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fertilizer) {
      // Update existing fertilizer
      axios.put(`http://localhost:8080/api/fertilizers/${fertilizer.id}`, formData)
        .then(response => {
          if (onSave) onSave(response.data);
        })
        .catch(error => console.error('Error updating fertilizer:', error));
    } else {
      // Create new fertilizer
      axios.post('http://localhost:8080/api/fertilizers', formData)
        .then(response => {
          if (onSave) onSave(response.data);
        })
        .catch(error => console.error('Error creating fertilizer:', error));
    }
  };

  return (
    <div className="fertilizer-form-container">
      <h2 className="fertilizer-form-heading">{fertilizer ? 'Edit Fertilizer' : 'Add Fertilizer'}</h2>
      <form className="fertilizer-form" onSubmit={handleSubmit}>
        <label className="fertilizer-form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="fertilizer-form-input"
            required
          />
        </label>
        <label className="fertilizer-form-label">
          Variety:
          <input
            type="text"
            name="variety"
            value={formData.variety}
            onChange={handleChange}
            className="fertilizer-form-input"
            required
          />
        </label>
        <label className="fertilizer-form-label">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="fertilizer-form-textarea"
            required
          />
        </label>
        <label className="fertilizer-form-label">
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="fertilizer-form-input"
            required
          />
        </label>
        <label className="fertilizer-form-label">
          Rating:
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="fertilizer-form-input"
            required
          />
        </label>
        <button type="submit" className="fertilizer-form-submit-btn">Save</button>
      </form>
    </div>
  );
};

export default FertilizerForm;
