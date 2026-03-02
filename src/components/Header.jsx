import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const BrazilFlag = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" style={{ display: 'inline', marginRight: '4px' }}>
    <rect width="16" height="12" fill="#009c3b" />
    <polygon points="8,1 14.5,6 8,11 1.5,6" fill="#ffd700" />
    <ellipse cx="8" cy="6" rx="2.8" ry="1.6" fill="#002776" />
    <text x="8" y="6.8" fontSize="2" fill="#ffffff" textAnchor="middle" fontWeight="bold">.</text>
  </svg>
);

const UKFlag = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" style={{ display: 'inline', marginRight: '4px' }}>
    <rect width="16" height="12" fill="#012169" />
    <polygon points="0,0 16,0 16,12 0,12" fill="#012169" />
    <polygon points="0,0 16,12 0,12 16,0" fill="#FFF" opacity="0.2" />
    <rect x="6.67" y="0" width="2.66" height="12" fill="#FFFFFF" />
    <rect x="0" y="5" width="16" height="2" fill="#FFFFFF" />
    <rect x="7" y="0" width="2" height="12" fill="#C8102E" />
    <rect x="0" y="5.33" width="16" height="1.34" fill="#C8102E" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detectar seção ativa
      const sections = ['inicio', 'sobre', 'habilidades', 'contato'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: 'inicio', label: t('header.home') },
    { path: 'sobre', label: t('header.about') },
    { path: 'habilidades', label: t('header.skills') },
    { path: 'contato', label: t('header.contact') }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const isActive = (path) => activeSection === path;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <button 
          onClick={() => scrollToSection('inicio')} 
          className="logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span className="logo-bracket">{'<'}</span>
          Isabel Maito
          <span className="logo-bracket">{'/>'}</span>
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => scrollToSection(item.path)}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            {language === 'pt' ? (
              <>
                <UKFlag /> EN
              </>
            ) : (
              <>
                <BrazilFlag /> PT
              </>
            )}
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
