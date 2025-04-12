
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-none">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-blue/10 text-portfolio-blue">
                  <Briefcase size={20} />
                </div>
              </div>
              
              <div className="flex-1 border-l-2 border-gray-200 pl-6 pb-6 relative">
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-portfolio-blue rounded-full -left-[7px] top-1"></div>
                
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h4 className="text-portfolio-blue font-semibold">{job.company}</h4>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
