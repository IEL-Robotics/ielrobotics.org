import '../SmallBox/SmallBox.css'
import { useContext } from 'react';

import LanguageContext from '../../Context/LanguageContext';
import pfp from '../../Media/Images/Team/pfp.png'

export const SmallBox = (Props) => {
    const profilePic = Props.image;
    const boxName = Props.name;
    const boxRole = Props.role;
    const linkedin = Props.link;

    const { language, getTranslation } = useContext(LanguageContext);

    return (
        <div className="smallbox-content-holder">
            <div className="smallbox-image-container">
                <a href={linkedin} style={{textDecoration: "underline"}} draggable="true" target="_blank">
                    <img id="smallbox-pic" src={profilePic} className="smallbox-image"/>
                </a>
            </div>
            <div className="smallbox-text-content">
                <h4 id="team-header-name" style={{marginBottom: "5px", padding: "0", textAlign: "center"}}> {boxName} </h4>
                <h5 id="team-header-role" style={{textAlign: "center"}}>  {getTranslation(boxRole)} </h5>
            </div>
        </div>
    )
}
