import './ContactMe.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function ContactMe() {
    const colors = useMemo(() => ["#FF5733", "#33C1FF", "#33FF57", "#FF33D4", "#FFD133", "#8E44AD"], []);
    const [, setColorIndex] = useState(0);
    const [color, setColor] = useState(colors[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % colors.length;
                setColor(colors[nextIndex]);
                return nextIndex;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [colors]);

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

    // Animation variants for button
    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    // Animation variants for icons
    const iconVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
    };

    return (
        <section id="contact" className="contact">
            <motion.div
                className="contact__container container container-fluid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="contact__info" variants={containerVariants}>
                    <motion.h2 className="contact__heading" variants={itemVariants}>
                        Let's Connect
                    </motion.h2>
                    <motion.p className="contact__subheading" variants={itemVariants}>
                        Looking for help? Fill the form and start a new adventure
                    </motion.p>
                    <motion.hr variants={itemVariants} />
                    <motion.div className="contact__detail" variants={itemVariants}>
                        <p className="contact__label">Address:</p>
                        <motion.div
                            className="contact__value"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <motion.div variants={iconVariants}>
                                <HomeOutlinedIcon className="contact__value-icon" />
                            </motion.div>
                            <div className="contact__value-locations">
                                <p>Cairo, Egypt</p>
                                <p>Luxor, Egypt</p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="contact__detail" variants={itemVariants}>
                        <p className="contact__label">Phone:</p>
                        <motion.div
                            className="contact__value"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <motion.div variants={iconVariants}>
                                <LocalPhoneOutlinedIcon className="contact__value-icon" />
                            </motion.div>
                            <p>01025491044</p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="contact__detail" variants={itemVariants}>
                        <p className="contact__label">Support:</p>
                        <motion.div
                            className="contact__value"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <motion.div variants={iconVariants}>
                                <EmailOutlinedIcon className="contact__value-icon" />
                            </motion.div>
                            <a
                                href="mailto:yousef.kobe24@gmail.com"
                                className="contact__value-link"
                            >
                                yousef.kobe24@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="contact__form-container"
                    style={{ borderColor: color }}
                    variants={containerVariants}
                >
                    <motion.h3 className="contact__form-heading" variants={itemVariants}>
                        Let’s talk
                    </motion.h3>
                    <motion.p className="contact__form-subheading" variants={itemVariants}>
                        Enter your Project Details
                    </motion.p>
                    <motion.p className="contact__form-description" variants={itemVariants}>
                        Fill in the form below and let’s build something great together.
                    </motion.p>
                    <motion.form className="contact__form" variants={containerVariants}>
                        <motion.div className="contact__form-row" variants={containerVariants}>
                            <motion.input
                                type="text"
                                placeholder="Your name"
                                className="contact__input"
                                variants={itemVariants}
                                whileFocus={{ borderBottomColor: color }}
                            />
                            <motion.input
                                type="email"
                                placeholder="Your email"
                                className="contact__input"
                                variants={itemVariants}
                                whileFocus={{ borderBottomColor: color }}
                            />
                        </motion.div>
                        <motion.input
                            type="text"
                            placeholder="Your Subject..."
                            className="contact__input"
                            variants={itemVariants}
                            whileFocus={{ borderBottomColor: color }}
                        />
                        <motion.textarea
                            name="message"
                            rows={4}
                            id="message"
                            placeholder="Your Message..."
                            className="contact__textarea"
                            variants={itemVariants}
                            whileFocus={{ borderBottomColor: color }}
                        />
                        <motion.button
                            className="contact__form-button"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default ContactMe;