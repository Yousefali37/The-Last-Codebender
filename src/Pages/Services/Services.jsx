import ServicesCards from '../../Components/Services Cards/ServicesCards';
import './Services.css';
import { motion } from 'framer-motion';

function Services() {
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
        <section id="services" className="services">
            <motion.div
                className="services__container m-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="services__subtitle" variants={itemVariants}>
                    WHAT WE OFFER
                </motion.p>
                <motion.p className="services__title" variants={itemVariants}>
                    Affordable Services
                </motion.p>
                <motion.p className="services__description" variants={itemVariants}>
                    A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <ServicesCards />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Services;