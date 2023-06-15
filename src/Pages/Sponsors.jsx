import { useContext } from "react";
import LanguageContext from "../Context/LanguageContext"
import { ContentBox } from "../Components/ContentBox/ContentBox";

import birikim from '../Media/Images/Sponsors/birikim.png'
import bulutistan from '../Media/Images/Sponsors/bulutistan.png'
import ergin from '../Media/Images/Sponsors/ergin.png'
import hastavuk from '../Media/Images/Sponsors/hastavuk.png'
import idealpak from '../Media/Images/Sponsors/idealpak.png'
import ielev from '../Media/Images/Sponsors/ielev.png'
import ozata from '../Media/Images/Sponsors/ozata.png'
import pemaks from '../Media/Images/Sponsors/pemaks.png'

export const Sponsors = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="SponsorPage" style={{marginTop: "5rem"}}> 
            {getTranslation("sponsorpage")} 
            <ContentBox image={ielev} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={birikim} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={bulutistan} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={ergin} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={hastavuk} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={idealpak} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={ozata} title={"home-content-title-1"} content={"dümen"}/>
            <ContentBox image={pemaks} title={"home-content-title-1"} content={"dümen"}/>
        </div>
    )
}