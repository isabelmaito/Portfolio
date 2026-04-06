import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    "pt-BR": {
        translation: {
            header: {
                menu: {
                    about: "Sobre",
                    skills: "Habilidades",
                    portfolio: "Portfolio",
                },
                aria: {
                    toggleTheme: "Alternar tema claro/escuro",
                    languageSelector: "Selecionar idioma do site",
                    openMenu: "Abrir menu",
                    closeMenu: "Fechar menu",
                },
                languageOptions: {
                    ptBR: "Português (BR)",
                    en: "English",
                    es: "Español",
                    zhCN: "中文",
                },
            },
            home: {
                badge: "Desenvolvedora Fullstack e Designer",
                description:
                    "Combinando habilidades de fullstack com design criativo, transformando conceitos complexos em soluções web dinâmicas e centradas no usuário.",
                cta: {
                    projects: "Ver Projetos",
                    about: "Sobre Mim",
                },
            },
            about: {
                title: "Sobre Mim",
                description: {
                    part1: "Desenvolvedora frontend e fullstack em formação, com mais de 2 anos de experiência prática na construção de aplicações web do zero. Atuo no desenvolvimento de sistemas completos utilizando React, Node.js (Express), JavaScript, HTML5, CSS3, Material UI e Styled Components, com persistência de dados via MySQL e Sequelize ORM.",
                    part2: "Minha base em Design Gráfico e mais de uma década no setor editorial me deram um olhar apurado para hierarquia visual, tipografia e usabilidade — habilidades que aplico diretamente na criação de interfaces centradas no usuário, integrando protótipos no Figma à implementação em código com precisão.",
                    part3: "Tenho experiência com o ciclo completo de desenvolvimento: levantamento de requisitos, prototipagem no Figma, desenvolvimento frontend e integração com APIs REST em back-end Node.js, controle de versão com Git e GitHub e gestão de Pull Requests.",
                },
                metrics: {
                    experience2: "Anos de Experiência em Design",
                    experience: "Anos de Experiência em Desenvolvimento",
                    projects: "Projetos Concluídos em Tecnologia",
                    technologies: "Tecnologias",
                },
                educationTitle: "Formação Acadêmica",
                languagesTitle: "Idiomas",
                status: {
                    active: "Em andamento",
                    completed: "Concluído",
                    interrupted: "Interrompido",
                },
                education: {
                    software: {
                        degree: "Desenvolvimento de Software e Multiplataforma",
                        institution: "Fatec Votorantim",
                        period: "Formação prevista para Dezembro/2026",
                    },
                    hydraulics: {
                        degree: "Hidráulica e Saneamento Ambiental",
                        institution: "Fatec São Paulo",
                        period: "Agosto/2017 - Agosto/2023",
                    },
                    graphicDesign: {
                        degree: "Design Gráfico",
                        institution: "Universidade Paulista",
                        period: "Graduada em 2009",
                    },
                },
                languages: {
                    portuguese: { name: "Português", level: "Nativo" },
                    english: { name: "Inglês", level: "Intermediário" },
                    spanish: { name: "Espanhol", level: "Básico" },
                    mandarin: { name: "Mandarim", level: "Iniciante" },
                },
            },
            skills: {
                title: "Habilidades Técnicas",
                subtitle:
                    "Tecnologias e ferramentas que utilizo no dia a dia para criar soluções eficientes e inovadoras.",
                categories: {
                    languages: "Linguagens",
                    frameworks: "Frameworks e UI",
                    tools: "Ferramentas e Deploy",
                    backend: "Backend",
                    databases: "Banco de Dados",
                    design: "Design e Projetos",
                },
                certificationsTitle: "Cursos e Certificações",
                certifications: {
                    angular: {
                        name: "Angular: Construa uma Aplicação Web com Componentes",
                        institution: "Alura",
                        date: "Dezembro/2024",
                    },
                    reactJs: {
                        name: "React: Desenvolvendo com JavaScript",
                        institution: "Alura",
                        date: "Dezembro/2024",
                    },
                    reactState: {
                        name: "React: Implementando Gestão de Estado com Zustand",
                        institution: "Alura",
                        date: "Dezembro/2024",
                    },
                    graphics: {
                        name: "Computação Gráfica",
                        institution: "Saga School of Art, Games and Animation",
                        date: "Dezembro/2012",
                    },
                },
            },
            portfolio: {
                title: "Portfolio",
                description:
                    "Uma seleção dos meus trabalhos mais recentes e projetos",
                categories: {
                    all: "Todos",
                    prototype: "Protótipo",
                    webDesign: "Web Design",
                    branding: "Branding",
                },
                actions: {
                    viewDetails: "Ver detalhes",
                    viewFullProject: "Ver Projeto Completo",
                    closeModal: "Fechar modal",
                    fullscreenImageAlt: "Projeto em tela cheia",
                },
                projects: {
                    mobilePrototype: {
                        title: "Protótipo Mobile",
                        description:
                            "Protótipo interativo de aplicativo mobile com animações e microinterações detalhadas.",
                    },
                    dashboardInterface: {
                        title: "Interface Dashboard",
                        description:
                            "Dashboard analítico com visualização de dados complexos de forma clara e intuitiva.",
                    },
                    visualIdentity: {
                        title: "Identidade Visual",
                        description:
                            "Desenvolvimento de identidade visual com designs e logos criativos.",
                    },
                    ecommerce: {
                        title: "E-commerce",
                        description:
                            "Design completo de aplicativo de e-commerce com foco em conversão e experiência do usuário.",
                    },
                },
            },
            footer: {
                location: "São Paulo - Brasil",
                heading: "Vamos Conversar?",
                subtitle: "Entre em contato através das redes sociais",
                rights: "Isabel Maito © 2026 - Todos os direitos reservados.",
            },
        },
    },
    en: {
        translation: {
            header: {
                menu: {
                    about: "About",
                    skills: "Skills",
                    portfolio: "Portfolio",
                },
                aria: {
                    toggleTheme: "Toggle light and dark theme",
                    languageSelector: "Select site language",
                    openMenu: "Open menu",
                    closeMenu: "Close menu",
                },
                languageOptions: {
                    ptBR: "Portuguese (BR)",
                    en: "English",
                    es: "Spanish",
                    zhCN: "Chinese (Simplified)",
                },
            },
            home: {
                badge: "Fullstack Developer and Designer",
                description:
                    "Combining Fullstack skills with creative design, transforming complex concepts into dynamic and user-centered web solutions.",
                cta: {
                    projects: "View Projects",
                    about: "About Me",
                },
            },
            about: {
                title: "About Me",
                description: {
                    part1: "Frontend and fullstack developer in training, with over 2 years of hands-on experience building web applications from scratch. I work on the development of complete systems using React, Node.js (Express), JavaScript, HTML5, CSS3, Material UI and Styled Components, with data persistence through MySQL and the Sequelize ORM.",
                    part2: "My background in Graphic Design and more than a decade in the publishing sector have given me a sharp eye for visual hierarchy, typography and usability — skills I apply directly when creating user-centered interfaces, connecting Figma prototypes to code implementation with precision.",
                    part3: "I have experience with the full development lifecycle: requirements gathering, prototyping in Figma, frontend development and integration with REST APIs in a Node.js backend, version control with Git and GitHub, and managing Pull Requests.",
                },
                metrics: {
                    experience2: "Years of Experience in Design",
                    experience: "Years of Experience in Development",
                    projects: "Tech Projects Completed",
                    technologies: "Technologies",
                },
                educationTitle: "Academic Background",
                languagesTitle: "Languages",
                status: {
                    active: "In Progress",
                    completed: "Completed",
                    interrupted: "Interrupted",
                },
                education: {
                    software: {
                        degree: "Software and Multiplatform Development",
                        institution: "Fatec Votorantim",
                        period: "Expected graduation in December/2026",
                    },
                    hydraulics: {
                        degree: "Hydraulics and Environmental Sanitation",
                        institution: "Fatec São Paulo",
                        period: "August/2017 - August/2023",
                    },
                    graphicDesign: {
                        degree: "Graphic Design",
                        institution: "Paulista University",
                        period: "Associate Degree in 2009",
                    },
                },
                languages: {
                    portuguese: { name: "Portuguese", level: "Native" },
                    english: { name: "English", level: "Intermediate" },
                    spanish: { name: "Spanish", level: "Basic" },
                    mandarin: { name: "Mandarin", level: "Beginner" },
                },
            },
            skills: {
                title: "Technical Skills",
                subtitle:
                    "Technologies and tools I master and use daily to create efficient and innovative solutions.",
                categories: {
                    languages: "Languages",
                    frameworks: "Frameworks and UI",
                    tools: "Tools and Deployment",
                    backend: "Backend",
                    databases: "Databases",
                    design: "Design and Projects",
                },
                certificationsTitle: "Courses and Certifications",
                certifications: {
                    dio: {
                        name: "DIO Campus Expert",
                        institution: "DIO",
                        date: "July/2025",
                    },
                    angular: {
                        name: "Angular: Build a Web Application with Components",
                        institution: "Alura",
                        date: "December/2024",
                    },
                    reactJs: {
                        name: "React: Developing with JavaScript",
                        institution: "Alura",
                        date: "December/2024",
                    },
                    reactState: {
                        name: "React: Implementing State Management with Zustand",
                        institution: "Alura",
                        date: "December/2024",
                    },
                    graphics: {
                        name: "Computer Graphics",
                        institution: "Saga School of Art, Games and Animation",
                        date: "December/2012",
                    },
                },
            },
            portfolio: {
                title: "Portfolio",
                description: "A selection of my most recent work and projects",
                categories: {
                    all: "All",
                    prototype: "Prototype",
                    webDesign: "Web Design",
                    branding: "Branding",
                },
                actions: {
                    viewDetails: "View details",
                    viewFullProject: "View Full Project",
                    closeModal: "Close modal",
                    fullscreenImageAlt: "Project in fullscreen",
                },
                projects: {
                    mobilePrototype: {
                        title: "Mobile Prototype",
                        description:
                            "Interactive mobile app prototype with detailed animations and micro-interactions.",
                    },
                    dashboardInterface: {
                        title: "Dashboard Interface",
                        description:
                            "Analytical dashboard that presents complex data in a clear and intuitive way.",
                    },
                    visualIdentity: {
                        title: "Visual Identity",
                        description:
                            "Visual identity development with creative designs and logos.",
                    },
                    ecommerce: {
                        title: "E-commerce",
                        description:
                            "Complete e-commerce app design focused on conversion and user experience.",
                    },
                },
            },
            footer: {
                location: "São Paulo - Brazil",
                heading: "Let's Talk?",
                subtitle: "Reach out through social media",
                rights: "Isabel Maito © 2026 - All rights reserved.",
            },
        },
    },
    es: {
        translation: {
            header: {
                menu: {
                    about: "Sobre mí",
                    skills: "Habilidades",
                    portfolio: "Portafolio",
                },
                aria: {
                    toggleTheme: "Cambiar entre tema claro y oscuro",
                    languageSelector: "Seleccionar idioma del sitio",
                    openMenu: "Abrir menú",
                    closeMenu: "Cerrar menú",
                },
                languageOptions: {
                    ptBR: "Portugués (BR)",
                    en: "Inglés",
                    es: "Español",
                    zhCN: "Chino simplificado",
                },
            },
            home: {
                badge: "Desarrolladora Fullstack y Diseñadora",
                description:
                    "Combinando habilidades fullstack con diseño creativo, transformando conceptos complejos en soluciones web dinámicas y centradas en el usuario.",
                cta: {
                    projects: "Ver Proyectos",
                    about: "Sobre mí",
                },
            },
            about: {
                title: "Sobre mí",
                description: {
                    part1: "Desarrolladora frontend y fullstack en formación, con más de 2 años de experiencia práctica en la construcción de aplicaciones web desde cero. Actúo en el desarrollo de sistemas completos utilizando React, Node.js (Express), JavaScript, HTML5, CSS3, Material UI y Styled Components, con persistencia de datos a través de MySQL y el ORM Sequelize.",
                    part2: "Mi base en Diseño Gráfico y más de una década en el sector editorial me dieron una mirada afinada para la jerarquía visual, la tipografía y la usabilidad — habilidades que aplico directamente en la creación de interfaces centradas en el usuario, integrando prototipos en Figma con la implementación en código con precisión.",
                    part3: "Tengo experiencia con el ciclo completo de desarrollo: levantamiento de requisitos, prototipado en Figma, desarrollo frontend e integración con APIs REST en un back-end Node.js, control de versiones con Git y GitHub y gestión de Pull Requests.",
                },
                metrics: {
                    experience2: "Años de Experiencia en Diseño",
                    experience: "Años de Experiencia en Desarrollo",
                    projects: "Proyectos Completados en Tecnología",
                    technologies: "Tecnologías",
                },
                educationTitle: "Formación académica",
                languagesTitle: "Idiomas",
                status: {
                    active: "En curso",
                    completed: "Completado",
                    interrupted: "Interrumpido",
                },
                education: {
                    software: {
                        degree: "Desarrollo de Software y Multiplataforma",
                        institution: "Fatec Votorantim",
                        period: "Graduación prevista para diciembre/2026",
                    },
                    hydraulics: {
                        degree: "Hidráulica y Saneamiento Ambiental",
                        institution: "Fatec Sao Paulo",
                        period: "Agosto/2017 - Agosto/2023",
                    },
                    graphicDesign: {
                        degree: "Diseño Gráfico",
                        institution: "Universidad Paulista",
                        period: "Graduada en 2009",
                    },
                },
                languages: {
                    portuguese: { name: "Portugués", level: "Nativo" },
                    english: { name: "Inglés", level: "Intermedio" },
                    spanish: { name: "Español", level: "Básico" },
                    mandarin: { name: "Mandarín", level: "Inicial" },
                },
            },
            skills: {
                title: "Habilidades técnicas",
                subtitle:
                    "Tecnologías y herramientas que domino y utilizo a diario para crear soluciones eficientes e innovadoras.",
                categories: {
                    languages: "Lenguajes",
                    frameworks: "Frameworks y UI",
                    tools: "Herramientas y Despliegue",
                    backend: "Backend",
                    databases: "Base de datos",
                    design: "Diseño y Proyectos",
                },
                certificationsTitle: "Cursos y Certificaciones",
                certifications: {
                    dio: {
                        name: "DIO Campus Expert",
                        institution: "DIO",
                        date: "Julio/2025",
                    },
                    angular: {
                        name: "Angular: Construye una Aplicación Web con Componentes",
                        institution: "Alura",
                        date: "Diciembre/2024",
                    },
                    reactJs: {
                        name: "React: Desarrollando con JavaScript",
                        institution: "Alura",
                        date: "Diciembre/2024",
                    },
                    reactState: {
                        name: "React: Implementando Gestión de Estado con Zustand",
                        institution: "Alura",
                        date: "Diciembre/2024",
                    },
                    graphics: {
                        name: "Computación Gráfica",
                        institution: "Saga School of Art, Games and Animation",
                        date: "Diciembre/2012",
                    },
                },
            },
            portfolio: {
                title: "Portafolio",
                description:
                    "Una selección de mis trabajos más recientes y proyectos",
                categories: {
                    all: "Todos",
                    prototype: "Prototipo",
                    webDesign: "Diseño Web",
                    branding: "Branding",
                },
                actions: {
                    viewDetails: "Ver detalles",
                    viewFullProject: "Ver Proyecto Completo",
                    closeModal: "Cerrar modal",
                    fullscreenImageAlt: "Proyecto en pantalla completa",
                },
                projects: {
                    mobilePrototype: {
                        title: "Prototipo Mobile",
                        description:
                            "Prototipo interactivo de aplicación mobile con animaciones y microinteracciones detalladas.",
                    },
                    dashboardInterface: {
                        title: "Interfaz Dashboard",
                        description:
                            "Dashboard analítico con visualización de datos complejos de forma clara e intuitiva.",
                    },
                    visualIdentity: {
                        title: "Identidad Visual",
                        description:
                            "Desarrollo de identidad visual con diseños y logos creativos.",
                    },
                    ecommerce: {
                        title: "E-commerce",
                        description:
                            "Diseño completo de aplicación de e-commerce con foco en conversión y experiencia del usuario.",
                    },
                },
            },
            footer: {
                location: "São Paulo - Brasil",
                heading: "¿Hablamos?",
                subtitle: "Ponte en contacto a través de las redes sociales",
                rights: "Isabel Maito © 2026 - Todos los derechos reservados.",
            },
        },
    },
    "zh-CN": {
        translation: {
            header: {
                menu: {
                    about: "关于",
                    skills: "技能",
                    portfolio: "作品集",
                },
                aria: {
                    toggleTheme: "切换明暗主题",
                    languageSelector: "选择网站语言",
                    openMenu: "打开菜单",
                    closeMenu: "关闭菜单",
                },
                languageOptions: {
                    ptBR: "葡萄牙语（巴西）",
                    en: "英语",
                    es: "西班牙语",
                    zhCN: "简体中文",
                },
            },
            home: {
                badge: "全栈开发者与设计师",
                description:
                    "将全栈技术与创意设计相结合，把复杂概念转化为动态且以用户为中心的 Web 解决方案。",
                cta: {
                    projects: "查看项目",
                    about: "关于我",
                },
            },
            about: {
                title: "关于我",
                description: {
                    part1: "正在成长中的前端与全栈开发者，拥有两年以上从零构建 Web 应用的实战经验。负责开发完整的系统，使用 React、Node.js（Express）、JavaScript、HTML5、CSS3、Material UI 与 Styled Components，并通过 MySQL 与 Sequelize ORM 进行数据持久化。",
                    part2: "我在平面设计方面的背景以及十多年编辑行业的经历，让我对视觉层次、排版与可用性有着敏锐的判断——这些能力被我直接运用到以用户为中心的界面设计中，将 Figma 原型精准地转化为实现代码。",
                    part3: "我熟悉完整的软件开发生命周期：需求调研、在 Figma 中制作原型、前端开发，以及与基于 Node.js 的后端 REST API 集成，并使用 Git 与 GitHub 进行版本控制和 Pull Request 管理。",
                },
                metrics: {
                    experience2: "设计经验（年）",
                    experience: "开发经验（年）",
                    projects: "已完成技术项目",
                    technologies: "技术栈",
                },
                educationTitle: "教育背景",
                languagesTitle: "语言",
                status: {
                    active: "进行中",
                    completed: "已完成",
                    interrupted: "已中断",
                },
                education: {
                    software: {
                        degree: "软件与多平台开发",
                        institution: "Fatec Votorantim",
                        period: "预计 2026 年 12 月毕业",
                    },
                    hydraulics: {
                        degree: "水利与环境卫生",
                        institution: "Fatec Sao Paulo",
                        period: "2017/08 - 2023/08",
                    },
                    graphicDesign: {
                        degree: "平面设计",
                        institution: "Paulista University",
                        period: "2009 年毕业",
                    },
                },
                languages: {
                    portuguese: { name: "葡萄牙语", level: "母语" },
                    english: { name: "英语", level: "中级" },
                    spanish: { name: "西班牙语", level: "基础" },
                    mandarin: { name: "普通话", level: "初级" },
                },
            },
            skills: {
                title: "技术能力",
                subtitle:
                    "我在日常开发中熟练使用的技术与工具，可用于构建高效且创新的解决方案。",
                categories: {
                    languages: "编程语言",
                    frameworks: "框架与 UI",
                    tools: "工具与部署",
                    backend: "后端",
                    databases: "数据库",
                    design: "设计与项目",
                },
                certificationsTitle: "课程与证书",
                certifications: {
                    dio: {
                        name: "DIO Campus Expert",
                        institution: "DIO",
                        date: "2025/07",
                    },
                    angular: {
                        name: "Angular: 使用组件构建 Web 应用",
                        institution: "Alura",
                        date: "2024/12",
                    },
                    reactJs: {
                        name: "React: 使用 JavaScript 开发",
                        institution: "Alura",
                        date: "2024/12",
                    },
                    reactState: {
                        name: "React: 使用 Zustand 进行状态管理",
                        institution: "Alura",
                        date: "2024/12",
                    },
                    graphics: {
                        name: "计算机图形学",
                        institution: "Saga School of Art, Games and Animation",
                        date: "2012/12",
                    },
                },
            },
            portfolio: {
                title: "作品集",
                description: "我近期的一些最新作品和项目精选",
                categories: {
                    all: "全部",
                    prototype: "原型",
                    webDesign: "网页设计",
                    branding: "品牌设计",
                },
                actions: {
                    viewDetails: "查看详情",
                    viewFullProject: "查看完整项目",
                    closeModal: "关闭弹窗",
                    fullscreenImageAlt: "全屏项目预览",
                },
                projects: {
                    mobilePrototype: {
                        title: "移动端原型",
                        description: "带有细致动画与微交互的移动应用交互原型。",
                    },
                    dashboardInterface: {
                        title: "仪表盘界面",
                        description:
                            "以清晰直观的方式展示复杂数据的分析型仪表盘。",
                    },
                    visualIdentity: {
                        title: "视觉识别",
                        description:
                            "包含创意设计与标志方案的品牌视觉识别开发。",
                    },
                    ecommerce: {
                        title: "电子商务",
                        description: "聚焦转化率与用户体验的完整电商应用设计。",
                    },
                },
            },
            footer: {
                location: "巴西圣保罗",
                heading: "一起聊聊？",
                subtitle: "欢迎通过社交媒体联系我",
                rights: "Isabel Maito © 2026 - 保留所有权利。",
            },
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "pt-BR",
    fallbackLng: "pt-BR",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
