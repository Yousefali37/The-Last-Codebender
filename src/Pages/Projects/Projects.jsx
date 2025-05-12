import './Projects.css';
import ProjectCard from './../../Components/Project Card/ProjectCard';
import data from '../../Mockup Data/Projects Data/ProjectsData.json';
import { motion } from 'framer-motion';

function Projects() {
    // Animation variants for container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    // Animation variants for items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="projects" id="projects">
            <motion.div
                className="projects__wrapper container container-fluid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="projects__content" variants={itemVariants}>
                    <motion.p className="projects__subtitle" variants={itemVariants}>
                        My Latest Work
                    </motion.p>
                    <motion.p className="projects__title" variants={itemVariants}>
                        Perfect solution for digital experience
                    </motion.p>
                </motion.div>

                <motion.div
                    className="projects__grid justify-content-center align-items-center row gap-3"
                    variants={containerVariants}
                >
                    {data.map((e) => (
                        <motion.div
                            key={e.id}
                            className="projects__item col-lg-4 col-md-4 col-sm-12"
                            variants={itemVariants}
                        >
                            <ProjectCard data={e} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Projects;