import '../Sponsors/Sponsors.css'

import { useContext } from "react";
import LanguageContext from "../../Context/LanguageContext"
import { ContentBox } from "../../Components/ContentBox/ContentBox";
import { TheImage } from "../../Components/TheImage/TheImage";
import { RedirectBox } from "../../Components/RedirectBox/RedirectBox";

import sponsor_image from '../../Media/Images/Sponsor.webp'

import birikim from '../../Media/Images/Sponsors/birikim.webp'
import bulutistan from '../../Media/Images/Sponsors/bulutistan.webp'
import ergin from '../../Media/Images/Sponsors/ergin.webp'
import hastavuk from '../../Media/Images/Sponsors/hastavuk.webp'
import idealpak from '../../Media/Images/Sponsors/idealpak.webp'
import ielev from '../../Media/Images/Sponsors/ielev.webp'
import ozata from '../../Media/Images/Sponsors/ozata.webp'
import pemaks from '../../Media/Images/Sponsors/pemaks.webp'

export const Sponsors = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="SponsorPage" style={{marginTop: "5rem"}}> 
            <TheImage source={sponsor_image} text={getTranslation("sponsor-slogan")}/>
            <div className='team-title-holder'>
                <h1 className='team-title'>{ getTranslation("sponsor-title")} </h1>
            </div>
            <div className="temp-holder">
                <RedirectBox img={ielev} title1={"IELEV"} title2={""} link={"https://www.ielev.k12.tr/"}/>
                <RedirectBox img={birikim} title1={"Birikim"} title2={""} link={"https://birikimmuhendislik.com.tr"}/>
                <RedirectBox img={bulutistan} title1={"Bulutistan"} title2={""} link={"https://bulutistan.com/"}/>
                <RedirectBox img={ergin} title1={"Ergin Makine"} title2={""} link={"https://erginmakine.com.tr/"}/>
                <RedirectBox img={hastavuk} title1={"HasTavuk"} title2={""} link={"https://www.hastavuk.com.tr/tr/"}/>
                <RedirectBox img={idealpak} title1={"İdeal-Pak"} title2={""} link={"https://idealpase.com/"}/>
                <RedirectBox img={ozata} title1={"Özata"} title2={""} link={"https://www.ozatashipyard.com/"}/>
                <RedirectBox img={pemaks} title1={"Pemaks Pnömatik"} title2={""} link={"https://www.pemaks.com.tr/"}/>
            </div>
        </div>
    )
}