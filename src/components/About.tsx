import { personalInfo, education } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="max-w-[1042px]:hidden">
              <p className="text-muted-foreground mb-6">
                I like working on the server-side parts of applications: designing APIs, connecting databases, handling authentication, and making sure the system is maintainable beyond the first working version.
              </p>
              <p className="text-muted-foreground mb-6">
                I am also interested in DevOps, deployment, Docker, Linux environments, and the practical details that make projects reliable in production. My goal is to build software that is clear, useful, and easy to improve over time.
              </p>
              <p className="text-muted-foreground mb-6">
                AI is part of my daily workflow, and I am especially interested in practical AI tooling such as MCPs, RAG systems, and ways to connect language models with real applications, data, and developer workflows.
              </p>
              <p className="text-muted-foreground mb-6">
                I try to push myself every day, contribute to software consistently, and keep improving while studying at university and 42 Prague. I am in my 20s, building discipline, experience, and technical depth step by step.
              </p>
              <p className="text-muted-foreground mb-6">
                In the future, I want to start my own startup and experience the full startup journey from the beginning.
              </p>
            </div>

            <div className="hidden max-w-[1042px]:block mb-6">
              <p className="text-muted-foreground mb-3">
                Full-stack developer passionate about creating innovative solutions.
              </p>
              <p className="text-muted-foreground mb-3">
                Experienced in modern web technologies and best practices.
              </p>
              <p className="text-muted-foreground mb-6">
                Committed to delivering efficient and user-friendly applications.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <Mail size={18} className="text-portfolio-blue mr-3" />
                <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-portfolio-blue transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-portfolio-blue mr-3" />
                <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-portfolio-blue transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-portfolio-blue mr-3" />
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary inline-block">Get In Touch</a>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-portfolio-blue pl-4">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <h5 className="text-portfolio-blue mb-1">{edu.institution}</h5>
                  <div className="flex justify-between text-muted-foreground mb-2">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
