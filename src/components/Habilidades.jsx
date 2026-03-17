import { motion } from 'motion/react';
import { useState } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiStyledcomponents,
  SiNodedotjs,
  SiSequelize,
  SiAngular,
  SiVuedotjs,
  SiExpo,
  SiGit,
  SiAmazonwebservices,
  SiVercel,
  SiVite,
  SiFigma,
  SiPenpot,
  SiAdobeindesign,
  SiCoreldraw,
  SiGimp,
  SiInkscape,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiAutodesk,
  SiQgis,
  SiMui
} from 'react-icons/si';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import { DiMsqlServer } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import './Habilidades.css';

export function Habilidades({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('Linguagens e Marcacao');

  const categories = [
    'Linguagens',
    'Frameworks e UI',
    'Ferramentas e Deploy',
    'Backend',
    'Banco de Dados',
    'Design e Projetos'
  ];

  const skills = [
    {
      name: "TypeScript",
      level: 85,
      icon: <SiTypescript />,
      iconColor: "#3178C6",
      colorClass: "blue",
      category: "Linguagens"
    },
    {
      name: "JavaScript",
      level: 92,
      icon: <SiJavascript />,
      iconColor: "#F7DF1E",
      colorClass: "yellow",
      category: "Linguagens"
    },
    {
      name: "Python",
      level: 75,
      icon: <SiPython />,
      iconColor: "#3776AB",
      colorClass: "blue-yellow",
      category: "Linguagens"
    },
    {
      name: "HTML/CSS",
      level: 95,
      icon: <SiHtml5 />,
      iconColor: "#E34F26",
      colorClass: "orange-red",
      category: "Linguagens"
    },
    {
      name: "React",
      level: 75,
      icon: <SiReact />,
      iconColor: "#61DAFB",
      colorClass: "cyan-blue",
      category: "Frameworks e UI"
    },
    {
      name: "Vue",
      level: 65,
      icon: <SiVuedotjs />,
      iconColor: "#4FC08D",
      colorClass: "green-teal",
      category: "Frameworks e UI"
    },
    {
      name: "Angular",
      level: 82,
      icon: <SiAngular />,
      iconColor: "#DD0031",
      colorClass: "red-pink",
      category: "Frameworks e UI"
    },
    {
      name: "Material UI",
      level: 88,
      icon: <SiMui />,
      iconColor: "#007FFF",
      colorClass: "indigo-blue",
      category: "Frameworks e UI"
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: <SiTailwindcss />,
      iconColor: "#06B6D4",
      colorClass: "teal-cyan",
      category: "Frameworks e UI"
    },
    {
      name: "Bootstrap",
      level: 86,
      icon: <SiBootstrap />,
      iconColor: "#7952B3",
      colorClass: "purple-pink",
      category: "Frameworks e UI"
    },
    {
      name: "Styled-Components",
      level: 84,
      icon: <SiStyledcomponents />,
      iconColor: "#DB7093",
      colorClass: "rose-pink",
      category: "Frameworks e UI"
    },
    {
      name: "React Paper",
      level: 80,
      icon: <SiReact />,
      iconColor: "#61DAFB",
      colorClass: "cyan-indigo",
      category: "Frameworks e UI"
    },
    {
      name: "Expo",
      level: 76,
      icon: <SiExpo />,
      iconColor: "#686868",
      colorClass: "slate-dark",
      category: "Frameworks e UI"
    },
    {
      name: "Node.js/Express",
      level: 75,
      icon: <SiNodedotjs />,
      iconColor: "#339933",
      colorClass: "green",
      category: "Backend"
    },
    {
      name: "Sequelize",
      level: 72,
      icon: <SiSequelize />,
      iconColor: "#52B0E7",
      colorClass: "cyan-blue",
      category: "Backend"
    },
    {
      name: "Vite",
      level: 77,
      icon: <SiVite />,
      iconColor: "#646CFF",
      colorClass: "violet-indigo",
      category: "Ferramentas e Deploy"
    },
    {
      name: "VSCode",
      level: 85,
      icon: <VscVscode />,
      iconColor: "#007ACC",
      colorClass: "blue-cyan",
      category: "Ferramentas e Deploy"
    },
    {
      name: "Git",
      level: 85,
      icon: <SiGit />,
      iconColor: "#F05032",
      colorClass: "orange-red-dark",
      category: "Ferramentas e Deploy"
    },
    {
      name: "Vercel",
      level: 77,
      icon: <SiVercel />,
      iconColor: "#ffffff",
      colorClass: "slate-dark",
      category: "Ferramentas e Deploy"
    },
    {
      name: "AWS",
      level: 65,
      icon: <SiAmazonwebservices />,
      iconColor: "#FF9900",
      colorClass: "amber-orange",
      category: "Ferramentas e Deploy"
    },
    {
      name: "MySQL",
      level: 68,
      icon: <SiMysql />,
      iconColor: "#4479A1",
      colorClass: "blue-cyan",
      category: "Banco de Dados"
    },
    {
      name: "PostgreSQL",
      level: 66,
      icon: <SiPostgresql />,
      iconColor: "#336791",
      colorClass: "blue",
      category: "Banco de Dados"
    },
    {
      name: "Microsoft SQL Server",
      level: 62,
      icon: <DiMsqlServer />,
      iconColor: "#CC2927",
      colorClass: "red-pink",
      category: "Banco de Dados"
    },
    {
      name: "SQLite",
      level: 64,
      icon: <SiSqlite />,
      iconColor: "#003B57",
      colorClass: "blue-indigo",
      category: "Banco de Dados"
    },
    {
      name: "MongoDB",
      level: 65,
      icon: <SiMongodb />,
      iconColor: "#47A248",
      colorClass: "green-teal",
      category: "Banco de Dados"
    },
    {
      name: "Figma",
      level: 95,
      icon: <SiFigma />,
      iconColor: "#F24E1E",
      colorClass: "purple-pink",
      category: "Design e Projetos"
    },
    {
      name: "PenPot",
      level: 76,
      icon: <SiPenpot />,
      iconColor: "#ffffff",
      colorClass: "slate-dark",
      category: "Design e Projetos"
    },
    {
      name: "InDesign",
      level: 82,
      icon: <SiAdobeindesign />,
      iconColor: "#FF3366",
      colorClass: "rose-pink",
      category: "Design e Projetos"
    },
    {
      name: "CorelDraw",
      level: 90,
      icon: <SiCoreldraw />,
      iconColor: "#46A247",
      colorClass: "green-teal",
      category: "Design e Projetos"
    },
    {
      name: "Photoshop",
      level: 90,
      icon: <DiPhotoshop />,
      iconColor: "#31A8FF",
      colorClass: "blue-indigo",
      category: "Design e Projetos"
    },
    {
      name: "Illustrator",
      level: 90,
      icon: <DiIllustrator />,
      iconColor: "#FF9A00",
      colorClass: "amber-orange",
      category: "Design e Projetos"
    },
    {
      name: "Gimp",
      level: 80,
      icon: <SiGimp />,
      iconColor: "#6b5110",
      colorClass: "brown-dark",
      category: "Design e Projetos"
    },
    {
      name: "Inkscape",
      level: 78,
      icon: <SiInkscape />,
      iconColor: "#ffffff",
      colorClass: "slate-dark",
      category: "Design e Projetos"
    },
    {
      name: "AutoCAD",
      level: 80,
      icon: <SiAutodesk />,
      iconColor: "#0696D7",
      colorClass: "blue-cyan",
      category: "Design e Projetos"
    },
    {
      name: "ArcGis/QGIS",
      level: 77,
      icon: <SiQgis />,
      iconColor: "#589632",
      colorClass: "teal-cyan",
      category: "Design e Projetos"
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
            Habilidades Técnicas
          </h2>
          <p className={`section-subtitle ${darkMode ? 'dark' : 'light'}`}>
            Tecnologias e ferramentas que domino e utilizo no dia a dia para criar soluções eficientes e inovadoras.
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
