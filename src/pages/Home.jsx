import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="greeting">{t('home.greeting')}</div>
          <h1 className="title">
            <span className="gradient-text">{t('home.title')}</span>
            <br />
            {t('home.subtitle')}
          </h1>
          <p className="description">
            {t('home.description')}
          </p>
          <div className="cta-buttons">
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn btn-primary"
            >
              {t('home.contactButton')}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('sobre');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn btn-secondary"
            >
              {t('home.moreButton')}
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/isabelmaito" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/isabelmaito" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:maitoisabel@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-placeholder">
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span>{' '}
                <span className="code-operator">=</span> {'{'}
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name:</span>{' '}
                <span className="code-string">'Portfolio'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">passion:</span>{' '}
                <span className="code-string">'Design'</span>,
                <span className="code-string">'Coding'</span>,
                <span className="code-string">'Cats & Dogs'</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-property">skills:</span> [
                <span className="code-string">'React'</span>,
                <span className="code-string">'Node.js'</span>,
                <span className="code-string">'CSS'</span>,{' '}
                <span className="code-string">'JavaScript'</span>,
                <span className="code-string">'Python'</span>,
                <span className="code-string">'HTML'</span>
                ],
              </div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="scroll-indicator"
        onClick={() => {
          const element = document.getElementById('sobre');
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <ChevronDown className="bounce" size={32} />
      </div>
    </div>
  );
};

export default Home;
