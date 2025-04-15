import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Database, Brain, Sun, Moon, ArrowUp } from 'lucide-react';
import './styles/animations.css';
import './styles/App.css';
import References from './components/References';
import Certificates from './components/Certificates';
import ExperienceEducation from './components/ExperienceEducation';
import StarsBackground from './components/StarsBackground';
import { EmailIcon, GitHubIcon, LinkedInIcon, UpworkIcon } from './components/Icons';

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
  const [visibleTabs] = useState({
    portfolio: true,
    experience: true,
    references: true,
    certificates: true
  });
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [filter]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
      <div className={`portfolio-container relative min-h-screen p-8 ${isDark 
        ? 'dark bg-gradient-to-br from-[#0f3343] from-40% to-[#051e29]' /* Dark gradient: cyan-950 to darker cyan */
        : 'bg-gradient-to-br from-slate-50 from-40% to-slate-300' /* Light mode: slate-50 to slate-200 */
      }`}>

        {isDark && <StarsBackground numberOfStars={200} />}

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
                          ? (isDark 
                              ? 'bg-gray-800 text-white shadow-md'
                              : 'bg-blue-600 text-white shadow-md'
                            )
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
                          <GitHubIcon className="h-5 w-5" />
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
                <EmailIcon className="h-6 w-6" />
                Email
              </a>
              <a
                href="https://github.com/etiennegalea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <GitHubIcon className="h-6 w-6" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/etienne-galea-1265b791/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon className="h-6 w-6" />
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01642f900942f42674?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
              >
                <UpworkIcon className="h-6 w-6" />
                Upwork
              </a>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          <button
            onClick={scrollToTop}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md`}
            aria-label="Scroll to top"
          >
            <ArrowUp className={`h-6 w-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
          </button>

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
