import React from 'react';
import '../styles/EmploymentHistory.css';

const EmploymentHistory = () => {
  const experiences = [
    {
      company: "Current Company",
      position: "Current Position",
      period: "2023 - Present",
      description: "Description of current role",
      isCurrent: true
    },
    // Add more experiences here
  ];

  return (
    <div className="employment-history">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="timeline">
            <div className={`timeline-dot ${exp.isCurrent ? 'current' : ''}`} />
            {index !== experiences.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="experience-content">
            <h3>{exp.company}</h3>
            <h4>{exp.position}</h4>
            <p className="period">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmploymentHistory; 