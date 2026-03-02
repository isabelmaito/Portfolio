import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          {t('footer.madeWith')} <Heart className="heart-icon" size={16} /> {t('footer.by')}
        </p>
        <p className="footer-year">&copy; {currentYear} {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
