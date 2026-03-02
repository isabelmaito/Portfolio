import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import profilePhoto from '../assets/Foto_eu_perfil.jpeg';
import './Sobre.css';

const Sobre = () => {
  const { t } = useLanguage();

  const qualities = [
    {
      icon: <Code2 size={32} />,
      title: t('about.qualitiesItems.cleanCode.title'),
      description: t('about.qualitiesItems.cleanCode.description')
    },
    {
      icon: <Rocket size={32} />,
      title: t('about.qualitiesItems.innovation.title'),
      description: t('about.qualitiesItems.innovation.description')
    },
    {
      icon: <Users size={32} />,
      title: t('about.qualitiesItems.teamwork.title'),
      description: t('about.qualitiesItems.teamwork.description')
    },
    {
      icon: <Award size={32} />,
      title: t('about.qualitiesItems.quality.title'),
      description: t('about.qualitiesItems.quality.description')
    }
  ];

  return (
    <div className="sobre">
      <div className="sobre-container">
        <div className="section-header">
          <h1 className="section-title">
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
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
                <h3>{t('about.role')}</h3>
                <p className="profile-subtitle">{t('about.profileSubtitle')}</p>
              </div>
            </div>
          </div>

          <div className="sobre-content">
            <p className="sobre-text">
              {t('about.paragraph1')}
            </p>
            <p className="sobre-text">
              {t('about.paragraph2')}
            </p>
            <p className="sobre-text">
              {t('about.paragraph3')}
            </p>

            <div className="stats">
              <div className="stat">
                <div className="stat-number">1+</div>
                <div className="stat-label">{t('about.stats.experience')}</div>
              </div>
              <div className="stat">
                <div className="stat-number">3+</div>
                <div className="stat-label">{t('about.stats.projects')}</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">{t('about.stats.technologies')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="qualities">
          <h2 className="qualities-title">{t('about.qualities')}</h2>
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
