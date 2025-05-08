import React, { useState } from 'react';

const PortfolioOverview = () => {
  const [filter, setFilter] = useState('all');
  
  // Combine existing projects with new ones from the links
  const allProjects = [
    {
      title: "Almas.com.iq",
      description: "Full-stack enterprise solution with React frontend, NestJS backend, Flutter mobile app, and comprehensive admin dashboard.",
      image: "/api/placeholder/150/80",
      technologies: ["React", "NestJS", "Flutter", "MongoDB", "JWT", "RESTful API"],
      demo: "https://almas.com.iq/",
      type: "web & mobile",
      featured: true,
      priority: 1
    },
    {
      title: "Hoster.iq",
      description: "Complete hosting platform with React frontend and Node.js/Express backend. Includes domain registration and hosting management.",
      image: "/api/placeholder/150/80",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Payment APIs"],
      demo: "https://www.hoster.iq/",
      type: "web",
      featured: false,
      priority: 2
    },
    {
      title: "Aktco.com.iq",
      description: "Corporate website with custom dashboard solution. Features modern design, responsive layouts and comprehensive admin panel.",
      image: "/api/placeholder/150/80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Dashboard"],
      demo: "https://aktco.com.iq/",
      adminDemo: "https://dashboard.aktco.com.iq/",
      type: "web",
      featured: true,
      priority: 2
    },
    {
      title: "Alreef Alakdar",
      description: "Business website with modern design, responsive layouts and optimized performance.",
      image: "/api/placeholder/150/80",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      demo: "https://alreefalakdar.iq/",
      type: "web",
      featured: false,
      priority: 4
    },
    {
      title: "Malekat Al-Fadi Company",
      description: "Business website showcasing company services and products with responsive design.",
      image: "/api/placeholder/150/80",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: "https://malekatal-fadicompany.com.iq/",
      type: "web",
      featured: false,
      priority: 5
    },
    {
      title: "Sanabel Al-Diwan",
      description: "Full-stack solution with frontend website and admin panel for management.",
      image: "/api/placeholder/150/80",
      technologies: ["React", "Node.js", "MongoDB", "Admin Dashboard"],
      demo: "https://sanabel-aldiwan.iq/",
      adminDemo: "https://panel.sanabel-aldiwan.iq/",
      type: "web",
      featured: true,
      priority: 3
    },
    {
      title: "Taeen",
      description: "Modern business website with responsive design and optimized performance.",
      image: "/api/placeholder/150/80",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: "https://taeen.iq/",
      type: "web",
      featured: false,
      priority: 6
    },
    {
      title: "Sardar.iq",
      description: "Static website with modern design and optimized performance. Built with responsive layouts and animation effects.",
      image: "/api/placeholder/150/80",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: "http://sardar.iq/",
      type: "web",
      featured: false,
      priority: 7
    },
    {
      title: "Fahd Aljanub Gold Shop",
      description: "Static website for a gold shop with product showcasing, contact information, and business details.",
      image: "/api/placeholder/150/80",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: "https://fahdaljanub.com.iq/",
      type: "web",
      featured: true,
      priority: 8
    },
    {
      title: "Hoster Mobile App",
      description: "Full-featured mobile application for the Hoster.iq platform. Connects to backend API for domain management.",
      image: "/api/placeholder/150/80",
      technologies: ["Flutter", "REST API", "Mobile UI/UX", "State Management"],
      demo: null,
      type: "mobile",
      featured: false,
      priority: 9
    },
    {
      title: "Restaurant Menu QR App",
      description: "Full-stack solution with React Native frontend and Node.js backend. Includes QR code generation and order processing.",
      image: "/api/placeholder/150/80",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "QR Code API"],
      demo: null,
      type: "mobile",
      featured: true,
      priority: 10
    },
    {
      title: "The PowerZone",
      description: "Full-stack enterprise solution with React frontend, NestJS backend, and comprehensive admin dashboard.",
      image: "/api/placeholder/150/80",
      technologies: ["React", "NestJS", "MongoDB", "JWT", "RESTful API"],
      demo: "http://powerzonesolarenergy.com/",
      type: "web & mobile",
      featured: true,
      priority: 11
    }
  ];
  
  // Filter projects based on selection
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type.includes(filter));
  
  // Sort projects by priority
  const sortedProjects = [...filteredProjects].sort((a, b) => a.priority - b.priority);
  
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Professional Portfolio
        </h1>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-400">{allProjects.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-400">{allProjects.filter(p => p.featured).length}</div>
            <div className="text-gray-400 text-sm">Featured Works</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-400">{allProjects.filter(p => p.type === 'web' || p.type === 'web & mobile').length}</div>
            <div className="text-gray-400 text-sm">Web Projects</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-400">{allProjects.filter(p => p.type === 'mobile' || p.type === 'web & mobile').length}</div>
            <div className="text-gray-400 text-sm">Mobile Projects</div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-full ${filter === 'web' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Web Only
          </button>
          <button 
            onClick={() => setFilter('mobile')}
            className={`px-4 py-2 rounded-full ${filter === 'mobile' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Mobile Only
          </button>
          <button 
            onClick={() => setFilter('web & mobile')}
            className={`px-4 py-2 rounded-full ${filter === 'web & mobile' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Full Stack
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${project.featured ? 'border border-purple-500/30' : 'border border-gray-700'}`}
            >
              <div className="h-32 bg-gray-700 flex items-center justify-center">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.featured && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </a>
                  )}
                  {project.adminDemo && (
                    <a 
                      href={project.adminDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                      Admin Panel
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Section */}
        <div className="mt-12 p-6 bg-gray-800 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-blue-400">Frontend</h3>
              <ul className="text-sm text-gray-300 mt-2">
                <li>React / Next.js</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>
            
            <div className="p-3 bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-green-400">Backend</h3>
              <ul className="text-sm text-gray-300 mt-2">
                <li>Node.js / Express</li>
                <li>NestJS</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Authentication Systems</li>
              </ul>
            </div>
            
            <div className="p-3 bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-yellow-400">Database</h3>
              <ul className="text-sm text-gray-300 mt-2">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Database Design</li>
                <li>Data Modeling</li>
              </ul>
            </div>
            
            <div className="p-3 bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-purple-400">Solutions</h3>
              <ul className="text-sm text-gray-300 mt-2">
                <li>Full-Stack Development</li>
                <li>Enterprise Solutions</li>
                <li>E-commerce Platforms</li>
                <li>Payment Integrations</li>
                <li>Admin Dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;