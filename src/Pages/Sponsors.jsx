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
            <div className='team-title-holder'>
                <h1 className='team-title'> OUR SPONSORS </h1>
            </div>
            <ContentBox image={qmark} title={"sponsor-title-why"} content={"sponsor-content-why"} type={0}/>
            <ContentBox image={ielev} title={"sponsor-title-ielev"} content={"sponsor-content-ielev"}type={1}/>
            <ContentBox image={birikim} title={"sponsor-title-birikim"} content={"sponsor-content-birikim"}type={0}/>
            <ContentBox image={bulutistan} title={"sponsor-title-bulutistan"} content={"sponsor-content-bulutistan"}type={1}/>
            <ContentBox image={ergin} title={"sponsor-title-ergin"} content={"sponsor-content-ergin"}type={0}/>
            <ContentBox image={hastavuk} title={"sponsor-title-hastavuk"} content={"sponsor-content-hastavuk"}type={1}/>
            <ContentBox image={idealpak} title={"sponsor-title-idealpak"} content={"sponsor-content-idealpak"}type={0}/>
            <ContentBox image={ozata} title={"sponsor-title-ozata"} content={"sponsor-content-ozata"}type={1}/>
            <ContentBox image={pemaks} title={"sponsor-title-pemaks"} content={"sponsor-content-pemaks"}type={0}/>
        </div>
    )
}