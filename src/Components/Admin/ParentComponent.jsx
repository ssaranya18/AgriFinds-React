import React, { useState } from 'react';
import ExpertList from './ExpertList';
import ExpertForm from './ExpertForm'; // Ensure you create this component

const ParentComponent = () => {
    const [selectedExpert, setSelectedExpert] = useState(null);

    const handleEdit = (expert) => {
        setSelectedExpert(expert);
        // Logic to open an edit form/modal can be added here
    };

    return (
        <div>
            <ExpertList onEdit={handleEdit} />
            {selectedExpert && <ExpertForm expert={selectedExpert} />}
        </div>
    );
};

export default ParentComponent;
