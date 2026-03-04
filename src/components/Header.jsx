import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import logoHorizontal from '../assets/logoHorizontal.png';
import logoHorizontalBranco from '../assets/logoHorizontalBranco.png';
import './Header.css';

export function Header({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Portfolio', href: '#portfolio' }
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <div className="header-content">
          <a href="#" className="logo-link">
            <img 
              src={darkMode ? logoHorizontalBranco : logoHorizontal}
              alt="Isabel Maito - Designer & Developer"
              className="logo-image"
            />
          </a>

          <nav className="nav-desktop">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-link ${darkMode ? 'dark' : 'light'}`}
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="mobile-controls">
            <button
              onClick={toggleDarkMode}
              className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`menu-button ${darkMode ? 'dark' : 'light'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="nav-mobile">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleMenuClick}
                className={`nav-link ${darkMode ? 'dark' : 'light'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
