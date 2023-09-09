import '../VerticalBox/VerticalBox.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import LanguageContext from '../../Context/LanguageContext';

export const VerticalBox = (Props) => {
    const imageAdress = Props.image1;
    const imageAdress2 = Props.image2;
    const boxTitle = Props.title;
    const boxContent = Props.content;
    const link = Props.link;

    const idArray = ["frc","jf","tekno","other"];
    const type = Props.type;

    const { language, getTranslation } = useContext(LanguageContext);

    const handleNavigation = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    return (
        <div className="vertical-holder">
            <div className="vertical-image-container">
                <img src={imageAdress2} className='vertical-image-front' alt='verticalimg'/>
                <img src={imageAdress} className="vertical-image-back" alt='verticalimg'/>
            </div>
                
                
            <h1 className='vertical-box-title' id={`vertical-${idArray[type]}`}> {getTranslation(boxTitle)} </h1>
            
            <div className="vertical-text-content">
                {getTranslation(boxContent)}
                <button className="vertical-redirect-button">
                    {
                    link.includes("https") ? (<a draggable="true"
                        href={link}
                        target='_blank'
                        rel="noopener noreferrer"
                        onClick={() => handleNavigation()}>
                        &gt; {getTranslation("more")}
                        </a>) : (<Link to={link} onClick={handleNavigation}> 
                        &gt; {getTranslation("more")} </Link>)
                    }
                </button>
            </div>
        </div>
    )
}