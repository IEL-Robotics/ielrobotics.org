import { useContext } from "react";

import { TheImage } from "../Components/TheImage/TheImage";
import LanguageContext from "../Context/LanguageContext"

import news_image from '../Media/Images/News.png'

export const News = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="NewsPage" style={{marginTop: "5rem"}}> <TheImage source={news_image} text={getTranslation("news-slogan")}/></div>
    )
}