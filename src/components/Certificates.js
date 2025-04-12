import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: "Certificate Name",
      issuer: "Issuing Organization",
      date: "2023",
      credentialId: "CERT-123-456",
      link: "https://credential-url.com"
    },
    // Add more certificates here
  ];

  return (
    
    <div className="max-w-4xl mx-auto mb-8 certificates-container">
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-card">
          <div className="certificate-icon">
            <svg className="cert-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="certificate-content">
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <p className="credential-id">Credential ID: {cert.credentialId}</p>
            {cert.link && (
              <a href={cert.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="verify-link">
                Verify Certificate
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates; 