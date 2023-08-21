import { useContext, useEffect, useState } from "react";
import '../Home/Home.css'

import { TheImage } from "../../Components/TheImage/TheImage";
import { ContentBox} from "../../Components/ContentBox/ContentBox";
import { TemporaryNewsBox } from "../../Components/ContentBox/TemporaryNewsBox";
import { VerticalBox } from "../../Components/VerticalBox/VerticalBox";
import {RedirectBox} from '../../Components/RedirectBox/RedirectBox'
import { Helmet } from 'react-helmet-async';
import LanguageContext from "../../Context/LanguageContext"

import home_image from "/OtherImages/HomeImages/8058s.webp"
import logo from '/OtherImages/HomeImages/logos.webp'
import iel from '/OtherImages/HomeImages/iellogos.webp'
import award1 from '/OtherImages/HomeImages/award1s.webp'
import award2 from '/OtherImages/HomeImages/award2s.webp'
import award3 from '/OtherImages/HomeImages/award3s.webp'
import sponsor from '/OtherImages/HomeImages/sponsor-images.webp'
import team from '/OtherImages/HomeImages/teams.webp'

export const Home = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    const returnIELLink = () => {
        if(language === "en"){return("https://en.wikipedia.org/wiki/Istanbul_High_School");}
        else if(language === "tr"){return("https://tr.wikipedia.org/wiki/%C4%B0stanbul_Erkek_Lisesi");}
        if(language === "de"){return("https://de.wikipedia.org/wiki/%C4%B0stanbul_Erkek_Lisesi");}
    }

    const [isPortrait, setIsPortrait] = useState(
        window.innerHeight > window.innerWidth
    );

    useEffect(() => {
        const handleOrientationChange = () => {
            console.log("Orientation changed:", window.innerHeight, window.innerWidth);
            setIsPortrait(window.innerHeight > window.innerWidth);
            // setIsPortrait(!isPortrait);
            console.log(isPortrait);
        };

        window.addEventListener('orientationchange', handleOrientationChange);

        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);

    return(
        // <div style={{marginTop: "8rem"}}> {getTranslation("homepage")} </div>
        <div className="HomePage" style={{marginTop: "5rem"}}>
            <Helmet>
                <title> {getTranslation("helmet-home")}</title>
            </Helmet>
            <TheImage source={home_image} text={getTranslation("home-slogan")}/>
            <div className='team-title-holder'>
                <h1 className='team-title'> #FAQ </h1>
            </div>
            <ContentBox image={logo} title={"home-content-title-1"} content={"home-content-content-1-short"} type={0} link={"/team"} key={isPortrait ? 'portrait' : 'landscape'} ori={isPortrait ? 0 : 1}/>
            <ContentBox image={iel} title={"home-content-title-2"} content={"home-content-content-2-short"} type={1} link={returnIELLink()} key={isPortrait ? 'portrait2' : 'landscape2'}/>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-news") } </h1>
            </div>
            <TemporaryNewsBox/>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-competetions") } </h1>
            </div>
            <div className="home-comp-holder">
                <VerticalBox image1={"/OtherImages/HomeImages/frcback2.webp"} image2={"/OtherImages/HomeImages/first-logo-vector.svg"} title={"FRC"} content={"home-competetion-frc"} type={0} link={"https://www.firstinspires.org/robotics/frc"} />
                <VerticalBox image1={"/OtherImages/AchiImages/JF23/jf23(0).webp"} image2={"/OtherImages/HomeImages/jf-logo-vector.svg"} title={"JugendForscht"} content={"home-competetion-jf"} type={1} link={"https://www.jugend-forscht.de/"} />
                <VerticalBox image1={"/OtherImages/AchiImages/TF22/tf22(1).webp"} title={"Teknofest"} image2={"/OtherImages/HomeImages/tflogo.webp"} content={"home-competetion-tekno"} type={2} link={"https://www.teknofest.org/tr/"}  />
                <VerticalBox image1={"/OtherImages/HomeImages/urfaback.webp"} title={"home-competetion-other-title"} image2={"/OtherImages/HomeImages/other-logos.webp"} content={"home-competetion-other"} type={3} link={"https://www.firstinspires.org/robotics/frc"} />

            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-awards") } </h1>
            </div>
            {/* <ContentBox image={frc} title={"home-awards-title"} content={"home-awards-1"} type={1} /> */}
            <div className="temp-holder">
                <RedirectBox img={award1} title1={"Bosphorus 2022"} title2={"Winner"} link={"/achievements"}/>
                <RedirectBox img={award3} title1={"JF Biology 2023"} title2={"1st Place"} link={"/achievements"}/>
                <RedirectBox img={award2} title1={"Izmir 2021"} title2={"Winner"} link={"/achievements"}/>
            </div>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-partners") } </h1>
            </div>
            <ContentBox image={sponsor} title={"home-sponsor-title"} content={"home-sponsor-content"} type={0} link={"/sponsors"} key={isPortrait ? 'portrait3' : 'landscape3'}/>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-team") } </h1>
            </div>
            <ContentBox image={team} title={"home-team-title"} content={"home-team-content"} type={1} link={"/team"} key={isPortrait ? 'portrait4' : 'landscape4'}/>
        </div>

    )
}