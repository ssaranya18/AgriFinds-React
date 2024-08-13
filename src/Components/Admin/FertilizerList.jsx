import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FertilizerList = ({ onEdit, onDelete }) => {
  const [fertilizers, setFertilizers] = useState([]);

  useEffect(() => {
    // Fetch fertilizers from the backend
    axios.get('http://localhost:8080/api/fertilizers')
      .then(response => setFertilizers(response.data))
      .catch(error => console.error('Error fetching fertilizers:', error));
  }, []);

  const handleDelete = (id) => {
    // Delete fertilizer by ID
    axios.delete(`http://localhost:8080/api/fertilizers/${id}`)
      .then(() => {
        // Refresh the list
        setFertilizers(fertilizers.filter(fertilizer => fertilizer.id !== id));
        if (onDelete) onDelete(id);
      })
      .catch(error => console.error('Error deleting fertilizer:', error));
  };

  return (
    <div>
      <h2>Fertilizers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Variety</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fertilizers.map((fertilizer) => (
            <tr key={fertilizer.id}>
              <td>{fertilizer.name}</td>
              <td>{fertilizer.variety}</td>
              <td>{fertilizer.description}</td>
              <td>{fertilizer.price}</td>
              <td>{fertilizer.rating}</td>
              <td>
                <button onClick={() => onEdit(fertilizer)}>Edit</button>
                <button onClick={() => handleDelete(fertilizer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FertilizerList;
