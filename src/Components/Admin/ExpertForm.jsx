import React, { useState, useEffect } from 'react';
import { updateExpert } from '../axios/apiService';
// import './ExpertForm.css';

const ExpertForm = ({ expert, onClose }) => {
    const [formData, setFormData] = useState({ ...expert });

    useEffect(() => {
        setFormData({ ...expert });
    }, [expert]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateExpert(formData.id, formData);
            alert('Expert updated successfully');
            onClose(); // Close the form or modal after successful update
        } catch (error) {
            console.error('Error updating expert:', error);
        }
    };

    return (
        <div className="expert-form">
            <h3>Edit Expert</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Domain:
                    <input
                        type="text"
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Experience:
                    <input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ExpertForm;
