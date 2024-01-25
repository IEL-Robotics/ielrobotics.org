import { useContext, useEffect, useState } from "react";

import '../News/News.css'
import { Helmet } from 'react-helmet-async';
import { TheImage } from "../../Components/TheImage/TheImage";
import LanguageContext from "../../Context/LanguageContext"

import news_image from '/OtherImages/FastLoadImg/Newss.webp'

export const News = () => {
    const [pdfName, setPdfName] = useState("/Docs/Blick_december_(eng).pdf");
    const { language, getTranslation } = useContext(LanguageContext);

    useEffect(() => {
        if (language === 'en') {
            setPdfName("/Docs/Blick_december_(eng).pdf");
        } else if (language === 'de') {
            setPdfName("/Docs/Blick_dezember_(de).pdf");
        } else if (language === 'tr') {
            setPdfName("/Docs/Blick_aralik_(tr).pdf");
        }
    }, [language]);

    const isInlinePDFSupported = () => {
        return navigator.mimeTypes && navigator.mimeTypes['application/pdf'];
    };

    return (
        <div className="NewsPage" style={{ marginTop: "5rem" }}>
            <Helmet>
                <title> {getTranslation("helmet-news")} </title>
                <meta name="description" content="Do not miss a single thing happening. There's a lot going on here :)"/>
                <link rel="canonical" href="https://www.ielrobotics.org/news"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
            <TheImage source={news_image} text={getTranslation("news-slogan")}/>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("magazine-title1")} </h1>
            </div>
            <div className="oopsie">
                <p className="oopsie-text">{getTranslation("magazine-text")}</p>
                {isInlinePDFSupported() ? (
                    <iframe className="magazine-pdf" src={pdfName} frameBorder={5}></iframe>
                ) : (
                    <a href={pdfName} target="_blank" rel="noopener noreferrer" style={{marginLeft: "10%", marginRight: "10%",textAlign:"center"}}>
                        {getTranslation("download-pdf")}
                    </a>
                )}
            </div>
        </div>
    );
}