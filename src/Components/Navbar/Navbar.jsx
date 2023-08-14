import './Navbar.css'
import '../../index.css'
import { toggleMenu, closeAfterUsed } from './Navbar'

import { useState, useContext, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LanguageContext from '../../Context/LanguageContext'

export const Navbar = ({ handleScroll }) => {
    const languages = ['en', 'tr', 'de'];
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const { language, handleLanguageChange, getTranslation } = useContext(LanguageContext);

    const handleClick = () => {
        const currentIndex = languages.indexOf(currentLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        setCurrentLanguage(languages[nextIndex]);
        handleLanguageChange(languages[nextIndex]);
        console.log(language);
    };

    const navigate = useNavigate();

    const handleNavigation = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    const handleClick2 = (loc) => {
        handleNavigation();
        navigate(loc);
        closeAfterUsed();
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <header className="header" id="header">
            <nav className="navbar container">
                <div className='page-name'>
                    <a onClick={() => handleClick2("/")}><h2 className="logo">IELRobotics</h2></a>
                </div>

                <div className="menu" id="menu">
                    <ul className="list">
                        <li className="list-item">
                            <a onClick={() => handleClick2("/")}>
                                {getTranslation("home")}
                            </a>
                        </li>
                        <li className="list-item">
                            <a onClick={() => handleClick2("/news")}>
                                {getTranslation("news")}
                            </a>
                        </li>
                        <li className="list-item">
                            <a onClick={() => handleClick2("/sponsors")}>
                                {getTranslation("sponsor")}
                            </a>
                        </li>
                        <li className="list-item">
                            <a onClick={() => handleClick2("/achievements")}>
                                {getTranslation("success")}
                            </a>
                        </li>
                        <li className="list-item">
                            <a onClick={() => handleClick2("/team")}>
                                {getTranslation("team")}
                            </a>
                        </li>
                        <li className="list-item">
                            <Link onClick={handleScroll}>
                                {getTranslation("contact")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="list right">
                    <button className="btn lan" id="language-toggle-icon" onClick={handleClick}>
                        {currentLanguage.toUpperCase()}
                    </button>
                    <button className="btn-menu" id="menu-toggle-icon" onClick={toggleMenu}>
                        &#9776;
                    </button>
                </div>
            </nav>
        </header>
    )
}