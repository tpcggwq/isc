import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME', icon: 'home' },
    { id: 'about', label: 'ABOUT', icon: 'info' },
    { id: 'committees', label: 'COMMITTEES', icon: 'groups' },
    { id: 'registration', label: 'REGISTRATION', icon: 'edit' },
    { id: 'letters', label: 'LETTERS', icon: 'mail' },
    { id: 'contact', label: 'CONTACT', icon: 'phone' }
  ];

  return (
    <header className="transition-all duration-300" style={{ height: '23px', paddingTop: '30px', paddingBottom: '45px' }}>
      <div className="max-w-40xl mx-auto px-4 sm:px-6 lg:px-8" style={{ height: '100%' }}>
      <div className="flex justify-between items-center h-21">
          {/* Logo */}
          <div className="flex items-center mr-0.1">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjfbPifjwIYGrTwpZTRuHBX2KBYPQChoBqA&s" 
              alt="ISCMUN Logo" 
              className="h-12 w-15 rounded-full object-cover"
            />
            <span className="ml-5 text-xl font-bold text-white">𝙄𝙎𝘾𝙈𝙐𝙉'25</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end space-x-0 ml-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-blue-400 hover:underline font-medium transition-colors duration-200 text-lg tracking-wide flex items-center gap-1 px-4 py-2"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-white hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center gap-1"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;