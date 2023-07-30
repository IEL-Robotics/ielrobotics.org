import '../ContentBox/ContentBox.css'

import { useContext } from 'react';

import LanguageContext from '../../Context/LanguageContext';

export const ContentBox = (Props) => {
    const imageAdress = Props.image;
    const boxTitle = Props.title;
    const boxContent = Props.content;
    const link = Props.link;

    const type = Props.type;

    const { language, getTranslation } = useContext(LanguageContext);

    if(type === 0){
        return (
        <div className="content-holder-yellow">
            <div className="image-container">
                <img src={imageAdress} className="image"/>
            </div>
            <div className="text-content" style={{padding: "5px"}}>
                <h1 className='content-box-title'> {getTranslation(boxTitle)} </h1>
                {getTranslation(boxContent)}
                <button className="redirect-button">
                    <a draggable="true"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer">
                        &gt; {getTranslation("more")}
                    </a>
                </button>
            </div>
        </div>
    )
        }
    else if(type === 1){
        return (
        <div className="content-holder-black">
            <div className="text-content" style={{padding: "5px"}}>
                <h1 className='content-box-title'> {getTranslation(boxTitle)} </h1>
                {getTranslation(boxContent)}
                <button className="redirect-button">
                    <a draggable="true"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer">
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
