import './ServicesCards.css';
import data from '../../Mockup Data/Services Data/ServicesData.json';
import {
    faCode,
    faLink,
    faMobileScreen,
    faTachometerAlt,
    faComments,
} from '@fortawesome/free-solid-svg-icons';
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function ServicesCards() {
    const iconsArray = {
        faCode,
        faFigma,
        faLink,
        faMobileScreen,
        faGithub,
        FaComments: faComments,
        FaTachometerAlt: faTachometerAlt,
    };

    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        hover: {
            scale: 1.05,
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.98 },
    };

    // Animation variants for icons
    const iconVariants = {
        rest: { rotate: 0, scale: 1 },
        hover: {
            rotate: 10,
            scale: 1.2,
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            className="services-cards"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                },
            }}
        >
            {data.map((e) => (
                <motion.div
                    key={e.id}
                    className="services-cards__item"
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <motion.div
                        className="services-cards__icon-container"
                        style={{
                            '--icon-Color': e.color,
                            '--background-Color': e.backgroundColor,
                        }}
                        variants={iconVariants}
                    >
                        <span className="services-cards__icon">
                            <FontAwesomeIcon icon={iconsArray[e.icon]} />
                        </span>
                    </motion.div>
                    <motion.h3 className="services-cards__title">
                        {e.title}
                    </motion.h3>
                    <motion.p className="services-cards__description">
                        {e.desc}
                    </motion.p>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default ServicesCards;