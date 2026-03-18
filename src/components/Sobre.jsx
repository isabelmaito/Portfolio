import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import brazilFlag from '../assets/brazilflag.png';
import usaFlag from '../assets/usaflag.png';
import spainFlag from '../assets/spainflag.png';
import chinaFlag from '../assets/chinaflag.png';
import './Sobre.css';

export function Sobre({ darkMode }) {
  const { t } = useTranslation();

  const metrics = [
    { number: '1', label: t('about.metrics.experience') },
    { number: '3', label: t('about.metrics.projects') },
    { number: '15', label: t('about.metrics.technologies') }
  ];

  const education = [
    {
      degree: t('about.education.software.degree'),
      institution: t('about.education.software.institution'),
      period: t('about.education.software.period'),
      status: 'active'
    },
    {
      degree: t('about.education.hydraulics.degree'),
      institution: t('about.education.hydraulics.institution'),
      period: t('about.education.hydraulics.period'),
      status: 'interrupted'
    },
    {
      degree: t('about.education.graphicDesign.degree'),
      institution: t('about.education.graphicDesign.institution'),
      period: t('about.education.graphicDesign.period'),
      status: 'completed'
    }
  ];

  const languages = [
    {
      id: 'portuguese',
      name: t('about.languages.portuguese.name'),
      level: t('about.languages.portuguese.level')
    },
    {
      id: 'english',
      name: t('about.languages.english.name'),
      level: t('about.languages.english.level')
    },
    {
      id: 'spanish',
      name: t('about.languages.spanish.name'),
      level: t('about.languages.spanish.level')
    },
    {
      id: 'mandarin',
      name: t('about.languages.mandarin.name'),
      level: t('about.languages.mandarin.level')
    }
  ];

  const languageFlags = {
    portuguese: brazilFlag,
    english: usaFlag,
    spanish: spainFlag,
    mandarin: chinaFlag
  };

  const getStatusLabel = (status) => {
    return t(`about.status.${status}`);
  };

  return (
    <section id="sobre" className={`about-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-container">
        <div className="section-header">
          <h2 className={`section-title ${darkMode ? 'dark' : 'light'}`}>
            {t('about.title')}
          </h2>
          <p className={`section-description ${darkMode ? 'dark' : 'light'}`}>
            {t('about.description.part1')}

            <br /><br />

            {t('about.description.part2')}

            <br /><br />

            {t('about.description.part3')}
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
            {t('about.educationTitle')}
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
            {t('about.languagesTitle')}
          </h3>
          
          <div className="languages-list">
            {languages.map((lang, index) => (
              <div key={index} className={`language-item ${darkMode ? 'dark' : 'light'}`}>
                <span className={`language-name ${darkMode ? 'dark' : 'light'}`}>
                  <img
                    src={languageFlags[lang.id]}
                    alt=""
                    aria-hidden="true"
                    className="language-flag"
                  />
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
