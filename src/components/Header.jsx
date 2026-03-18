import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoHorizontal from '../assets/logoHorizontal.png';
import logoHorizontalBranco from '../assets/logoHorizontalBranco.png';
import './Header.css';

export function Header({ darkMode, toggleDarkMode }) {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: t('header.menu.about'), href: '#sobre' },
    { label: t('header.menu.skills'), href: '#habilidades' },
    { label: t('header.menu.portfolio'), href: '#portfolio' }
  ];

  const selectedLanguage = i18n.language?.startsWith('zh')
    ? 'zh-CN'
    : i18n.language?.startsWith('es')
      ? 'es'
    : i18n.language === 'en'
      ? 'en'
      : 'pt-BR';

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
              aria-label={t('header.aria.toggleTheme')}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className={`language-select ${darkMode ? 'dark' : 'light'}`}
              aria-label={t('header.aria.languageSelector')}
            >
              <option value="pt-BR">{t('header.languageOptions.ptBR')}</option>
              <option value="en">{t('header.languageOptions.en')}</option>
              <option value="es">{t('header.languageOptions.es')}</option>
              <option value="zh-CN">{t('header.languageOptions.zhCN')}</option>
            </select>
          </nav>

          <div className="mobile-controls">
            <button
              onClick={toggleDarkMode}
              className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
              aria-label={t('header.aria.toggleTheme')}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className={`language-select ${darkMode ? 'dark' : 'light'}`}
              aria-label={t('header.aria.languageSelector')}
            >
              <option value="pt-BR">{t('header.languageOptions.ptBR')}</option>
              <option value="en">{t('header.languageOptions.en')}</option>
              <option value="es">{t('header.languageOptions.es')}</option>
              <option value="zh-CN">{t('header.languageOptions.zhCN')}</option>
            </select>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`menu-button ${darkMode ? 'dark' : 'light'}`}
              aria-label={mobileMenuOpen ? t('header.aria.closeMenu') : t('header.aria.openMenu')}
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
