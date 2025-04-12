
import { personalInfo } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8">
          <a 
            href="#home" 
            className="w-12 h-12 bg-portfolio-purple rounded-full flex items-center justify-center hover:bg-portfolio-dark-purple transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {personalInfo.name}
          </h2>
          <p className="text-gray-400">
            {personalInfo.title}
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href={personalInfo.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
