import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Brain, Sun, Moon, ArrowUp } from 'lucide-react';
import './styles/animations.css';
import './styles/App.css';
import References from './components/References';
import Certificates from './components/Certificates';
import ExperienceEducation from './components/ExperienceEducation';

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
  const [activeTab, setActiveTab] = useState('portfolio');
  const [visibleTabs, setVisibleTabs] = useState({
    portfolio: true,
    experience: true,
    references: true,
    certificates: true
  });
  
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling
    });
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
      title: "AI-vians",
      description: "A Generative Adversarial Network (GAN) implementation for generating bird images using PyTorch.",
      category: "dl",
      github: "https://github.com/etiennegalea/gan_birds",
      tags: ["Python", "PyTorch", "GAN"]
    },
    {
      title: "GA Knapsack in C++",
      description: "This code served as a precursor to better understand the inner workings of genetic algorithms by solving the Knapsack problem with a genetic algorithm in C++.",
      category: "engineering",
      github: "https://github.com/etiennegalea/GA_Knapsack",
      tags: ["C++", "Genetic AI"]
    },
    {
      title: "Bird-Stream",
      description: "Live video stream of birds feeding using a raspberry pi, websocket/webrtc, and a lot of bird seed.",
      category: "engineering",
      github: "https://github.com/etiennegalea/bird-stream",
      tags: ["Python", "React", "FastAPI", "Docker", "WebSockets"]
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

  const tabs = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience & Education' },
    { id: 'references', label: 'References' },
    { id: 'certificates', label: 'Certificates' }
  ];

  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={`portfolio-container min-h-screen p-8 ${isDark ? 'dark bg-cyan-950' : 'bg-slate-50'}`}>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto">
          <Card className="about-card">
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src="/people/me.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-zinc-50' : 'text-black'}`}>
                    Hi, I'm Etienne 👋
                  </h2>
                  <p className={`mb-4 ${isDark ? 'text-zinc-50' : 'text-gray-600'}`}>
                    I'm a Software Engineer passionate about building and developing AI solutions. With expertise in deep learning, data engineering, and software development, I focus on creating efficient and scalable solutions.
                    Here you can find some of my personal projects where I explore new technologies and build AI solutions.
                  </p>
                  <p className={`${isDark ? 'text-zinc-50' : 'text-gray-600'}`}>
                    Currently working on advanced ML projects while exploring new technologies in computer vision and generative AI.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Responsive Tab Navigation */}
        <div className="tab-navigation-container max-w-4xl mx-auto mb-8 rounded-lg">
          {/* Mobile Tab Selector */}
          <div className="md:hidden mb-4">
            <button 
              className={`w-full p-3 rounded-lg flex justify-between items-center ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span>{tabs.find(tab => tab.id === activeTab)?.label || 'Select Tab'}</span>
              <svg 
                className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className={`mt-2 rounded-lg overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                {tabs.map(tab => (
                  visibleTabs[tab.id] && (
                    <button
                      key={tab.id}
                      className={`w-full p-3 text-left border-b last:border-b-0 ${
                        activeTab === tab.id 
                          ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800' 
                          : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {tab.label}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden md:flex tab-navigation">
            {tabs.map(tab => (
              visibleTabs[tab.id] && (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              )
            ))}
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 'portfolio' && visibleTabs.portfolio && (
            <div className="portfolio-section">
              {/* Filter Controls */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex justify-start gap-4 overflow-x-auto pb-2 px-4 scrollbar-hide">
                  {['all', 'dl', 'scraping', 'engineering'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`filter-button px-4 py-2 rounded-lg whitespace-nowrap flex-shrink-0 transition-colors ${
                        filter === category 
                          ? 'bg-blue-600 text-white shadow-md'
                          : isDark 
                            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                            : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
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
                            className={`tag px-2 py-1 text-sm rounded-md ${isDark 
                              ? 'bg-gray-700 text-gray-200' 
                              : 'bg-gray-200 text-gray-800'}`}
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
                          className={`project-link flex items-center gap-2 hover:text-blue-600 ${isDark ? 'text-zinc-50' : 'text-gray'}`}
                        >
                          <Github className="h-5 w-5" />
                          Code
                        </a>
                        {project.demo && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project-link flex items-center gap-2 hover:text-blue-600 ${isDark ? 'text-zinc-50' : 'text-gray'}`}
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
          )}
          
          {activeTab === 'experience' && visibleTabs.experience && (
            <ExperienceEducation />
          )}
          
          {activeTab === 'references' && visibleTabs.references && (
            <References />
          )}
          
          {activeTab === 'certificates' && visibleTabs.certificates && (
            <Certificates />
          )}
        </div>


        {/* Contact Footer */}
        <footer className="max-w-4xl mx-auto mt-16 text-center">
          <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="mb-6">I'm always interested in new opportunities and collaborations</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a
                href="mailto:egalea.11@gmail.com"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="https://github.com/etiennegalea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Github className="h-6 w-6" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/etienne-galea-1265b791/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01642f900942f42674?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path>
                </svg>
                upwork
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Fixed Buttons Container (Moved Outside) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          {/* Scroll-to-Top Button (Always Visible) */}
          <button
            onClick={scrollToTop}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md`}
            aria-label="Scroll to top"
          >
            <ArrowUp className={`h-6 w-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
          </button>

          {/* Theme Toggle Button (Always Visible) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </button>
      </div>
    </>
  );
};

export default Portfolio;
