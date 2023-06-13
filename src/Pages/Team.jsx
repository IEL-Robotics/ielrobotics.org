import { useContext } from "react";

import { TheImage } from "../Components/TheImage/TheImage";
import LanguageContext from "../Context/LanguageContext"

import team_image from '../Media/Images/Team.png'

export const Team = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="TeamPage" style={{marginTop: "5rem"}}> <TheImage source={team_image} text={getTranslation("team-slogan")}/></div>
    )
}