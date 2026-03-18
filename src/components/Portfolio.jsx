import { motion } from "motion/react"
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import { ExternalLink, X } from "lucide-react"
import "./Portfolio.css"

export function Portfolio({ darkMode }) {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null)
    const [activeCategory, setActiveCategory] = useState('all')
    const [selectedImageModal, setSelectedImageModal] = useState(null)

    const projects = [
        {
            id: 1,
            title: t('portfolio.projects.mobilePrototype.title'),
            category: 'prototype',
            image: new URL("../assets/Doorganization-mockup.png", import.meta.url).href,
            description: t('portfolio.projects.mobilePrototype.description'),
            tags: ["Mobile", "Interactive", "Figma", "Animation"],
            link: "#",
        },
        {
            id: 2,
            title: t('portfolio.projects.dashboardInterface.title'),
            category: 'webDesign',
            image: new URL("../assets/Delbicos-site-mock.png", import.meta.url).href,
            description: t('portfolio.projects.dashboardInterface.description'),
            tags: ["Dashboard", "Data Viz", "Web", "React"],
            link: "#",
        },
        {
            id: 3,
            title: t('portfolio.projects.visualIdentity.title'),
            category: 'branding',
            image: new URL("../assets/Delbicos-ident-mock.png", import.meta.url).href,
            description: t('portfolio.projects.visualIdentity.description'),
            tags: ["Illustrator", "Art", "Creative", "Branding"],
            link: "#",
        },
        {
            id: 4,
            title: t('portfolio.projects.ecommerce.title'),
            category: 'branding',
            image: new URL("../assets/erosashop-identi-mock2.png", import.meta.url).href,
            description: t('portfolio.projects.ecommerce.description'),
            tags: ["Illustrator", "Prototyping", "User Research", "Graphic Design"],
            link: "#",
        },
    ]

    const categories = [
        { id: 'all', label: t('portfolio.categories.all') },
        { id: 'prototype', label: t('portfolio.categories.prototype') },
        { id: 'webDesign', label: t('portfolio.categories.webDesign') },
        { id: 'branding', label: t('portfolio.categories.branding') },
    ]

    const filteredProjects =
        activeCategory === 'all'
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
                        {t('portfolio.title')}
                    </h2>
                    <p
                        className={`portfolio-description ${darkMode ? "dark" : "light"}`}
                    >
                        {t('portfolio.description')}
                    </p>

                    <div className="portfolio-category-filter">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`portfolio-category-button ${
                                    activeCategory === category.id
                                        ? "active"
                                        : darkMode
                                          ? "dark"
                                          : "light"
                                }`}
                            >
                                {category.label}
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
                                            {t(`portfolio.categories.${project.category}`)}
                                        </span>
                                        <h3 className="portfolio-card-overlay-title">
                                            {project.title}
                                        </h3>
                                        <p className="portfolio-card-overlay-description">
                                            {project.description}
                                        </p>
                                        <div className="portfolio-card-details-link">
                                            <span>{t('portfolio.actions.viewDetails')}</span>
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
                                    aria-label={t('portfolio.actions.closeModal')}
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
                                    {t(`portfolio.categories.${selectedProjectData.category}`)}
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
                                <button
                                    onClick={() => setSelectedImageModal(selectedProjectData.image)}
                                    className="portfolio-modal-link"
                                >
                                    {t('portfolio.actions.viewFullProject')}
                                    <ExternalLink className="portfolio-icon" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {selectedImageModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="portfolio-modal-overlay"
                        onClick={() => setSelectedImageModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio-image-modal"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImageModal(null)}
                                className={`portfolio-modal-close ${
                                    darkMode ? "dark" : "light"
                                }`}
                                aria-label={t('portfolio.actions.closeModal')}
                            >
                                <X className="portfolio-close-icon" />
                            </button>
                            <img
                                src={selectedImageModal}
                                alt={t('portfolio.actions.fullscreenImageAlt')}
                                className="portfolio-fullscreen-image"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
