import { useContext } from "react";
import '../Home/Home.css'

import { TheImage } from "../../Components/TheImage/TheImage";
import { ContentBox } from "../../Components/ContentBox/ContentBox";
import { VerticalBox } from "../../Components/VerticalBox/VerticalBox";
import {RedirectBox} from '../../Components/RedirectBox/RedirectBox'
import LanguageContext from "../../Context/LanguageContext"

import home_image from "../../Media/Images/Home/8058.png"
import logo from '../../Media/Images/Home/logo.png'
import iel from '../../Media/Images/Home/iellogo.png'
import frc from '../../Media/Images/Home/frc.png'
import first from '../../Media/Images/Home/frc-logo.png'
import jf from '../../Media/Images/Home/jf-logo.png'
import tf from '../../Media/Images/Home/tfest-logo.png'
import other from '../../Media/Images/Home/other.png'
import award1 from '../../Media/Images/Home/award1.jpg'
import award2 from '../../Media/Images/Home/award2.jpg'
import award3 from '../../Media/Images/Home/award3.jpg'
import sponsor from '../../Media/Images/Home/sponsor-image.png'
import team from '../../Media/Images/Home/team-image.png'

import news from '../../Media/Images/News.png'

export const Home = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        // <div style={{marginTop: "8rem"}}> {getTranslation("homepage")} </div>
        <div style={{marginTop: "5rem"}}>
            <TheImage source={home_image} text={getTranslation("home-slogan")}/>
            <div className='team-title-holder'>
                <h1 className='team-title'> #FAQ </h1>
            </div>
            <ContentBox image={logo} title={"home-content-title-1"} content={"home-content-content-1-short"} type={0} />
            <ContentBox image={iel} title={"home-content-title-2"} content={"home-content-content-2-short"} type={1} />
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-news")} </h1>
            </div>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-competetions")} </h1>
            </div>
            <div className="home-comp-holder">
                <VerticalBox image1={"/OtherImages/HomeImages/frcback.jpeg"} image2={"/OtherImages/HomeImages/first-logo-vector.svg"} title={"FRC"} content={"home-competetion-frc"} type={0} link={"https://www.firstinspires.org/robotics/frc"} />
                <VerticalBox image1={award3} image2={"/OtherImages/HomeImages/jf-logo-vector.svg"} title={"JugendForscht"} content={"home-competetion-jf"} type={1} link={"https://www.jugend-forscht.de/"} />
                <VerticalBox image1={"/OtherImages/HomeImages/trabzonback.png"} title={"Teknofest"} image2={"/OtherImages/HomeImages/teknofest-logo-vector.svg"} content={"home-competetion-tekno"} type={2} link={"https://www.teknofest.org/tr/"}  />
                <VerticalBox image1={"/OtherImages/HomeImages/urfaback.png"} title={"home-competetion-other-title"} image2={"/OtherImages/HomeImages/other-logos-vector.png"} content={"home-competetion-other"} type={3} link={"https://www.firstinspires.org/robotics/frc"} />

            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-awards")} </h1>
            </div>
            {/* <ContentBox image={frc} title={"home-awards-title"} content={"home-awards-1"} type={1} /> */}
            <div className="temp-holder">
                <RedirectBox img={award1} title1={"Bosphorus 2022"} title2={"Winner"} link={"/achievements"}/>
                <RedirectBox img={award3} title1={"JF Biology 2023"} title2={"1st Place"} link={"/achievements"}/>
                <RedirectBox img={award2} title1={"Izmir 2021"} title2={"Winner"} link={"/achievements"}/>
            </div>
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-partners")} </h1>
            </div>
            <ContentBox image={sponsor} title={"home-sponsor-title"} content={"home-sponsor-content"} type={0} />
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-section-team")} </h1>
            </div>
            <ContentBox image={team} title={"home-team-title"} content={"home-team-content"} type={1} />
        </div>

    )
}