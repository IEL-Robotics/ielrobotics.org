import './Navbar.css'
import '../../index.css'
import { toggleMenu } from './Navbar'

import { useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'

import LanguageContext from '../../Context/LanguageContext'

export const Navbar = ({handleScroll}) => {
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

    const handleScrollAbove = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="header" id="header">
            <nav className="navbar container">
                <div className='page-name'>
                    <Link to="/"><h2 className="logo">İELRobotics</h2></Link>
                </div>

                <div className="menu" id="menu">
                    <ul className="list">
                        <li className="list-item">
                            <Link to="/" onClick={handleScrollAbove}>
                                {getTranslation("home")}
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/news" onClick={handleScrollAbove}>
                                {getTranslation("news")}
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/sponsors" onClick={handleScrollAbove}>
                                {getTranslation("sponsor")}
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/achievements" onClick={handleScrollAbove}>
                                {getTranslation("success")}
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/team" onClick={handleScrollAbove}>
                                {getTranslation("team")}
                            </Link>
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