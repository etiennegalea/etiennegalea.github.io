import React from 'react';
import '../styles/EmploymentHistory.css';

const EmploymentHistory = () => {
    const experiences = [
        {
            company: "Current Company",
            position: "Current Position",
            period: "2023 - Present",
            description: "Description of current role",
            isCurrent: true,
            tags: ["Tag1", "Tag2", "Tag3"]
        },
        {
            company: "Previous Company",
            position: "Previous Position",
            period: "2021 - 2023",
            description: "Description of previous role",
            isCurrent: false,
            tags: ["Tag1", "Tag2", "Tag3"]
        },
        {
            company: "Another Company",
            position: "Previous Position",
            period: "2021 - 2023",
            description: "Description of previous role",
            isCurrent: false,
            tags: ["Tag1", "Tag2", "Tag3"]
        },
        // Add more experiences here
    ];
    
    return (
        <div className="employment-history">
            <div className="timeline-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker">
                            <div className={`timeline-dot ${exp.isCurrent ? 'current' : ''}`} />
                            {index !== experiences.length - 1 && <div className="timeline-line" />}
                        </div>
                        <div className="experience-card">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-black dark:text-white">{exp.company}</h3>
                                <h4 className="text-lg text-gray-700 dark:text-gray-300">{exp.position}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex}
                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-900 dark:text-gray-100"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmploymentHistory; 