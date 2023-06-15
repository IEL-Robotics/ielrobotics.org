import { useContext } from "react";

import { TheImage } from "../Components/TheImage/TheImage";
import { ContentBox } from "../Components/ContentBox/ContentBox";
import LanguageContext from "../Context/LanguageContext"

import home_image from '../Media/Images/Home/8058.png'
import logo from '../Media/Images/Home/robotik-logo.png'
import frc from '../Media/Images/Home/frc.png'
import hundred from '../Media/Images/Home/hundred.png'

export const Home = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        // <div style={{marginTop: "8rem"}}> {getTranslation("homepage")} </div>
        <div style={{marginTop: "5rem"}}>
            <TheImage source={home_image} text={getTranslation("home-slogan")}/>
            <ContentBox image={logo} title={"home-content-title-1"} content={"home-content-content-1"} />
            <ContentBox image={frc} title={"home-content-title-2"} content={"home-content-content-2"} />
            <ContentBox image={hundred} title={"home-content-title-2"} content={"dümen"} />
        </div>

    )
}