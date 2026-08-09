import { experience } from "@/lib/data";
import { Download } from "lucide-react";
import { useState } from "react";

type CompanyLogoProps = {
  company: string;
  logo: string;
};

const CompanyLogo = ({ company, logo }: CompanyLogoProps) => {
  const [hasFailed, setHasFailed] = useState(false);
  const initials = company
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-1.5 dark:bg-white">
      {hasFailed ? (
        <span className="text-sm font-bold text-portfolio-blue" aria-label={`${company} logo unavailable`}>
          {initials}
        </span>
      ) : (
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-full w-full object-contain"
          onError={() => setHasFailed(true)}
        />
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-none">
                <CompanyLogo company={job.company} logo={job.logo} />
              </div>
              
              <div className="flex-1 border-l-2 border-border pl-6 pb-6 relative">
                {/* Timeline dot */}
                <div className="absolute w-3 h-3 bg-portfolio-blue rounded-full -left-[7px] top-1"></div>
                
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h4 className="text-portfolio-blue font-semibold">{job.company}</h4>
                  <span className="text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{job.location}</p>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                
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
        
        <div className="mt-12 text-center flex flex-row justify-center gap-4">
          <a 
            href="/fk_cv.pdf" 
            download="Filip Karika CV.pdf"
            className="btn-outline inline-flex items-center"
          >
            <span>CV</span>
            <Download size={16} className="ml-2" />
          </a>
          <a 
            href="/fk_ml.pdf" 
            download="Filip Karika Motivational Letter.pdf"
            className="btn-outline inline-flex items-center"
          >
            <span>Motivational Letter</span>
            <Download size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
