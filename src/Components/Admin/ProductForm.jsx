import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';

const ProductForm = ({ product, onSave }) => {
  const [formData, setFormData] = useState(product || {
    name: '', variety: '', description: '', price: '', rating: '', imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      axios.put(`http://localhost:8080/api/products/${formData.id}`, formData)
        .then(response => onSave(response.data));
    } else {
      axios.post('http://localhost:8080/api/products', formData)
        .then(response => onSave(response.data));
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="product-form-input"
      />
      <input
        type="text"
        name="variety"
        value={formData.variety}
        onChange={handleChange}
        placeholder="Variety"
        className="product-form-input"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="product-form-input"
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="product-form-input"
      />
      <input
        type="text"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="product-form-input"
      />
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="product-form-input"
      />
      <button type="submit" className="product-form-button">Save</button>
    </form>
  );
};

export default ProductForm;
