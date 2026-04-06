import { useTranslation } from 'react-i18next';
import brazilFlag from '../assets/brazilflag.png';
import usaFlag from '../assets/usaflag.png';
import spainFlag from '../assets/spainflag.png';
import chinaFlag from '../assets/chinaflag.png';
import './Sobre.css';

export function Sobre({ darkMode }) {
  const { t } = useTranslation();

  const metrics = [
    { number: '9', label: t('about.metrics.experience2') },
    { number: '2', label: t('about.metrics.experience') },
    { number: '3', label: t('about.metrics.projects') },
    { number: '15', label: t('about.metrics.technologies') }
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
