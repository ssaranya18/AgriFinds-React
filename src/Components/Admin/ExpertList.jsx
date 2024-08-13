import React, { useEffect, useState } from 'react';
import { getExperts, deleteExpert } from '../axios/apiService';
import ExpertForm from './ExpertForm'; // Import the ExpertForm component
import './ExpertList.css';

const ExpertList = () => {
    const [experts, setExperts] = useState([]);
    const [editingExpert, setEditingExpert] = useState(null);

    useEffect(() => {
        fetchExperts();
    }, []);

    const fetchExperts = async () => {
        const response = await getExperts();
        setExperts(response.data);
    };

    const handleDelete = async (id) => {
        await deleteExpert(id);
        fetchExperts();
    };

    const handleEdit = (expert) => {
        setEditingExpert(expert);
    };

    const handleCloseForm = () => {
        setEditingExpert(null);
    };

    return (
        <div>
            <h2>Expert List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Domain</th>
                        <th>Experience</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {experts.map((expert) => (
                        <tr key={expert.id}>
                            <td>{expert.name}</td>
                            <td>{expert.domain}</td>
                            <td>{expert.experience} years</td>
                            <td>{expert.email}</td>
                            <td>{expert.phone}</td>
                            <td>
                                <button onClick={() => handleEdit(expert)}>Edit</button>
                                <button onClick={() => handleDelete(expert.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingExpert && (
                <ExpertForm
                    expert={editingExpert}
                    onClose={handleCloseForm}
                />
            )}
        </div>
    );
};

export default ExpertList;
