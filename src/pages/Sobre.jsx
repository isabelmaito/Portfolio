import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import profilePhoto from '../assets/Foto_eu_perfil.jpeg';
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
                <img src={profilePhoto} alt="Foto de Perfil" className="profile-photo" />
              </div>
              <div className="profile-info">
                <h3>Desenvolvedora Full Stack</h3>
                <p className="profile-subtitle">Estudante de Desenvolvimento de Software | Fullstack | FrontEnd | Designer Gráfico |</p>
              </div>
            </div>
          </div>

          <div className="sobre-content">
            <p className="sobre-text">
              Minha trajetória profissional é definida pela convergência entre a comunicação visual e a lógica computacional. 
              Com mais de uma década de atuação em Design Gráfico, desenvolvi um olhar apurado para interfaces e usabilidade, 
              competência que hoje aplico diretamente na construção de softwares intuitivos e visualmente coerentes. 
              Minha passagem como Assistente de Engenharia, embora não tenha culminado na graduação da área, 
              foi fundamental para estruturar meu pensamento analítico, ensinando-me a lidar com dados complexos, 
              relatórios técnicos e resolução de problemas sob pressão.
            </p>
            <p className="sobre-text">
              Atualmente, dedico-me integralmente à transição para o Desenvolvimento de Software, cursando Tecnologia em Desenvolvimento Multiplataforma na Fatec 
              e atuando como desenvolvedora freelancer. Tenho experiência prática na entrega de soluções Fullstack reais, 
              como o desenvolvimento completo de sistemas para o setor imobiliário, onde utilizei React, Material UI e Styled Components no front-end, 
              integrados a um back-end em Node.js (Express) e bancos de dados MySQL com Sequelize.

            </p>
            <p className="sobre-text">
              Meu objetivo é atuar como Desenvolvedora de Software, trazendo para o time não apenas o conhecimento técnico em JavaScript, Python e frameworks modernos,
              mas também a maturidade de quem entende o produto de ponta a ponta, do protótipo no Figma à implementação do código e deploy. 
              Busco desafios que valorizem a capacidade de adaptação, o rigor técnico e a visão centrada na experiência do usuário.
            </p>

            <div className="stats">
              <div className="stat">
                <div className="stat-number">1+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat">
                <div className="stat-number">3+</div>
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
