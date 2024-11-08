import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';
import './styles/animations.css';


const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="p-6 border-b">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="text-xl font-bold mb-2">{children}</h3>;
};

const CardDescription = ({ children }) => {
  return <p className="text-gray-600">{children}</p>;
};

const CardContent = ({ children }) => {
  return <div className="p-6">{children}</div>;
};  

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [filter]);

  const projects = [
    {
      title: "Sentiment Analysis Model",
      description: "Deep learning model built with PyTorch for analyzing customer feedback sentiment. Achieves 94% accuracy on test data.",
      category: "ml",
      github: "https://github.com/username/sentiment-analysis",
      demo: "https://demo-sentiment.example.com",
      tags: ["PyTorch", "NLP", "Deep Learning"]
    },
    {
      title: "News Aggregator",
      description: "Web scraper that collects and categorizes news articles from multiple sources using Beautiful Soup and scikit-learn.",
      category: "scraping",
      github: "https://github.com/username/news-aggregator",
      tags: ["Python", "BeautifulSoup", "scikit-learn"]
    },
    {
      title: "Distributed Task Queue",
      description: "High-performance task queue system built with Go and Redis for handling millions of background jobs.",
      category: "engineering",
      github: "https://github.com/username/task-queue",
      tags: ["Go", "Redis", "Microservices"]
    },
    {
      title: "Image Classification API",
      description: "REST API for real-time image classification using TensorFlow and FastAPI.",
      category: "ml",
      github: "https://github.com/username/image-classifier",
      demo: "https://api-demo.example.com",
      tags: ["TensorFlow", "FastAPI", "Docker"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'ml':
        return <Brain className="h-6 w-6" />;
      case 'scraping':
        return <Database className="h-6 w-6" />;
      case 'engineering':
        return <Code className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container min-h-screen p-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Technical Portfolio</h1>
        <p className="text-xl text-gray-600 mb-8">
          Specializing in Machine Learning, Web Scraping, and Software Engineering
        </p>
      </header>

      {/* Filter Controls */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-center gap-4">
          {['all', 'ml', 'scraping', 'engineering'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-button px-4 py-2 rounded-lg ${
                filter === category ? 'bg-blue-600 text-white active' : 'bg-white'
              }`}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'ml' ? 'Machine Learning' :
               category === 'scraping' ? 'Web Scraping' : 'Engineering'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className={`project-card bg-white ${isLoading ? 'loading' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                {getCategoryIcon(project.category)}
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="tag px-2 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Github className="h-5 w-5" />
                  Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
