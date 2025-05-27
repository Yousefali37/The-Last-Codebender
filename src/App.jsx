/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/About-Me/AboutMe';
import Services from './Pages/Services/Services';
import Header from './Components/Header/Header';
import Projects from './Pages/Projects/Projects';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import ContactMe from './Pages/Contact Me/ContactMe';
import ProjectDetails from './Pages/Project Details/ProjectDetails';
import { motion, useInView } from 'framer-motion';

const theme = createTheme();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Track when each section is in view
  const isHomeInView = useInView(homeRef, { once: false, margin: '-100px' });
  const isAboutInView = useInView(aboutRef, { once: false, margin: '-100px' });
  const isServicesInView = useInView(servicesRef, { once: false, margin: '-100px' });
  const isProjectsInView = useInView(projectsRef, { once: false, margin: '-100px' });
  const isContactInView = useInView(contactRef, { once: false, margin: '-100px' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation variants for theme toggle button
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 15, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <motion.button
          className="theme-toggle position-fixed top-50 start-0"
          onClick={toggleTheme}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <WbSunnyOutlinedIcon /> : <NightlightOutlinedIcon />}
        </motion.button>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <motion.section
                  ref={homeRef}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={isHomeInView ? 'visible' : 'hidden'}
                >
                  <Home />
                </motion.section>
                <motion.section
                  ref={aboutRef}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={isAboutInView ? 'visible' : 'hidden'}
                >
                  <AboutMe />
                </motion.section>
                <motion.section
                  ref={servicesRef}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={isServicesInView ? 'visible' : 'hidden'}
                >
                  <Services />
                </motion.section>
                <motion.section
                  ref={projectsRef}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={isProjectsInView ? 'visible' : 'hidden'}
                >
                  <Projects />
                </motion.section>
                <motion.section
                  ref={contactRef}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={isContactInView ? 'visible' : 'hidden'}
                >
                  <ContactMe />
                </motion.section>
              </>
            }
          />
          <Route path="Project-Details/:id" element={<ProjectDetails />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;