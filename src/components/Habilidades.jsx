import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  SiVercel,
  SiVite,
  SiFigma,
  SiPenpot,
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
import { FaAws } from 'react-icons/fa6';
import { TbBrandAdobeIndesign } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import './Habilidades.css';

export function Habilidades({ darkMode }) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('Linguagens');
  const [expandedSkill, setExpandedSkill] = useState(null);

  const categories = [
    { id: 'Linguagens', label: t('skills.categories.languages') },
    { id: 'Frameworks e UI', label: t('skills.categories.frameworks') },
    { id: 'Ferramentas e Deploy', label: t('skills.categories.tools') },
    { id: 'Backend', label: t('skills.categories.backend') },
    { id: 'Banco de Dados', label: t('skills.categories.databases') },
    { id: 'Design e Projetos', label: t('skills.categories.design') }
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
      level: 65,
      icon: <SiPython />,
      iconColor: "#3776AB",
      colorClass: "blue-yellow",
      category: "Linguagens",
      libs: [
        "BeautifulSoup4",
        "Django",
        "Matplotlib",
        "Numpy",
        "Pandas",
        "Scikit Learn"
      ]
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
      level: 72,
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
      level: 75,
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
      name: "React Native Paper",
      level: 75,
      icon: <SiReact />,
      iconColor: "#61DAFB",
      colorClass: "cyan-indigo",
      category: "Frameworks e UI"
    },
    {
      name: "Expo",
      level: 66,
      icon: <SiExpo />,
      iconColor: "#686868",
      colorClass: "slate-dark",
      category: "Frameworks e UI"
    },
    {
      name: "Node.js/Express",
      level: 65,
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
      level: 70,
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
      level: 75,
      icon: <SiGit />,
      iconColor: "#F05032",
      colorClass: "orange-red-dark",
      category: "Ferramentas e Deploy"
    },
    {
      name: "Vercel",
      level: 67,
      icon: <SiVercel />,
      iconColor: "#000000",
      colorClass: "slate-dark",
      category: "Ferramentas e Deploy"
    },
    {
      name: "AWS",
      level: 45,
      icon: <FaAws />,
      iconColor: "#FF9900",
      colorClass: "amber-orange",
      category: "Ferramentas e Deploy"
    },
    {
      name: "MySQL",
      level: 58,
      icon: <SiMysql />,
      iconColor: "#4479A1",
      colorClass: "blue-cyan",
      category: "Banco de Dados"
    },
    {
      name: "PostgreSQL",
      level: 56,
      icon: <SiPostgresql />,
      iconColor: "#336791",
      colorClass: "blue",
      category: "Banco de Dados"
    },
    {
      name: "Microsoft SQL Server",
      level: 52,
      icon: <DiMsqlServer />,
      iconColor: "#CC2927",
      colorClass: "red-pink",
      category: "Banco de Dados"
    },
    {
      name: "SQLite",
      level: 54,
      icon: <SiSqlite />,
      iconColor: "#003B57",
      colorClass: "blue-indigo",
      category: "Banco de Dados"
    },
    {
      name: "MongoDB",
      level: 55,
      icon: <SiMongodb />,
      iconColor: "#47A248",
      colorClass: "green-teal",
      category: "Banco de Dados"
    },
    {
      name: "Figma",
      level: 85,
      icon: <SiFigma />,
      iconColor: "#F24E1E",
      colorClass: "purple-pink",
      category: "Design e Projetos"
    },
    {
      name: "PenPot",
      level: 76,
      icon: <SiPenpot />,
      iconColor: "#000000",
      colorClass: "slate-dark",
      category: "Design e Projetos"
    },
    {
      name: "InDesign",
      level: 82,
      icon: <TbBrandAdobeIndesign />,
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
      iconColor: "#000000",
      colorClass: "slate-dark",
      category: "Design e Projetos"
    },
    {
      name: "AutoCAD",
      level: 75,
      icon: <SiAutodesk />,
      iconColor: "#0696D7",
      colorClass: "blue-cyan",
      category: "Design e Projetos"
    },
    {
      name: "ArcGis/QGIS",
      level: 60,
      icon: <SiQgis />,
      iconColor: "#589632",
      colorClass: "teal-cyan",
      category: "Design e Projetos"
    }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

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
            {t('skills.title')}
          </h2>
          <p className={`section-subtitle ${darkMode ? 'dark' : 'light'}`}>
            {t('skills.subtitle')}
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
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-button ${
                activeCategory === category.id ? 'active' : ''
              } ${darkMode ? 'dark' : 'light'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category.label}
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
              className={`skill-card ${darkMode ? 'dark' : 'light'} ${
                expandedSkill === skill.name ? 'expanded' : ''
              }`}
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
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.03 + 0.2,
                    ease: "easeOut"
                  }}
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
              {skill.libs && skill.libs.length > 0 && (
                <>
                  <button
                    type="button"
                    className={`skill-more-button ${darkMode ? 'dark' : 'light'}`}
                    onClick={() =>
                      setExpandedSkill(prev => (prev === skill.name ? null : skill.name))
                    }
                  >
                    {expandedSkill === skill.name ? 'Veja menos' : 'Veja mais'}
                  </button>
                  {expandedSkill === skill.name && (
                    <div className={`skill-libs ${darkMode ? 'dark' : 'light'}`}>
                      {skill.libs.map(lib => (
                        <span key={lib} className="skill-lib-item">
                          {lib}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
