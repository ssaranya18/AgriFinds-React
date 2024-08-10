import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaSeedling,
  FaLocationArrow,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css";
import { signupHandler } from './axios/signupHandler'; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    farmName: "",
    location: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.farmName) newErrors.farmName = "Farm name is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number is invalid";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      const signupSuccess = await signupHandler(
        formData.name,
        formData.email,
        formData.password,
        formData.farmName,
        formData.location,
        formData.contactNumber
      );

      if (signupSuccess) {
        navigate("/home"); // Redirect to home page on successful registration
      } else {
        console.error("Signup failed. Please try again.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="register-container2">
      <h2>Registration</h2>
      <form className="register-form2" onSubmit={handleSubmit}>
        <div className="form-group2">
          <label htmlFor="name">
            <FaUser /> Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group2">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group2">
          <label htmlFor="password">
            <FaLock /> Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="form-group2">
          <label htmlFor="farmName">
            <FaSeedling /> Farm Name
          </label>
          <input
            type="text"
            name="farmName"
            id="farmName"
            value={formData.farmName}
            onChange={handleChange}
            className={errors.farmName ? "error" : ""}
          />
          {errors.farmName && (
            <span className="error-message">{errors.farmName}</span>
          )}
        </div>

        <div className="form-group2">
          <label htmlFor="location">
            <FaLocationArrow /> Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className={errors.location ? "error" : ""}
          />
          {errors.location && (
            <span className="error-message">{errors.location}</span>
          )}
        </div>

        <div className="form-group2">
          <label htmlFor="contactNumber">
            <FaPhone /> Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={errors.contactNumber ? "error" : ""}
          />
          {errors.contactNumber && (
            <span className="error-message">{errors.contactNumber}</span>
          )}
        </div>
        <center>
          <button type="submit" className="but2">
            REGISTER
          </button>
        </center>
        <div className="form-footer2">
          <p>
            Already have an account? <Link to="/">LOGIN</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
