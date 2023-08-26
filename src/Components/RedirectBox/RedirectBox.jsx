import '../RedirectBox/RedirectBox.css'
import { useContext } from 'react';

import LanguageContext from '../../Context/LanguageContext';
import { useEffect } from 'react';

export const RedirectBox = (Props) => {
    const imgSrc = Props.img;
    const titleFirst = Props.title1;
    const titleSecond = Props.title2;
    const link = Props.link;

    useEffect(() => {
         console.log(link.includes("https"))
    }, [])

    if(link.includes("https") === false){
        return (
            <a href={`/achievements?scrollToComponentId=${link}`} rel="noopener noreferrer">
            <div className='redirect-box-container'>
                <img className='redirect-image' src={imgSrc} alt="Redirect Image" />
                <p className='redirect-image-text'>{titleSecond}</p>
                <div className='redirect-text'>
                    {titleFirst}
                </div>
            </div>
            </a>
        );
    }
    else if(link.includes("https") === true){
        return (
            <a href={link} target='_blank' rel="noopener noreferrer">
            <div className='redirect-box-container'>
                <img className='redirect-image' src={imgSrc} alt="Redirect Image" />
                <p className='redirect-image-text'>{titleSecond}</p>
                <div className='redirect-text'>
                    {titleFirst}
                </div>
            </div>
            </a>
        );
    }

}