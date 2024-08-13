import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch the products from the backend
  const fetchProducts = () => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  };

  // Function to handle product deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/products/${id}`)
      .then(() => {
        fetchProducts(); // Refetch the products after deletion
      })
      .catch(error => {
        console.error("There was an error deleting the product!", error);
      });
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Variety</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.variety}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => onEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
