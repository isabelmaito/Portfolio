import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoHorizontalBranco from '../assets/logoHorizontalBranco.png';
import './Footer.css';

export function Footer({ darkMode }) {
  const { t } = useTranslation();

  return (
    <footer className={`footer ${
      darkMode ? 'footer-dark' : 'footer-light'
    }`}>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="footer-brand-wrapper">
              <img 
                src={darkMode ? logoHorizontalBranco : logoHorizontalBranco}
                alt="Isabel Maito - Designer & Developer"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-text footer-text-spaced">
              {t('footer.location')}
            </p>

          </div>

          <div className="footer-right">
            <h4 className="footer-heading">{t('footer.heading')}</h4>
            <p className="footer-text footer-text-spaced">
              {t('footer.subtitle')}
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/isabelmaito"
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-social-link footer-social-github ${
                  darkMode 
                    ? 'footer-social-dark' 
                    : 'footer-social-light'
                }`}
                aria-label="GitHub"
              >
                <Github className="footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/isabelmaito/"
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-social-link footer-social-linkedin ${
                  darkMode 
                    ? 'footer-social-dark' 
                    : 'footer-social-light'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="footer-social-icon" />
              </a>
              <a
                href="mailto:maitoisabel@gmail.com"
                className={`footer-social-link footer-social-email ${
                  darkMode 
                    ? 'footer-social-dark' 
                    : 'footer-social-light'
                }`}
                aria-label="Email"
              >
                <Mail className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
