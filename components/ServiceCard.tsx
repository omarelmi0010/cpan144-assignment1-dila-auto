import React, { useState } from 'react';

// Props type: describes the data this component receives from its parent
type ServiceCardProps = {
  name: string;
  description: string;
  details: string;
};

// ServiceCard component: shows one service and can show or hide more details
export default function ServiceCard({ name, description, details }: ServiceCardProps) {
  // State: remembers whether the details are currently visible
  const [showDetails, setShowDetails] = useState(false);

  // Event handler: switches the state between true and false when the button is clicked
  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleToggle}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {/* Conditional rendering: the details only appear when showDetails is true */}
      {showDetails && <p>{details}</p>}
    </div>
  );
}