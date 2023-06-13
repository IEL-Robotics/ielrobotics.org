import { useContext } from "react";

import { TheImage } from "../Components/TheImage/TheImage";
import LanguageContext from "../Context/LanguageContext"

import home_image from '../Media/Images/8058.png'

export const Home = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        // <div style={{marginTop: "8rem"}}> {getTranslation("homepage")} </div>
        <div style={{marginTop: "5rem"}}>
            <TheImage source={home_image} text={getTranslation("home-slogan")}/>
        </div>

    )
}