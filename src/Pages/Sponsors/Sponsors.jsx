import '../Sponsors/Sponsors.css'

import { useContext } from "react";
import { Helmet } from 'react-helmet-async';
import LanguageContext from "../../Context/LanguageContext"
import { ContentBox } from "../../Components/ContentBox/ContentBox";
import { TheImage } from "../../Components/TheImage/TheImage";
import { RedirectBox } from "../../Components/RedirectBox/RedirectBox";

// import sponsor_image from '../../Media/Images/Sponsor.webp'
import sponsor_image from '/OtherImages/FastLoadImg/Sponsors.webp'

import birikim from '/OtherImages/FastLoadImg/birikim.webp'
import bulutistan from '/OtherImages/FastLoadImg/bulutistan.webp'
import ergin from '/OtherImages/FastLoadImg/ergin.webp'
import hastavuk from '/OtherImages/FastLoadImg/hastavuk.webp'
import idealpak from '/OtherImages/FastLoadImg/idealpak.webp'
import ielev from '/OtherImages/FastLoadImg/ielev.webp'
import ozata from '/OtherImages/FastLoadImg/ozata.webp'
import pemaks from '/OtherImages/FastLoadImg/pemaks.webp'

const title = "Sponsors - 8058";

export const Sponsors = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="SponsorPage" style={{marginTop: "5rem"}}> 
            <Helmet>
                <title> {getTranslation("helmet-sponsor")} </title>
                <meta name="description" content="Meet the people who support innovation, technology and young fresh talents
                in the field of STEM"/>
                <link rel="canonical" href="https://www.ielrobotics.org/sponsors"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
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