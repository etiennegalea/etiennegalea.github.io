import React from 'react';
import '../styles/References.css';

const References = () => {
  const references = [
    {
      name: "John Doe",
      position: "Senior Developer",
      company: "Tech Company",
      reference: "Professional reference details...",
      contact: "Available upon request"
    },
    // Add more references here
  ];

  return (
    <div className="references-container">
      {references.map((ref, index) => (
        <div key={index} className="reference-card">
          <div className="reference-header">
            <h3>{ref.name}</h3>
            <p className="reference-title">{ref.position}</p>
            <p className="reference-company">{ref.company}</p>
          </div>
          <div className="reference-content">
            <p>{ref.reference}</p>
            <p className="reference-contact">{ref.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default References; 