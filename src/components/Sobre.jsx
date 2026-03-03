import { GraduationCap } from 'lucide-react';
import './Sobre.css';

export function Sobre({ darkMode }) {
  const metrics = [
    { number: "1", label: "Anos de Experiência" },
    { number: "3", label: "Projetos Concluídos" },
    { number: "15", label: "Tecnologias" }
  ];

  const education = [
    {
      degree: "Desenvolvimento de Software e Multiplataforma",
      institution: "Fatec Votorantim",
      period: "Formação prevista para Dezembro/2026",
      status: "active"
    },
    {
      degree: "Hidráulica e Saneamento Ambiental",
      institution: "Fatec São Paulo",
      period: "Agosto/2017 - Agosto/2023",
      status: "interrupted"
    },
    {
      degree: "Design Gráfico",
      institution: "Universidade Paulista",
      period: "Graduada em 2009",
      status: "completed"
    }
  ];

  const languages = [
    { name: "🇧🇷 Português", level: "Nativo" },
    { name: "🇺🇸 Inglês", level: "Intermediário" },
    { name: "🇪🇸 Espanhol", level: "Básico" },
    { name: "🇨🇳 Mandarim", level: "Iniciante" }
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active':
        return 'Em andamento';
      case 'completed':
        return 'Concluído';
      case 'interrupted':
        return 'Interrompido';
      default:
        return '';
    }
  };

  return (
    <section id="sobre" className={`about-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-container">
        <div className="section-header">
          <h2 className={`section-title ${darkMode ? 'dark' : 'light'}`}>
            Sobre Mim
          </h2>
          <p className={`section-description ${darkMode ? 'dark' : 'light'}`}>
            Minha trajetória profissional é definida pela convergência entre a comunicação visual e a lógica computacional.
            Com mais de uma década de atuação em Design Gráfico, desenvolvi um olhar apurado para interfaces e usabilidade, 
            competência que hoje aplico diretamente na construção de softwares intuitivos e visualmente coerentes.
            Minha passagem como Assistente de Engenharia, embora não tenha culminado na graduação da área, foi fundamental 
            para estruturar meu pensamento analítico, ensinando-me a lidar com dados complexos, relatórios técnicos e resolução de problemas sob pressão.

            <br /><br />

            Atualmente, dedico-me integralmente à transição para o Desenvolvimento de Software, cursando Tecnologia em 
            Desenvolvimento Multiplataforma na Fatec e atuando como desenvolvedora freelancer. Tenho experiência prática na 
            entrega de soluções Fullstack reais, como o desenvolvimento completo de sistemas para o setor imobiliário, onde utilizei React, 
            Material UI e Styled Components no front-end, integrados a um back-end em Node.js (Express) e bancos de dados MySQL com Sequelize.

            <br /><br />

            Meu objetivo é atuar como Desenvolvedora de Software, trazendo para o time não apenas o conhecimento técnico em JavaScript, 
            Python e frameworks modernos, mas também a maturidade de quem entende o produto de ponta a ponta, do protótipo no Figma à implementação do código e deploy.
            Busco desafios que valorizem a capacidade de adaptação, o rigor técnico e a visão centrada na experiência do usuário.
          </p>
        </div>

        {/* Metrics */}
        <div className="metrics-section">
          <div className="metrics-container">
            {metrics.map((metric, index) => (
              <div key={index} className={`metric-item ${darkMode ? 'dark' : 'light'}`}>
                <div className="metric-number">{metric.number}<span>+</span></div>
                <div className={`metric-label ${darkMode ? 'dark' : 'light'}`}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className={`section-title ${darkMode ? 'dark' : 'light'}`} style={{ fontSize: '1.875rem', marginBottom: '2rem' }}>
            Formação Acadêmica
          </h3>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`education-card ${darkMode ? 'dark' : 'light'}`}
              >
                <div className={`education-icon ${darkMode ? 'dark' : 'light'}`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <h4 className={`education-degree ${darkMode ? 'dark' : 'light'}`}>
                  {edu.degree}
                </h4>
                
                <p className={`education-institution ${darkMode ? 'dark' : 'light'}`}>
                  {edu.institution}
                </p>
                
                <p className={`education-period ${darkMode ? 'dark' : 'light'}`}>
                  {edu.period}
                </p>
                
                <span className={`education-status ${edu.status} ${darkMode ? 'dark' : 'light'}`}>
                  {getStatusLabel(edu.status)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="languages-section">
          <h3 className={`languages-title ${darkMode ? 'dark' : 'light'}`}>
            Idiomas
          </h3>
          
          <div className="languages-list">
            {languages.map((lang, index) => (
              <div key={index} className={`language-item ${darkMode ? 'dark' : 'light'}`}>
                <span className={`language-name ${darkMode ? 'dark' : 'light'}`}>
                  {lang.name}
                </span>
                <span className={`language-level ${darkMode ? 'dark' : 'light'}`}>
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
