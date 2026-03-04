import { motion } from 'motion/react';
import { useState } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiGit,
  SiFigma,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiAutodesk,
  SiQgis,
  SiMui
} from 'react-icons/si';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import './Habilidades.css';

export function Habilidades({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const categories = [
    'Languages',
    'Frameworks/Libraries',
    'Cloud/DevOps',
    'Concepts'
  ];

  const skills = [
    {
      name: "TypeScript",
      level: 85,
      icon: <SiTypescript />,
      iconColor: "#3178C6",
      colorClass: "blue",
      category: "Languages"
    },
    {
      name: "JavaScript",
      level: 92,
      icon: <SiJavascript />,
      iconColor: "#F7DF1E",
      colorClass: "yellow",
      category: "Languages"
    },
    {
      name: "Python",
      level: 75,
      icon: <SiPython />,
      iconColor: "#3776AB",
      colorClass: "blue-yellow",
      category: "Languages"
    },
    {
      name: "React",
      level: 90,
      icon: <SiReact />,
      iconColor: "#61DAFB",
      colorClass: "cyan-blue",
      category: "Frameworks/Libraries"
    },
    {
      name: "Node.js/Express",
      level: 88,
      icon: <SiNodedotjs />,
      iconColor: "#339933",
      colorClass: "green",
      category: "Frameworks/Libraries"
    },
    {
      name: "Material UI",
      level: 88,
      icon: <SiMui />,
      iconColor: "#007FFF",
      colorClass: "indigo-blue",
      category: "Frameworks/Libraries"
    },
    {
      name: "Angular",
      level: 82,
      icon: <SiAngular />,
      iconColor: "#DD0031",
      colorClass: "red-pink",
      category: "Frameworks/Libraries"
    },
    {
      name: "Git",
      level: 85,
      icon: <SiGit />,
      iconColor: "#F05032",
      colorClass: "orange-red-dark",
      category: "Cloud/DevOps"
    },
    {
      name: "Figma",
      level: 95,
      icon: <SiFigma />,
      iconColor: "#F24E1E",
      colorClass: "purple-pink",
      category: "Concepts"
    },
    {
      name: "HTML/CSS",
      level: 95,
      icon: <SiHtml5 />,
      iconColor: "#E34F26",
      colorClass: "orange-red",
      category: "Concepts"
    },
    {
      name: "MySQL",
      level: 80,
      icon: <SiMysql />,
      iconColor: "#4479A1",
      colorClass: "blue-cyan",
      category: "Concepts"
    },
    {
      name: "MongoDB",
      level: 78,
      icon: <SiMongodb />,
      iconColor: "#47A248",
      colorClass: "green-teal",
      category: "Concepts"
    },
    {
      name: "Photoshop",
      level: 90,
      icon: <DiPhotoshop />,
      iconColor: "#31A8FF",
      colorClass: "blue-indigo",
      category: "Concepts"
    },
    {
      name: "Illustrator",
      level: 85,
      icon: <DiIllustrator />,
      iconColor: "#FF9A00",
      colorClass: "amber-orange",
      category: "Concepts"
    },
    {
      name: "AutoCAD",
      level: 88,
      icon: <SiAutodesk />,
      iconColor: "#0696D7",
      colorClass: "red-rose",
      category: "Concepts"
    },
    {
      name: "ArcGis/QGIS",
      level: 82,
      icon: <SiQgis />,
      iconColor: "#589632",
      colorClass: "teal-cyan",
      category: "Concepts"
    }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const certifications = [
    {
      name: "DIO Campus Expert",
      institution: "DIO",
      date: "Julho/2025"
    },
    {
      name: "Angular: Construa uma Aplicação Web com Componentes",
      institution: "Alura",
      date: "Dezembro/2024"
    },
    {
      name: "React: Desenvolvendo com Javascript",
      institution: "Alura",
      date: "Dezembro/2024"
    },
    {
      name: "React: Implementando Gestão de Estado com Zustand",
      institution: "Alura",
      date: "Dezembro/2024"
    },
    {
      name: "Computação Gráfica",
      institution: "Saga School of Art, Games and Animation",
      date: "Dezembro/2012"
    }
  ];

  return (
    <section 
      id="habilidades" 
      className={`habilidades-section ${darkMode ? 'dark' : 'light'}`}
    >
      <div className="habilidades-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className={`section-title ${darkMode ? 'dark' : 'light'}`}>
            Technical Skills
          </h2>
          <p className={`section-subtitle ${darkMode ? 'dark' : 'light'}`}>
            My expertise across various technologies and tools
          </p>
        </motion.div>

        {/* Botões de Categorias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`category-buttons-container ${darkMode ? 'dark' : 'light'}`}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category ? 'active' : ''
              } ${darkMode ? 'dark' : 'light'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`skill-card ${darkMode ? 'dark' : 'light'}`}
            >
              <div className="skill-header">
                <div className="skill-info">
                  <span className="skill-icon" style={{ color: skill.iconColor }}>{skill.icon}</span>
                  <span className={`skill-name ${darkMode ? 'dark' : 'light'}`}>
                    {skill.name}
                  </span>
                </div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.03 + 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`skill-percentage ${darkMode ? 'dark' : 'light'}`}
                >
                  {skill.level}%
                </motion.span>
              </div>

              <div className={`skill-bar-container ${darkMode ? 'dark' : 'light'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.03 + 0.2, 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`skill-bar ${skill.colorClass}`}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                    className="skill-shimmer"
                  />
                  
                  {/* Pulse effect */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2))'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="certifications-section"
        >
          <h3 className={`certifications-title ${darkMode ? 'dark' : 'light'}`}>
            Cursos & Certificações
          </h3>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
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
    </section>
  );
}
