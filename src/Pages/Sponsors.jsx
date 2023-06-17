import { useContext } from "react";
import LanguageContext from "../Context/LanguageContext"
import { ContentBox } from "../Components/ContentBox/ContentBox";
import { TheImage } from "../Components/TheImage/TheImage";

import sponsor_image from '../Media/Images/Sponsor.png'

import qmark from '../Media/Images/Sponsors/qmark.png'
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
            <TheImage source={sponsor_image} text={getTranslation("sponsor-slogan")}/>
            <ContentBox image={qmark} title={"sponsor-title-why"} content={"sponsor-content-why"}/>
            <ContentBox image={ielev} title={"sponsor-title-ielev"} content={"sponsor-content-ielev"}/>
            <ContentBox image={birikim} title={"sponsor-title-birikim"} content={"sponsor-content-birikim"}/>
            <ContentBox image={bulutistan} title={"sponsor-title-bulutistan"} content={"sponsor-content-bulutistan"}/>
            <ContentBox image={ergin} title={"sponsor-title-ergin"} content={"sponsor-content-ergin"}/>
            <ContentBox image={hastavuk} title={"sponsor-title-hastavuk"} content={"sponsor-content-hastavuk"}/>
            <ContentBox image={idealpak} title={"sponsor-title-idealpak"} content={"sponsor-content-idealpak"}/>
            <ContentBox image={ozata} title={"sponsor-title-ozata"} content={"sponsor-content-ozata"}/>
            <ContentBox image={pemaks} title={"sponsor-title-pemaks"} content={"sponsor-content-pemaks"}/>
        </div>
    )
}