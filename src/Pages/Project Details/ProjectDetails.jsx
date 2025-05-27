/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import './ProjectDetails.css';
import data from '../../Mockup Data/Projects Data/ProjectsData.json';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const ProjectDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [fullscreenImage, setFullscreenImage] = useState(null);

    // Refs for scroll-triggered sections
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const tagsRef = useRef(null);
    const galleryRef = useRef(null);
    const linksRef = useRef(null);

    // Track when each section is in view
    const isHeroInView = useInView(heroRef, { once: false, margin: '-100px' });
    const isAboutInView = useInView(aboutRef, { once: false, margin: '-100px' });
    const isTagsInView = useInView(tagsRef, { once: false, margin: '-100px' });
    const isGalleryInView = useInView(galleryRef, { once: false, margin: '-100px' });
    const isLinksInView = useInView(linksRef, { once: false, margin: '-100px' });

    const openFullscreen = (image) => {
        setFullscreenImage(image);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    const goBack = () => {
        navigate('/#projects');
        window.location.reload();
    };

    const project = data.find((e) => e.id?.toString() === id);

    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    // Animation variants for staggered items (tags, images, links)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
    };

    // Animation variants for buttons and links
    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    // Animation variants for gallery images
    const imageVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    // Animation variants for fullscreen overlay
    const fullscreenVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3, ease: 'easeIn' },
        },
    };

    if (!project) {
        return <div className="project-details">Project not found</div>;
    }

    return (
        <div className="project-details">
            {/* Hero Section */}
            <motion.div
                ref={heroRef}
                className="project-details__hero"
                variants={sectionVariants}
                initial="hidden"
                animate={isHeroInView ? 'visible' : 'hidden'}
            >
                <motion.img
                    src={project.cover}
                    alt="Project Cover"
                    className="project-details__hero-image"
                    variants={imageVariants}
                    whileHover="hover"
                />
                <motion.div className="project-details__hero-overlay" variants={itemVariants}>
                    <motion.h1 className="project-details__hero-title" variants={itemVariants}>
                        {project.title}
                    </motion.h1>
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <div className="project-details__main-content">
                {/* Go Back Button */}
                <motion.button
                    className="project-details__go-back-button"
                    onClick={goBack}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Go back to projects"
                >
                    ← Go Back
                </motion.button>

                {/* Description */}
                <motion.section
                    ref={aboutRef}
                    className="project-details__section"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isAboutInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="project-details__section-title" variants={itemVariants}>
                        About the Project
                    </motion.h2>
                    <motion.p className="project-details__section-text" variants={itemVariants}>
                        {project.description}
                    </motion.p>
                </motion.section>

                {/* Tags */}
                <motion.section
                    ref={tagsRef}
                    className="project-details__section"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isTagsInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="project-details__section-title" variants={itemVariants}>
                        Technologies Used
                    </motion.h2>
                    <motion.div className="project-details__tags" variants={containerVariants}>
                        {project.tags.map((tag, index) => (
                            <motion.span
                                key={index}
                                className="project-details__tag"
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Image Gallery */}
                <motion.section
                    ref={galleryRef}
                    className="project-details__section"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isGalleryInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="project-details__section-title" variants={itemVariants}>
                        Gallery
                    </motion.h2>
                    <motion.div className="project-details__gallery" variants={containerVariants}>
                        {project.images.map((image, index) => (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="project-details__gallery-image"
                                onClick={() => openFullscreen(image)}
                                variants={imageVariants}
                                whileHover="hover"
                            />
                        ))}
                    </motion.div>
                </motion.section>

                {/* Fullscreen Image Preview */}
                {fullscreenImage && (
                    <motion.div
                        className="project-details__fullscreen-overlay"
                        variants={fullscreenVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeFullscreen}
                    >
                        <motion.img
                            src={fullscreenImage}
                            alt="Fullscreen Preview"
                            className="project-details__fullscreen-image"
                            variants={fullscreenVariants}
                        />
                        <motion.button
                            className="project-details__close-button"
                            onClick={closeFullscreen}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            aria-label="Close fullscreen image"
                        >
                            ×
                        </motion.button>
                    </motion.div>
                )}

                {/* Links */}
                <motion.section
                    ref={linksRef}
                    className="project-details__section"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isLinksInView ? 'visible' : 'hidden'}
                >
                    <motion.h2 className="project-details__section-title" variants={itemVariants}>
                        Resources
                    </motion.h2>
                    <motion.div className="project-details__links" variants={containerVariants}>
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-details__link project-details__link--github"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            View on GitHub
                        </motion.a>
                        <motion.a
                            href={project.drive}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-details__link project-details__link--drive"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Google Drive
                        </motion.a>
                        <motion.a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-details__link project-details__link--video"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Watch Video
                        </motion.a>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};

export default ProjectDetails;