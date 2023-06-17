import '../ContentBox/ContentBox.css'
import { useContext } from 'react';

import LanguageContext from '../../Context/LanguageContext';

export const ContentBox = (Props) => {
    const imageAdress = Props.image;
    const boxTitle = Props.title;
    const boxContent = Props.content;

    const { language, getTranslation } = useContext(LanguageContext);

    return (
        <div className="content-holder">
            <div className="image-container">
                <img src={imageAdress} className="image"/>
            </div>
            <div className="text-content">
                <h2 style={{marginBottom: "10px"}}> {getTranslation(boxTitle)} </h2>
                {getTranslation(boxContent)}
            </div>
        </div>
    )
}