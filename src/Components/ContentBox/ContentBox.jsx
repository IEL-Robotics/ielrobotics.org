import '../ContentBox/ContentBox.css'

import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import LanguageContext from '../../Context/LanguageContext';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ContentBox = (Props) => {
    const imageAdress = Props.image;
    const boxTitle = Props.title;
    const boxContent = Props.content;
    const link = Props.link;

    const type = Props.type;

    const { language, getTranslation } = useContext(LanguageContext);

    const navigate = useNavigate();

    const handleNavigation = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    const handleClick = (loc) => {
        handleNavigation();
        navigate(loc);
        closeAfterUsed();
    };

    if(type === 0){
        return (
        <div className="content-holder-yellow">
            <div className="image-container">
                <img src={imageAdress} className="image"/>
            </div>
            <div className="text-content">
                <h1 className='content-box-title'> {getTranslation(boxTitle)} </h1>
                {getTranslation(boxContent)}
                <button className="redirect-button">
                    <Link draggable="true"
                        to={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleNavigation()}>
                        &gt; {getTranslation("more")}
                    </Link>
                </button>
            </div>
        </div>
    )
        }
    else if(type === 1){
        return (
        <div className="content-holder-black">
            <div className="text-content">
                <h1 className='content-box-title'> {getTranslation(boxTitle)} </h1>
                {getTranslation(boxContent)}
                <button className="redirect-button">
                    <a draggable="true"
                        // href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleClick(link)}>
                        &gt; {getTranslation("more")}
                    </a>
                </button>
            </div>
            <div className="image-container">
                <img src={imageAdress} className="image"/>
            </div>
        </div>
    )
    }

}

//LATER TO BE DELETED