import { ArrowDown, Github, Linkedin, Mail, Code2, Palette } from 'lucide-react';
import FotoPerfil from '../assets/Foto_eu_perfil.jpeg';
import './Home.css';

export function Home({ darkMode }) {
  return (
    <section className={`hero-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="hero-container">
        <div className="hero-content">
          {/* Photo */}
          <div className="photo-wrapper">
            <div className="photo-container">
              <div className="photo-border">
                <div className={`photo-border-inner ${darkMode ? 'dark' : 'light'}`}></div>
              </div>
              
              <div className="photo-glow"></div>
              
              <div className="photo-frame">
                <img
                  className="photo"
                  src={FotoPerfil}
                  alt="Isabel Maito"
                />
              </div>

              <div className="icon-decorator top-right purple">
                <Palette className="w-6 h-6" />
              </div>
              
              <div className="icon-decorator bottom-left pink">
                <Code2 className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="hero-text">
            <div className={`badge ${darkMode ? 'dark' : 'light'}`}>
              Desenvolvedora Fullstack & Designer
            </div>
            
            <h1 className={`hero-title ${darkMode ? 'dark' : 'light'}`}>
              Isabel Maito
            </h1>
            
            <p className={`hero-description ${darkMode ? 'dark' : 'light'}`}>
              Combinando habilidades de fullstack com design criativo,
              transformando conceitos complexos em soluções web dinâmicas e centradas no usuário.              
            </p>



            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/isabelmaito"
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${darkMode ? 'dark' : 'light'}`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/isabelmaito/"
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${darkMode ? 'dark' : 'light'}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:maitoisabel@gmail.com"
                className={`social-link ${darkMode ? 'dark' : 'light'}`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* CTA Buttons */}
            <div className="cta-buttons">
              <a href="#portfolio" className="btn btn-primary">
                Ver Projetos
              </a>
              <a 
                href="#sobre" 
                className={`btn btn-secondary ${darkMode ? 'dark' : 'light'}`}
              >
                Sobre Mim
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
