import React, { useState, useEffect } from 'react';
import './UsersSection.css'; 

const UsersSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-section">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Farm Name</th>
            <th>Location</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.farmname}</td>
              <td>{user.location}</td>
              <td>{user.contactnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersSection;
