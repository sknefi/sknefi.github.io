
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-portfolio-blue">
          John<span className="text-portfolio-dark">Doe</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-portfolio-blue transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 flex flex-col bg-white shadow-lg py-4 md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 hover:bg-gray-50 hover:text-portfolio-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
