import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import logoHorizontal from '../assets/logoHorizontal.png';
import logoHorizontalBranco from '../assets/logoHorizontalBranco.png';
import './Footer.css';

export function Footer({ darkMode }) {
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
              Sorocaba - SP, Brasil
            </p>
            <p className="footer-text">
              maitoisabel@gmail.com
            </p>
            <p className="footer-text">
              +55 (11) 96362-6890
            </p>
          </div>
          
          <div className="footer-right">
            <h4 className="footer-heading">Vamos Conversar?</h4>
            <p className="footer-text footer-text-spaced">
              Entre em contato através das redes sociais
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
            Isabel Maito © 2026 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
