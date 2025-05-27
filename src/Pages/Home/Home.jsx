/* eslint-disable no-unused-vars */
import './Home.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialContainer from "../../Components/Social Container/SocialContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    // Animation variants for staggered container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Animation variants for individual items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // Animation variants for the CTA button
    const ctaVariants = {
        rest: { scale: 1, x: 0 },
        hover: { scale: 1.05, x: 10, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    // Animation variants for the image
    const imageVariants = {
        rest: { scale: 1, rotate: 0 },
        hover: { scale: 1.1, rotate: 2, transition: { duration: 0.4 } },
    };

    return (
        <section id="home" className="home">
            <motion.div
                className="container container-fluid d-flex justify-content-center align-items-center flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="home__content" variants={itemVariants}>
                    <motion.p className="home__greeting" variants={itemVariants}>
                        Hello! I AM
                    </motion.p>
                    <motion.h2 className="home__name" variants={itemVariants}>
                        Yousef Ali
                    </motion.h2>
                    <motion.p
                        className="home__description container container-fluid px-0"
                        variants={itemVariants}
                    >
                        Building simple and beautiful things for complex interfaces is what I enjoy most about my work.
                        I am also interested in crafting beautiful minimal products and exploring new worlds.
                    </motion.p>
                    <motion.div variants={itemVariants} className='home__social-container'>
                        <SocialContainer />
                    </motion.div>
                    <motion.div
                        variants={ctaVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        className='home__cta-container'
                    >
                        <Link to="#projects" className="home__cta">
                            See my work <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="home__image-container"
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <motion.img
                        src="https://placehold.co/600x400"
                        alt="Yousef Ali"
                        variants={itemVariants}
                        className='home__image'
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Home;