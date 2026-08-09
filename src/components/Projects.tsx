import { projects } from "@/lib/data";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const initialProjectCount = 6;
  const visibleProjects = showAllProjects ? projects : projects.slice(0, initialProjectCount);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card text-card-foreground rounded-lg overflow-hidden border border-border shadow-sm hover:border-portfolio-blue/60 hover:shadow-lg transition duration-300"
            >
              <div className="relative h-84 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.liveLink && (
                    project.liveLink === "-" ? (
                      <button 
                        disabled
                        className="btn-primary inline-flex items-center text-sm opacity-50 cursor-not-allowed"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={16} className="ml-2" />
                      </button>
                    ) : (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    )
                  )}
                  
                  {project.repoLink && (
                    <a 
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center text-sm"
                    >
                      <span>Code</span>
                      <Github size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > initialProjectCount && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              aria-expanded={showAllProjects}
              className="btn-outline inline-flex items-center"
            >
              <span>{showAllProjects ? "Show fewer projects" : `View more projects (${projects.length - initialProjectCount})`}</span>
              {showAllProjects ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
