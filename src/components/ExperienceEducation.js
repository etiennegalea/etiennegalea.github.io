import React from 'react';
import '../styles/ExperienceEducation.css';

const EmploymentHistory = () => {
    const experience = [
        {
            img: "/organizations/isispace.png",
            company: "ISISpace Group",
            position: "Software Engineer",
            period: "May 2025",
            description: [
                "Maintain and improve mission control software stack for satellite operations in space. Performing R&D, identifying trade-offs, and proposing new designs."
            ],
            isCurrent: true,
            tags: ["Python", "FastAPI", "Grafana", "htmx", "c++", "SQLAlchemy", "docker", "gitlab"]
        },
        {
            img: "/organizations/ready_education.jpg",
            company: "Ready Education",
            position: "Back End Engineer / Data Scientist",
            period: "July 2022 - Jan 2025",
            description: [
                "Developing the API infrastructure that supports over 2.5 million students.",
                "Investigating issues, designing systems, assigning and prioritizing JIRA tickets, communicating findings, and discussing potential solutions and the way forward.",
                "Building ETL pipelines for client data using AWS tools including S3, Glue, Athena in combination with Spark and Iceberg format. Setting up Grafana dashboards and orchestrating data pipelines and triggers via Airflow."
            ],
            isCurrent: false,
            tags: ["Python", "AWS Lambda", "Grafana", "Amazon S3", "Amazon Athena", "SQLAlchemy", "MySQL", "Flask", "docker"]
        },
        {
            img: "/organizations/cncr.png",
            company: "CNCR - Center for Neurogenomics & Cognitive Research",
            position: "Deep Learning Researcher (Internship)",
            period: "January 2021 - June 2022",
            description: ["Researching self-supervised learning for the EEG domain. The purpose was to find and show a trace of generalization in the data since EEG can be very domain-specific. Positive results where found and this generalizations were plotted accordingly."],
            isCurrent: false,
            tags: ["Data Science", "Python", "Deep Learning", "EEG"]
        },
        {
            img: "/organizations/vu.png",
            company: "Vrije Universiteit, Amsterdam",
            position: "Teaching Assistant",
            period: "November 2020 - April 2021",
            description: ["Assisted professors with lab sessions, gradings, projects, organization and management of courses, and assisting students with questions about their work.", "Courses involve: Socially Intelligent Robotics, Data Science and Text Mining."],
            isCurrent: false,
            tags: ["python", "NAO-bot", "nlp", "scraping"]
        },
        {
            img: "/organizations/betsson.png",
            company: "Betsson Group",
            position: "Fullstack Engineer",
            period: "October 2017 - July 2020",
            description: ["Full-stack Software Development, testing and implementation (HTML5, CSS3, JS), database building and management, task Estimation, operational Analysis, code Reviews, bug Fixing, documentation of all Software Development"],
            isCurrent: false,
            tags: ["html5", "css3", "js", "mysql", "laravel"]
        },
        {
            img: "/organizations/ostfalia.jpeg",
            company: "Ostfalia University",
            position: "Software Engineer",
            period: "July 2017 - September 2017",
            description: ["Involved in a project which consisted of having to build a self-automated vehicle capable of traversing through a small track with simulated real life traffic obstacles such a traffic signs, traffic lights, stationary obstacles and other autonomous vehicles. I was tasked with developing image recognition software capable of recognising between traffic signs and making an educated decision."],
            isCurrent: false,
            tags: ["C++", "opencv", "cnn", "tensorflow"]
        },
    ];

    const education = [
        {
            img: "/organizations/vu.png",
            academy: "Vrije Universiteit, Amsterdam",
            course: "Master in Artificial Intelligence & Cognitive Science",
            period: "August 2019 - June 2022",
            description: [
                "Machine learning, natural language processing, data mining, multi-agent systems, evolutionary computing, deep-learning w/ EEG data, brain imaging."
            ],
            isCurrent: false
        },
        {
            img: "/organizations/uom.png",
            academy: "Universita ta` Malta",
            course: "Bachelors in Software Engineering",
            period: "August 2014 - June 2017",
            description: [],
            isCurrent: false
        },
    ];
    
    return (
        <div className="max-w-4xl mx-auto mb-8 employment-history">
            <div className="section-header">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                    Experience
                </h2>
                <div className="timeline-container">
                    {experience.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className={`timeline-dot ${exp.isCurrent ? 'current' : ''}`} />
                                {index !== experience.length - 1 && <div className="timeline-line" />}
                            </div>
                            <div className="experience-card">
                                <div className="experience-card-header mb-4">
                                    {exp.img && (
                                        <div className="experience-logo">
                                            <img src={exp.img} alt={`${exp.company} logo`} />
                                        </div>
                                    )}
                                    <div className="experience-header-info">
                                        <h3 className="text-xl font-bold text-black dark:text-white">{exp.company}</h3>
                                        <h4 className="text-lg text-gray-700 dark:text-gray-300">{exp.position}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                                    </div>
                                </div>
                                <div className="experience-content">
                                    {exp.description.map((para, i) => (
                                        <p key={i} className="text-gray-600 dark:text-gray-300 mb-4">{para}</p>
                                    ))}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="tag px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-900 dark:text-gray-100"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-header mt-16">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                    Education
                </h2>
                <div className="timeline-container">
                    {education.map((ed, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className={`timeline-dot ${ed.isCurrent ? 'current' : ''}`} />
                                {index !== education.length - 1 && <div className="timeline-line" />}
                            </div>
                            <div className="experience-card">
                                <div className="experience-card-header mb-4">
                                    {ed.img && (
                                        <div className="experience-logo">
                                            <img src={ed.img} alt={`${ed.academy} logo`} />
                                        </div>
                                    )}
                                    <div className="experience-header-info">
                                        <h3 className="text-xl font-bold text-black dark:text-white">{ed.academy}</h3>
                                        <h4 className="text-lg text-gray-700 dark:text-gray-300">{ed.course}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{ed.period}</p>
                                    </div>
                                </div>
                                <div className="experience-content">
                                    {ed.description.map((para, i) => (
                                        <p key={i} className="text-gray-600 dark:text-gray-300 mb-4">{para}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmploymentHistory; 