import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';
import { motion } from 'framer-motion';

function ProjectCard({ data }) {
    const navigate = useNavigate();
    const maxDescriptionLength = 100;

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength - 3) + '...';
    };

    const handleNavigate = () => {
        const route = `Project-Details/${data.id}`;
        navigate(route);
    };

    // Animation variants for card
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        hover: {
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.98 },
    };

    // Animation variants for image
    const imageVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1, transition: { duration: 0.3 } },
    };

    // Animation variants for tags
    const tagVariants = {
        rest: { y: 0 },
        hover: {
            transition: { duration: 0.2, ease: 'easeOut' },
        },
    };

    // Animation variants for button
    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    return (
        <motion.div
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onClick={handleNavigate}
        >
            <motion.img
                className="project-card__image"
                src={
                    data.thumbnail ||
                    'https://images.pexels.com/photos/8361428/pexels-photo-8361428.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
                alt={`${data.title} thumbnail`}
                loading="lazy"
                variants={imageVariants}
            />
            <motion.div className="project-card__content" variants={cardVariants}>
                <motion.h3
                    className="project-card__title"
                    onClick={handleNavigate}
                    onKeyDown={(e) => e.key === 'Enter' && handleNavigate()}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${data.title}`}
                    variants={cardVariants}
                >
                    {data.title}
                </motion.h3>
                <motion.p
                    className="project-card__description"
                    onClick={handleNavigate}
                    onKeyDown={(e) => e.key === 'Enter' && handleNavigate()}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${data.title} details`}
                    variants={cardVariants}
                >
                    {truncateText(data.description, maxDescriptionLength)}
                </motion.p>
                <motion.div className="project-card__tags" variants={cardVariants}>
                    {data.tags?.slice(0, 7).map((tag, index) => (
                        <motion.span
                            key={index}
                            className="project-card__tag"
                            variants={tagVariants}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    className="w-100 d-flex justify-content-center align-items-center gap-3"
                    variants={cardVariants}
                >
                    <motion.button
                        className="project-card__button"
                        onClick={handleNavigate}
                        aria-label={`View ${data.title} project`}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        View Project
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;