import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from './axios/loginHandler'; 
import "./LoginForm.css"; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const result = await loginHandler(formData.email, formData.password);
      if (result.success) {
        console.log("Login successful", formData);
        navigate("/"); 
      } else {
        setLoginError(result.message); 
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-background"> {/* Add this wrapper div with the new class */}
      <div className="login-container1">
        <h2>Login to Your Account</h2>
        <form className="login-form1" onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="email"><FaUser /> Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group1">
            <label htmlFor="password"><FaLock /> Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          {loginError && <span className="error-message">{loginError}</span>} {/* Display login error */}

          <center>
            <button type="submit" className="but1">LOGIN</button>
          </center>
          <div className="form-footer1">
            <p>Don't have an account? <Link to="/register">REGISTER</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
