import { motion } from "motion/react"
import { useState } from "react"
import { ExternalLink, X } from "lucide-react"
import "./Portfolio.css"

export function Portfolio({ darkMode }) {
    const [selectedProject, setSelectedProject] = useState(null)
    const [activeCategory, setActiveCategory] = useState("Todos")

    const projects = [
        {
            id: 1,
            title: "App de E-commerce",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MjEyNTg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Design completo de aplicativo de e-commerce com foco em conversão e experiência do usuário.",
            tags: ["Figma", "Prototyping", "User Research", "Mobile"],
            link: "#",
        },
        {
            id: 2,
            title: "Protótipo Mobile",
            category: "Prototype",
            image: "https://images.unsplash.com/photo-1748801583975-720cb5e4985e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzcyMDEwMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Protótipo interativo de aplicativo mobile com animações e micro-interações detalhadas.",
            tags: ["Mobile", "Interactive", "Figma", "Animation"],
            link: "#",
        },
        {
            id: 3,
            title: "Interface Dashboard",
            category: "Web Design",
            image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMTA2OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Dashboard analítico com visualização de dados complexos de forma clara e intuitiva.",
            tags: ["Dashboard", "Data Viz", "Web", "React"],
            link: "#",
        },
        {
            id: 4,
            title: "Arte Digital",
            category: "Graphic Design",
            image: "https://images.unsplash.com/photo-1687930679761-66223bff307d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzIwODY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Criação de peças visuais e artes digitais para campanhas e redes sociais.",
            tags: ["Illustration", "Art", "Creative", "Photoshop"],
            link: "#",
        },
        {
            id: 5,
            title: "Projeto de Branding",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1770980249597-4296a4e4ce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzcyMTI1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Desenvolvimento de identidade visual completa, desde logo até material de marketing.",
            tags: ["Branding", "Logo", "Identity", "Guidelines"],
            link: "#",
        },
        {
            id: 6,
            title: "Design System",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MjEyNTg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            description:
                "Sistema de design escalável com componentes reutilizáveis e documentação completa.",
            tags: ["Design System", "Components", "Documentation", "Figma"],
            link: "#",
        },
    ]

    const categories = [
        "Todos",
        "UI/UX Design",
        "Prototype",
        "Web Design",
        "Graphic Design",
        "Branding",
    ]

    const filteredProjects =
        activeCategory === "Todos"
            ? projects
            : projects.filter((project) => project.category === activeCategory)

    const selectedProjectData = projects.find(
        (project) => project.id === selectedProject,
    )

    return (
        <section
            id="portfolio"
            className={`portfolio-section ${darkMode ? "dark" : "light"}`}
        >
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="portfolio-header"
                >
                    <h2 className={`portfolio-title ${darkMode ? "dark" : "light"}`}>
                        Portfolio
                    </h2>
                    <p
                        className={`portfolio-description ${darkMode ? "dark" : "light"}`}
                    >
                        Uma seleção dos meus trabalhos mais recentes e projetos
                        favoritos
                    </p>

                    <div className="portfolio-category-filter">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`portfolio-category-button ${
                                    activeCategory === category
                                        ? "active"
                                        : darkMode
                                          ? "dark"
                                          : "light"
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8 }}
                            className="portfolio-card"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="portfolio-card-media">
                                <div className="portfolio-card-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="portfolio-card-image"
                                    />
                                </div>
                                <div className="portfolio-card-overlay">
                                    <div className="portfolio-card-overlay-content">
                                        <span className="portfolio-card-category">
                                            {project.category}
                                        </span>
                                        <h3 className="portfolio-card-overlay-title">
                                            {project.title}
                                        </h3>
                                        <p className="portfolio-card-overlay-description">
                                            {project.description}
                                        </p>
                                        <div className="portfolio-card-details-link">
                                            <span>Ver detalhes</span>
                                            <ExternalLink className="portfolio-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-card-content">
                                <h3
                                    className={`portfolio-project-title ${
                                        darkMode ? "dark" : "light"
                                    }`}
                                >
                                    {project.title}
                                </h3>
                                <div className="portfolio-tags-preview">
                                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`portfolio-tag-small ${
                                                darkMode ? "dark" : "light"
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedProjectData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="portfolio-modal-overlay"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`portfolio-modal ${darkMode ? "dark" : "light"}`}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="portfolio-modal-image-container">
                                <img
                                    src={selectedProjectData.image}
                                    alt={selectedProjectData.title}
                                    className="portfolio-modal-image"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className={`portfolio-modal-close ${
                                        darkMode ? "dark" : "light"
                                    }`}
                                    aria-label="Fechar modal"
                                >
                                    <X className="portfolio-close-icon" />
                                </button>
                            </div>

                            <div className="portfolio-modal-content">
                                <span
                                    className={`portfolio-modal-category ${
                                        darkMode ? "dark" : "light"
                                    }`}
                                >
                                    {selectedProjectData.category}
                                </span>
                                <h3
                                    className={`portfolio-modal-title ${
                                        darkMode ? "dark" : "light"
                                    }`}
                                >
                                    {selectedProjectData.title}
                                </h3>
                                <p
                                    className={`portfolio-modal-description ${
                                        darkMode ? "dark" : "light"
                                    }`}
                                >
                                    {selectedProjectData.description}
                                </p>
                                <div className="portfolio-modal-tags">
                                    {selectedProjectData.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`portfolio-tag-large ${
                                                darkMode ? "dark" : "light"
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={selectedProjectData.link}
                                    className="portfolio-modal-link"
                                >
                                    Ver Projeto Completo
                                    <ExternalLink className="portfolio-icon" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
