import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Habilidades.css';

const Habilidades = () => {
  const { t } = useLanguage();

  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'React Native', level: 75 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST API', level: 90 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
      { name: 'Linux', level: 80 },
      { name: 'AWS', level: 65 }
    ]
  };

  const categories = [
    { key: 'frontend', title: t('skills.categories.frontend'), icon: '🎨' },
    { key: 'backend', title: t('skills.categories.backend'), icon: '⚙️' },
    { key: 'tools', title: t('skills.categories.tools'), icon: '🛠️' }
  ];

  return (
    <div className="habilidades">
      <div className="habilidades-container">
        <div className="section-header">
          <h1 className="section-title">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((category, idx) => (
            <div key={category.key} className="category-section" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2 className="category-title">{category.title}</h2>
              </div>
              <div className="skills-list">
                {skills[category.key].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${idx * 0.1 + index * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-section">
          <h2 className="learning-title">{t('skills.learning')}</h2>
          <p className="learning-text">
            {t('skills.learningText')}
          </p>
          <div className="learning-tags">
            <span className="tag">Next.js</span>
            <span className="tag">GraphQL</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">Web3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
