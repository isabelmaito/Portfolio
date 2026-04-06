import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import './Formacao.css';

export function Formacao({ darkMode }) {
  const { t } = useTranslation();

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

  const certifications = [
    {
      name: t('skills.certifications.angular.name'),
      institution: t('skills.certifications.angular.institution'),
      date: t('skills.certifications.angular.date')
    },
    {
      name: t('skills.certifications.reactJs.name'),
      institution: t('skills.certifications.reactJs.institution'),
      date: t('skills.certifications.reactJs.date')
    },
    {
      name: t('skills.certifications.reactState.name'),
      institution: t('skills.certifications.reactState.institution'),
      date: t('skills.certifications.reactState.date')
    },
    {
      name: t('skills.certifications.graphics.name'),
      institution: t('skills.certifications.graphics.institution'),
      date: t('skills.certifications.graphics.date')
    }
  ];

  const getStatusLabel = (status) => t(`about.status.${status}`);

  return (
    <section
      id="formacao"
      className={`formacao-section ${darkMode ? 'dark' : 'light'}`}
    >
      <div className="formacao-container">
        <div className="formacao-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="formacao-column"
          >
            <h3 className={`formacao-column-title ${darkMode ? 'dark' : 'light'}`}>
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
                  <span
                    className={`education-status ${edu.status} ${darkMode ? 'dark' : 'light'}`}
                  >
                    {getStatusLabel(edu.status)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="formacao-column"
          >
            <h3 className={`formacao-column-title ${darkMode ? 'dark' : 'light'}`}>
              {t('skills.certificationsTitle')}
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`certification-card ${darkMode ? 'dark' : 'light'}`}
                >
                  <div className={`certification-icon ${darkMode ? 'dark' : 'light'}`}>
                    🏆
                  </div>
                  <h4 className={`certification-name ${darkMode ? 'dark' : 'light'}`}>
                    {cert.name}
                  </h4>
                  <p className={`certification-institution ${darkMode ? 'dark' : 'light'}`}>
                    {cert.institution}
                  </p>
                  <p className={`certification-date ${darkMode ? 'dark' : 'light'}`}>
                    {cert.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
