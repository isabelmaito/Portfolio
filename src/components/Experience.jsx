import { motion } from "motion/react"
import { Briefcase, Calendar } from "lucide-react"
import "./Experience.css"

export function Experience({ darkMode }) {
    const experiences = [
        {
            title: "Frontend Developer (Freelancer)",
            company: "FerShibli Soluções Tecnológicas LTDA",
            period: "Novembro/2024 - Presente",
            description: "Desenvolvimento de sites e sistemas web modernos.",
            achievements: [
                "Criação de layout de páginas usando Figma, React, Material UI e Style Components",
                "Desenvolvimento de backend utilizando Express, ORM Sequelize e MySQL",
                "Para controle de versionamento utilizando o Git e Pull Requests",
                "Sistema desenvolvido do zero até entregável, atualmente prestando manutenções",
            ],
        },
        {
            title: "Professora de Tecnologia",
            company: "StartPro Escola Técnica e Profissionalizante",
            period: "Junho/2023 - Dezembro/2023",
            description:
                "Ensino profissionalizante para todas as idades, ministrando aulas em várias turmas dos cursos FastWork.",
            achievements: [
                "Cursos focados em inglês, informática e gestão empresarial, e do Carreiras Digitais",
                "Cursos focados em empreendedorismo, Design UI/UX, marketing e programação",
                "Elaboração de aulas, exercícios e provas",
                "Atividades em figma, linguagem Dart, Flutter, Design Think, marvel app, canva e pacote office",
            ],
        },
        {
            title: "Professora de Tecnologia",
            company: "Proz Educação Profissionalizante",
            period: "Junho/2023 - Dezembro/2023",
            description:
                "Programa Novotec do Novo Ensino médio, ministrando aulas para o terceiro ano do ensino médio de uma escola estadual.",
            achievements: [
                "Curso técnico de Design de Sites e Apps (UI/UX)",
                "Ao final do curso os alunos apresentaram projetos como sites, jogos e aplicativos",
                "Elaboração de aulas, exercícios e provas",
                "Atividades fora da escola, como visitas técnicas em faculdades",
                "Aulas de HTML5/CSS3/Javascript vanilla, Gestalt e Design",
            ],
        },
        {
            title: "Assistente de Engenharia",
            company: "BBL Engenharia",
            period: "Agosto/2020 - Agosto/2021",
            description:
                "Projeto de pesquisa de vazamentos, instalação e monitoramento de válvulas redutoras de pressão com a Sabesp na cidade de Guarulhos-SP.",
            achievements: [
                "Elaboração de relatórios",
                "Monitoramento de VRPs, autobox, dataloggers, fluxímetro",
                "Desenvolvimento e leitura de projetos de distribuição de água",
                "Serviços administrativos",
            ],
        },
        {
            title: "Diagramação e Suporte Técnico",
            company: "Cobrape Engenharia",
            period: "Julho/2015 - Outubro/2019",
            description:
                "Projeto do Trecho Norte do Rodoanel que favorece a ordenação do tráfego de transposição, principalmente carga.",
            achievements: [
                "Elaboração de relatórios",
                "Avaliação Ambiental Estratégica do Rodoanel",
                "Diagramação e organização da Matriz de Riscos do projeto de acordo com a metodologia BID",
                "Produção de releases, comunicações, informes, documentos e outros conteúdos técnicos",
            ],
        },
    ]

    return (
        <section
            id="experiencia"
            className={`py-20 transition-colors duration-300 ${
                darkMode
                    ? "bg-gray-900"
                    : "bg-gradient-to-br from-purple-50 via-white to-pink-50"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2
                        className={`text-4xl sm:text-5xl font-bold mb-4 ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Experiência Profissional
                    </h2>
                    <p
                        className={`text-xl max-w-3xl mx-auto ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        Mais de 7 anos de experiência em diferentes segmentos
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
                            darkMode ? "bg-purple-900" : "bg-purple-200"
                        }`}
                    ></div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                                    index % 2 === 0
                                        ? "lg:text-right"
                                        : "lg:text-left"
                                }`}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1 + 0.2,
                                    }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className={`hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full shadow-lg z-10 ${
                                        darkMode
                                            ? "border-4 border-gray-900"
                                            : "border-4 border-white"
                                    }`}
                                ></motion.div>

                                <div
                                    className={
                                        index % 2 === 0
                                            ? "lg:col-start-1"
                                            : "lg:col-start-2"
                                    }
                                >
                                    <div
                                        className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                                            darkMode
                                                ? "bg-gray-800"
                                                : "bg-white"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                    darkMode
                                                        ? "bg-purple-900/50 text-purple-400"
                                                        : "bg-purple-100 text-purple-600"
                                                }`}
                                            >
                                                <Briefcase className="w-6 h-6" />
                                            </div>
                                            <div
                                                className={`${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} flex-1 min-w-0`}
                                            >
                                                <h3
                                                    className={`text-xl font-bold ${
                                                        darkMode
                                                            ? "text-white"
                                                            : "text-gray-900"
                                                    }`}
                                                >
                                                    {exp.title}
                                                </h3>
                                                <p
                                                    className={`${darkMode ? "text-purple-400" : "text-purple-600"} font-medium`}
                                                >
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={`flex items-center gap-2 mb-3 ${
                                                darkMode
                                                    ? "text-gray-400"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p
                                            className={`mb-3 text-sm ${
                                                darkMode
                                                    ? "text-gray-300"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {exp.description}
                                        </p>

                                        <div className="space-y-2">
                                            <p
                                                className={`font-semibold text-xs ${
                                                    darkMode
                                                        ? "text-white"
                                                        : "text-gray-900"
                                                }`}
                                            >
                                                Principais Atividades:
                                            </p>
                                            <ul className="space-y-1">
                                                {exp.achievements.map(
                                                    (achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className={`text-xs flex items-start gap-2 ${
                                                                darkMode
                                                                    ? "text-gray-300"
                                                                    : "text-gray-600"
                                                            }`}
                                                        >
                                                            <span
                                                                className={`${darkMode ? "text-purple-400" : "text-purple-600"} mt-0.5`}
                                                            >
                                                                •
                                                            </span>
                                                            <span>
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Volunteer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-16"
                >
                    <h3
                        className={`text-3xl font-bold text-center mb-8 ${
                            darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Atividades Extracurriculares
                    </h3>

                    <div className="max-w-3xl mx-auto">
                        <div
                            className={`rounded-2xl p-8 ${
                                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                        darkMode
                                            ? "bg-pink-900/50 text-pink-400"
                                            : "bg-pink-100 text-pink-600"
                                    }`}
                                >
                                    ❤️
                                </div>
                                <div className="flex-1">
                                    <h4
                                        className={`text-xl font-bold mb-2 ${
                                            darkMode
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        ABEAC - ONG
                                    </h4>
                                    <p
                                        className={`text-sm mb-3 ${
                                            darkMode
                                                ? "text-purple-400"
                                                : "text-purple-600"
                                        }`}
                                    >
                                        Voluntário | Desde 2013
                                    </p>
                                    <p
                                        className={`text-sm mb-4 ${
                                            darkMode
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        ONG que abriga animais abandonados
                                    </p>
                                    <ul
                                        className={`space-y-2 text-sm ${
                                            darkMode
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        <li className="flex items-start gap-2">
                                            <span
                                                className={
                                                    darkMode
                                                        ? "text-pink-400"
                                                        : "text-pink-600"
                                                }
                                            >
                                                •
                                            </span>
                                            <span>
                                                Voluntária nos eventos de
                                                adoção, resgates e doações
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span
                                                className={
                                                    darkMode
                                                        ? "text-pink-400"
                                                        : "text-pink-600"
                                                }
                                            >
                                                •
                                            </span>
                                            <span>Divulgação da ONG</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span
                                                className={
                                                    darkMode
                                                        ? "text-pink-400"
                                                        : "text-pink-600"
                                                }
                                            >
                                                •
                                            </span>
                                            <span>
                                                Artes digitais e impressas
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
