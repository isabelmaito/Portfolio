import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import './Sobre.css';

const Sobre = () => {
  const qualities = [
    {
      icon: <Code2 size={32} />,
      title: 'Código Limpo',
      description: 'Escrevo código legível, manutenível e seguindo as melhores práticas'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e soluções criativas'
    },
    {
      icon: <Users size={32} />,
      title: 'Trabalho em Equipe',
      description: 'Colaborativo e comunicativo, valorizando o trabalho em time'
    },
    {
      icon: <Award size={32} />,
      title: 'Qualidade',
      description: 'Comprometido em entregar projetos de alta qualidade'
    }
  ];

  return (
    <div className="sobre">
      <div className="sobre-container">
        <div className="section-header">
          <h1 className="section-title">
            Quem <span className="gradient-text">Sou Eu</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        <div className="sobre-grid">
          <div className="sobre-image">
            <div className="profile-card">
              <div className="profile-placeholder">
                <div className="profile-icon">👨‍💻</div>
              </div>
              <div className="profile-info">
                <h3>Desenvolvedor Full Stack</h3>
                <p className="profile-subtitle">Apaixonado por tecnologia</p>
              </div>
            </div>
          </div>

          <div className="sobre-content">
            <p className="sobre-text">
              Olá! Sou um desenvolvedor apaixonado por criar experiências digitais incríveis. 
              Com experiência em desenvolvimento web full stack, transformo ideias em realidade 
              através de código limpo e eficiente.
            </p>
            <p className="sobre-text">
              Minha jornada na programação começou com curiosidade e se transformou em uma 
              paixão que me motiva a aprender constantemente. Trabalho com diversas tecnologias 
              modernas e estou sempre explorando novas ferramentas para melhorar minhas habilidades.
            </p>
            <p className="sobre-text">
              Acredito que o desenvolvimento de software vai além do código - trata-se de 
              resolver problemas reais e criar soluções que fazem a diferença na vida das pessoas.
            </p>

            <div className="stats">
              <div className="stat">
                <div className="stat-number">3+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projetos Concluídos</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Tecnologias</div>
              </div>
            </div>
          </div>
        </div>

        <div className="qualities">
          <h2 className="qualities-title">O que me destaca</h2>
          <div className="qualities-grid">
            {qualities.map((quality, index) => (
              <div key={index} className="quality-card">
                <div className="quality-icon">{quality.icon}</div>
                <h3 className="quality-title">{quality.title}</h3>
                <p className="quality-description">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
