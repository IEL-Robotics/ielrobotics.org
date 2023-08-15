import './Footer.css'
import { useContext, useRef } from 'react';

import LanguageContext from '../../Context/LanguageContext'

import Insta from '../../Media/Images/Footer-Icons/insta.webp'
import TikTok from '../../Media/Images/Footer-Icons/tiktok.webp'
import Twitter from '../../Media/Images/Footer-Icons/twitter.webp'
import Linkedin from '../../Media/Images/Footer-Icons/linkedin.webp'
import TBA from '../../Media/Images/Footer-Icons/tba.webp'
import Youtube from '../../Media/Images/Footer-Icons/youtube.webp'

import sponsor_tr from '../../Media/PDF/ielrobotics_tr.pdf'
import sponsor_en from '../../Media/PDF/ielrobotics_en.pdf'
import sponsor_de from '../../Media/PDF/ielrobotics_de.pdf'

export const Footer = ({scrollRef}) => {

    const { language, getTranslation } = useContext(LanguageContext);

    const openSponsorshipFile = () => {
        if(language === 'en'){window.open(sponsor_en, '_blank');}
        else if(language === 'tr'){window.open(sponsor_tr, '_blank');}
        else if(language === 'de'){window.open(sponsor_de, '_blank');}
    }

    return (
        <>
        <div ref={scrollRef}></div>
        <div className="main-container">
            <div className="some-text-container">
                <p> {getTranslation("footer-contact")}</p>
                <strong> ielrobotikkulubu@gmail.com </strong>
                <button id="btn-sponsor" type='submit' onClick={openSponsorshipFile}> 
                {getTranslation("footer-file").toUpperCase()} 
                </button>
            </div>
            <div className="social-container">
                <div className="wrapper" id='instaID'>
                    <a
                        draggable="true"
                        href="https://instagram.com/ielrobotics"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="media-logo" src={Insta} alt="instagram logo" />
                    </a>
                </div>
                <div className="wrapper" id='twitterID'>
                    <a
                        draggable="true"
                        href="https://twitter.com/ielrobotics"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="media-logo" src={Twitter} alt="twitter logo" />
                    </a>
                </div>
                <div className="wrapper" id='linkedinID'>
                    <a
                        draggable="true"
                        href="https://www.linkedin.com/in/iel-robotics-679001198"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="media-logo" src={Linkedin} alt="linkedin logo" />
                    </a>
                </div>

                <div className="wrapper" id='youtubeID'>
                    <a
                        draggable="true"
                        href="https://www.youtube.com/channel/UCkxfrWkt9jEckAzERL970ew"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="media-logo" src={Youtube} alt="youtube logo" />
                    </a>
                </div>
                <div className="wrapper" id='tiktokID'>
                    <a
                        draggable="true"
                        href="https://twitter.com/ielrobotics"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="media-logo" src={TikTok} alt="tiktok logo" />
                    </a>
                </div>
                <div className="wrapper" id='tbaID'>
                    <a
                        draggable="true"
                        href="https://www.thebluealliance.com/team/8058"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="media-logo" src={TBA} alt="tba logo" />
                    </a>
                </div>
            
            </div>
            <div style={{height: "10vh"}}></div>
            <div id="footer-licence" style={{height: "8rem", backgroundColor: "black", textAlign: "center"}}>
                <br></br>
                {getTranslation("footer-note")}
                <br></br>
                Copyright ©{new Date().getFullYear()} IELRobotics#8058. {getTranslation("footer-rights")}
            </div>
        </div>
        <div id="footer-licence2" style={{backgroundColor: "black", textAlign: "center"}}>
               {getTranslation("footer-madeby")} <a id="github-links" href='https://github.com/jagxas'> @umut</a>
            </div>
        </>
    )
}