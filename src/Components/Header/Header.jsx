import { useState } from 'react';
import './Header.css';

function Header() {
    const [active, setActive] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <p>Logo</p>
                </div>
                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <button
                        className={`header__nav-button ${active === 'home' ? 'header__nav-button--active' : ''}`}
                        onClick={() => {
                            setActive('home');
                            setIsMenuOpen(false);
                        }}
                    >
                        <a href="#home" className="header__nav-link">
                            Home
                        </a>
                    </button>
                    <button
                        className={`header__nav-button ${active === 'whoami' ? 'header__nav-button--active' : ''}`}
                        onClick={() => {
                            setActive('whoami');
                            setIsMenuOpen(false);
                        }}
                    >
                        <a href="#whoami" className="header__nav-link">
                            Who am I
                        </a>
                    </button>
                    <button
                        className={`header__nav-button ${active === 'services' ? 'header__nav-button--active' : ''}`}
                        onClick={() => {
                            setActive('services');
                            setIsMenuOpen(false);
                        }}
                    >
                        <a href="#services" className="header__nav-link">
                            My Services
                        </a>
                    </button>
                    <button
                        className={`header__nav-button ${active === 'projects' ? 'header__nav-button--active' : ''}`}
                        onClick={() => {
                            setActive('projects');
                            setIsMenuOpen(false);
                        }}
                    >
                        <a href="#projects" className="header__nav-link">
                            Projects
                        </a>
                    </button>
                </nav>
                <button className="header__contact-button">Get in touch</button>
                <button className="header__hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? '×' : '☰'}
                </button>
            </div>
        </header>
    );
}

export default Header;