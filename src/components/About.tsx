
import { personalInfo, education } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-700 mb-6">
              I'm constantly learning and exploring new technologies to stay at the cutting edge of web development. My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <Mail size={18} className="text-portfolio-blue mr-3" />
                <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-portfolio-blue transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-portfolio-blue mr-3" />
                <a href={`tel:${personalInfo.phone}`} className="text-gray-700 hover:text-portfolio-blue transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-portfolio-blue mr-3" />
                <span className="text-gray-700">{personalInfo.location}</span>
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
                  <div className="flex justify-between text-gray-500 mb-2">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
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
