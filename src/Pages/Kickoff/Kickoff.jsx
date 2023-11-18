import { useContext } from "react";

import '../Kickoff/Kickoff.css'
import { Helmet } from 'react-helmet-async';
import { TheImage } from "../../Components/TheImage/TheImage";
import LanguageContext from "../../Context/LanguageContext"

import news_image from '/OtherImages/FastLoadImg/kickoff.webp'

export const Kickoff = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="NewsPage" style={{marginTop: "5rem"}}> 
            <Helmet>
                <title> {getTranslation("helmet-news")} </title>
                <meta name="description" content="Do not miss a single thing happening. There's a lot going on here :)"/>
                <link rel="canonical" href="https://www.ielrobotics.org/news"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
            <TheImage source={news_image} text={getTranslation("kickoff-slogan")}/>
            <div className="oopsie">
                <p className="oopsie-text">Are you ready for KickOff</p>
                <p className="oopsie-text">It's coming soon 😇</p>
            </div>
        </div>
        
    )
}