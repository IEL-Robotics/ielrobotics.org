import '../SmallBox/SmallBox.css'
import { useContext, useState } from 'react';

import LanguageContext from '../../Context/LanguageContext';
import placeholder from "/OtherImages/Loading/pfpload11.webp"

export const SmallBox = (Props) => {
    const profilePic = Props.image;
    const boxName = Props.name;
    const boxRole = Props.role;
    const linkedin = Props.link;

    const { language, getTranslation } = useContext(LanguageContext);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
        <div className="smallbox-content-holder">
            <div className="smallbox-image-container">
                <a href={linkedin} style={{textDecoration: "underline"}} draggable="true" target="_blank">
                    <img 
                        src={imageLoaded ? profilePic: placeholder} 
                        id="smallbox-pic" 
                        className="smallbox-image"
                        onLoad={handleImageLoad}
                    />
                </a>
            </div>
            <div className="smallbox-text-content">
                <h4 id="team-header-name" style={{marginBottom: "5px", padding: "0", textAlign: "center"}}> {boxName} </h4>
                <h5 id="team-header-role" style={{textAlign: "center"}}>  {getTranslation(boxRole)} </h5>
            </div>
        </div>
    )
}
