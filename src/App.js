import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Brain, Sun, Moon } from 'lucide-react';
import './styles/animations.css';


const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden ${className}`}
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
  return <p className="text-gray-600 dark:text-gray-300">{children}</p>;
};

const CardContent = ({ children }) => {
  return <div className="p-6">{children}</div>;
};  

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [filter]);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const projects = [
    {
      title: "Braindecode",
      description: "A forked repo that extends existing functionality to cater to multiple datasets, settings EEG montages, selecting channels, and 3D plotting the results of the clustered model.",
      category: "dl",
      github: "https://github.com/etiennegalea/braindecode",
      tags: ["PyTorch", "Deep Learning", "self-supervised", "EEG"]
    },
    {
      title: "Housing Scraper",
      description: "Web scraper that collects and categorizes house listings from specified sources using Beautiful Soup, Requests, Pandas, and scikit-learn.",
      category: "scraping",
      github: "https://github.com/etiennegalea/housing-scraper",
      tags: ["Python", "BeautifulSoup", "scikit-learn", "Docker"]
    },
    {
      title: "GA Knapsack in C++",
      description: "This code served as a precursor to better understand the inner workings of genetic algorithms by solving the Knapsack problem with a genetic algorithm in C++.",
      category: "engineering",
      github: "https://github.com/etiennegalea/GA_Knapsack",
      tags: ["C++", "Genetic AI"]
    },
    {
      title: "AI-vians",
      description: "A Generative Adversarial Network (GAN) implementation for generating bird images using PyTorch.",
      category: "dl",
      github: "https://github.com/etiennegalea/gan_birds",
      tags: ["Python", "PyTorch", "GAN"]
    }
    // {
    //   title: "Image Classification API",
    //   description: "REST API for real-time image classification using TensorFlow and FastAPI.",
    //   category: "dl",
    //   github: "https://github.com/username/image-classifier",
    //   demo: "https://api-demo.example.com",
    //   tags: ["TensorFlow", "FastAPI", "Docker"]
    // }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'dl':
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
    <div className={`portfolio-container min-h-screen p-8 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-gray-700" />
        )}
      </button>
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
          {['all', 'dl', 'scraping', 'engineering'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-button px-4 py-2 rounded-lg ${
                filter === category ? 'bg-blue-600 text-white active' : 'bg-white'
              }`}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'dl' ? 'Deep Learning' :
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
