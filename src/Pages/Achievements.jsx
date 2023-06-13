import { useContext } from "react";

import { TheImage } from "../Components/TheImage/TheImage";
import LanguageContext from "../Context/LanguageContext"

import success_image from '../Media/Images/Success.png'

export const Achievements = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="AchievePage" style={{marginTop: "5rem"}}> <TheImage source={success_image} text={getTranslation("success-slogan")}/> </div>
    )
}