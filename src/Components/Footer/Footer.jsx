import './Footer.css'
import { useContext, useRef } from 'react';

import LanguageContext from '../../Context/LanguageContext'

import Insta from '../../Media/Images/Footer-Icons/insta.png'
import TikTok from '../../Media/Images/Footer-Icons/tiktok.png'
import Twitter from '../../Media/Images/Footer-Icons/twitter.png'
import Linkedin from '../../Media/Images/Footer-Icons/linkedin.png'
import TBA from '../../Media/Images/Footer-Icons/tba.png'
import Youtube from '../../Media/Images/Footer-Icons/youtube.png'

export const Footer = ({scrollRef}) => {

    const { language, getTranslation } = useContext(LanguageContext);

    return (
        <>
        <div ref={scrollRef}></div>
        <div className="main-container">
            <div className="some-text-container">
                <p> {getTranslation("footer-contact")}</p>
                <strong> ielrobotikkulubu@gmail.com </strong>
                <button id="btn-sponsor"> {getTranslation("footer-file").toUpperCase()} </button>
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
            <div style={{height: "20vh"}}></div>
        </div>
        </>
    )
}

// DESIGN THE BOTTOM, COPYRIGHTS BLA BLA