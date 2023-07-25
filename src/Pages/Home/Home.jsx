import { useContext } from "react";
import '../Home/Home.css'

import { TheImage } from "../../Components/TheImage/TheImage";
import { ContentBox } from "../../Components/ContentBox/ContentBox";
import { VerticalBox } from "../../Components/VerticalBox/VerticalBox";
import LanguageContext from "../../Context/LanguageContext"

import home_image from "../../Media/Images/Home/8058.png"
import logo from '../../Media/Images/Home/logo.png'
import frc from '../../Media/Images/Home/frc.png'
import first from '../../Media/Images/Home/frc-logo.png'
import jf from '../../Media/Images/Home/jf-logo.png'
import tf from '../../Media/Images/Home/tfest-logo.png'
import other from '../../Media/Images/Home/other.png'
import award from '../../Media/Images/Home/award-logo.png'
import sponsor from '../../Media/Images/Home/sponsor-image.png'
import team from '../../Media/Images/Home/team-image.png'

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
            <ContentBox image={frc} title={"home-content-title-2"} content={"home-content-content-2-short"} type={1} />
            <div className='team-title-holder'>
                <h1 className='team-title'> News </h1>
            </div>
            <div className='team-title-holder'>
                <h1 className='team-title'> Competetions </h1>
            </div>
            <div className="home-comp-holder">
                <VerticalBox image={first} title={"FRC"} content={"home-competetion-frc"} type={0} link={"https://www.firstinspires.org/robotics/frc"} />
                <VerticalBox image={jf} title={"JugendForscht"} content={"home-competetion-jf"} type={1} link={"https://www.jugend-forscht.de/"} />
                <VerticalBox image={tf} title={"Teknofest"} content={"home-competetion-tekno"} type={1} link={"https://www.teknofest.org/tr/"}  />
                <VerticalBox image={other} title={getTranslation("home-competetion-other-title")} content={"home-competetion-other"} type={0} link={"/achievements"}  />
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("home-awards-title")} </h1>
            </div>
            {/* <ContentBox image={frc} title={"home-awards-title"} content={"home-awards-1"} type={1} /> */}
            <div className='team-title-holder'>
                <h1 className='team-title'> Our Partners </h1>
            </div>
            <ContentBox image={sponsor} title={"home-sponsor-title"} content={"home-sponsor-content"} type={0} />
            <div className='team-title-holder'>
                <h1 className='team-title'> Our Team </h1>
            </div>
            <ContentBox image={team} title={"home-team-title"} content={"home-team-content"} type={1} />
        </div>

    )
}