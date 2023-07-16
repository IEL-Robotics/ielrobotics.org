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
            <div className="text-content" style={{padding: "5px"}}>
                <h1 style={{marginBottom: "25px", padding: "0"}}> {getTranslation(boxTitle)} </h1>
                {getTranslation(boxContent)}
            </div>
        </div>
    )
}