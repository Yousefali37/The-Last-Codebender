/* eslint-disable no-unused-vars */
import { Tab, Tabs } from '@mui/material';
import './AboutMe.css';
import data from '../../Mockup Data/About Data/AboutData.json';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialContainer from './../../Components/Social Container/SocialContainer';

function AboutMe() {
    const colors = useMemo(() => ["#FF5733", "#33C1FF", "#33FF57", "#FF33D4", "#FFD133", "#8E44AD"], []);

    const [, setColorIndex] = useState(0);
    const [color, setColor] = useState(colors[0]);
    const [value, setValue] = useState("whoami");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filterData = data.filter((e) => {
        const filterCategory = e.category ? e.category.toLowerCase() === value.toLowerCase() : true;
        return filterCategory;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % colors.length;
                setColor(colors[nextIndex]);
                return nextIndex;
            });
        }, 1000);

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
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // Animation variants for cards (skills, education, experience)
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        hover: { scale: 1.02, transition: { duration: 0.3 } },
    };

    // Animation variants for progress bar
    const progressVariants = {
        hidden: { width: 0 },
        visible: (progress) => ({
            width: `${progress}%`,
            transition: { duration: 1.5, ease: "easeOut" },
        }),
    };

    return (
        <section id='whoami' className='about'>
            <motion.div
                className='about__container container container-fluid'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className='about__content' variants={containerVariants}>
                    <motion.p className='about__title' variants={itemVariants}>About Me</motion.p>
                    <motion.p className='about__text' variants={itemVariants}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                    </motion.p>
                    <div className='container container-fluid'>
                        <motion.div variants={itemVariants}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="about section tabs"
                                className="about__tabs"
                            >
                                <Tab value="whoami" label="Who Am I" className="about__tab" />
                                <Tab value="skill" label="Skills" className="about__tab" />
                                <Tab value="education" label="Education" className="about__tab" />
                                <Tab value="experience" label="Experience" className="about__tab" />
                            </Tabs>
                        </motion.div>
                    </div>

                    <AnimatePresence mode="wait">
                        {value === "whoami" && (
                            <motion.div
                                key="whoami"
                                className="about__section about__section--whoami container py-5"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <motion.div
                                    className="about__whoami-card"
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    <motion.h2 className="about__whoami-heading" variants={itemVariants}>
                                        Who Am I?
                                    </motion.h2>
                                    <motion.p className="about__whoami-text" variants={itemVariants}>
                                        I'm a <strong>Front-End Developer</strong> based in <strong>Cairo, Egypt</strong>, passionate about building clean and intuitive user interfaces. I thrive on crafting responsive, engaging websites that merge creativity with performance.
                                    </motion.p>
                                    <motion.p className="about__whoami-text" variants={itemVariants}>
                                        I love transforming complex ideas into beautiful digital experiences. I continuously explore new technologies, frameworks, and UI trends to stay ahead and create standout solutions.
                                    </motion.p>
                                    <motion.p className="about__whoami-text" variants={itemVariants}>
                                        <span className="about__whoami-label">Let’s Collaborate:</span> I'm always excited to work on impactful projects. Feel free to connect or check out my work:
                                    </motion.p>
                                    <motion.div className="about__whoami-actions" variants={itemVariants}>
                                        <SocialContainer />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}

                        {value === "skill" && (
                            <motion.div
                                key="skill"
                                className='about__section about__section--skills row gap-4'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 20 }}
                            >
                                {filterData.map((e) => (
                                    <motion.div
                                        key={e.id}
                                        className="about__skill-item col-10 col-md-5 col-lg-4"
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <motion.p className="about__skill-title" variants={itemVariants}>
                                            {e.title}
                                        </motion.p>
                                        {e.progress && (
                                            <div className="about__progress-bar">
                                                <motion.div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    custom={e.progress}
                                                    variants={progressVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    style={{ backgroundColor: color }}
                                                    aria-valuenow={e.progress}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                />
                                                <span className="about__progress-text">{e.progress}%</span>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {value === "experience" && (
                            <motion.div
                                key="experience"
                                className='about__section about__section--experience'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 20 }}
                            >
                                {filterData.map((e) => (
                                    <motion.div
                                        key={e.id}
                                        className={`about__experience-item ${e.id % 2 === 0 ? "experience__item-left" : "experience__item-right"}`}
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <motion.p className="about__experience-title" variants={itemVariants}>
                                            {e.title}
                                        </motion.p>
                                        <motion.p className="about__experience-date " variants={itemVariants}>
                                            {e.date}
                                        </motion.p>
                                        <motion.p className="about__experience-description " variants={itemVariants}>
                                            {e.description}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {value === "education" && (
                            <motion.div
                                key="education"
                                className='about__section about__section--education container container-fluid'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 20 }}
                            >
                                {filterData.map((e) => (
                                    <motion.div
                                        key={e.id}
                                        className={`about__education-item ${e.id % 2 !== 0 ? "education__item-left" : "education__item-right"}`}
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <motion.p className="about__education-degree" variants={itemVariants}>
                                            {e.degree}
                                        </motion.p>
                                        <motion.div className='d-flex justify-content-between align-items-center' variants={itemVariants}>
                                            <p className="about__education-place ">{e.place}</p>
                                            <p className="about__education-date ">{e.date}</p>
                                        </motion.div>
                                        <motion.p className="about__education-location " variants={itemVariants}>
                                            {e.location}
                                        </motion.p>
                                        <motion.p className="about__education-description " variants={itemVariants}>
                                            {e.description}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default AboutMe;