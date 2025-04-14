import React from 'react';
import '../styles/Certificates.css';
import { Download, ExternalLink } from 'lucide-react'; // Using lucide-react for icons

const Certificates = () => {
  // --- Sample Certificate Data ---
  // Replace with your actual certificates
  // Ensure 'file' paths point to files in your public/certificates folder
  // Ensure 'icon' paths point to images in your public/certificates folder (or use null)
  const certificates = [
    {
      title: "B.Sc. Software Engineering",
      issuer: "Universita ta` Malta",
      icon: "/certificates/icons/uom.png",
      file: "/certificates/bachelor_degree.pdf"
    },
    {
      title: "M.Sc. Artificial Intelligence",
      issuer: "Vrije Universiteit, Amsterdam",
      icon: "/certificates/icons/vu.png",
      file: "/certificates/masters_degree.pdf"
    },
    {
      title: "FruitPunch AI",
      issuer: "FruitPunch AI",
      icon: "/certificates/icons/fruitpunchai.jpeg",
      file: "/certificates/.pdf"
    },
    {
      title: "Internship Completion",
      issuer: "Ostfalia University",
      icon: "/certificates/icons/ostfalia.jpeg",
      file: "/certificates/Ostfalia_ref_2017.pdf"
    },
    {
      title: "Querying Microsoft SQL Server 2012/2014",
      issuer: "Microsoft",
      icon: "/certificates/icons/Querying_Microsoft_SQL_Server_2012.2014-01.png",
      file: "https://www.credly.com/badges/9a6d1f12-3038-4f97-a210-7535a5fac381"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-8 certificates-container">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-8 text-left">
        Certificates
      </h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a 
            key={index} 
            href={cert.file} 
            download 
            target="_blank" // Opens download link in new tab, good practice
            rel="noopener noreferrer" // Security measure for target="_blank"
            className="certificate-card-link"
          >
            <div className="certificate-card">
              {cert.icon && (
                <div className="certificate-icon">
                  <img src={cert.icon} alt={`${cert.issuer} logo`} />
                </div>
              )}
              <div className="certificate-info">
                <h3 className="certificate-title text-black dark:text-white">{cert.title}</h3>
                <p className="certificate-issuer text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              </div>
              {/* <div className="certificate-link-icon">
              {cert.file.includes('http') ? 
                <ExternalLink size={20} className="text-gray-500 dark:text-gray-400" /> :
                <Download size={20} className="text-gray-500 dark:text-gray-400" />
              }
              </div> */}
              
            </div>
          </a>

        ))}
      </div>
    </div>
  );
};

export default Certificates; 