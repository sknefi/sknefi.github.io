import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/lib/data";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-portfolio-light-blue/30 dark:to-slate-900"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block animate-wave origin-bottom-right mb-4">
          👋
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm{" "}
          <span className="text-portfolio-blue">{personalInfo.name}</span>
        </h1>

        <div className="w-16 h-1 bg-portfolio-blue mx-auto mb-6"></div>

        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
          <span className="typed-text">{personalInfo.title}</span>
        </h2>

        <p className="max-w-2xl mx-auto text-muted-foreground mb-10 animate-slide-up">
          {personalInfo.bio}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16 animate-slide-up">
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
          <a href="#projects" className="btn-outline">
            View My Work
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-20 animate-slide-up">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-portfolio-blue transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-portfolio-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <div>
            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-portfolio-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="animate-bounce">
          <a
            href="#about"
            className="inline-block text-portfolio-blue"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
