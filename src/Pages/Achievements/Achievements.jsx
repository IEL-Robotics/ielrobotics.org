import { useContext, useEffect, useState } from "react";

import "../Achievements/Achievements.css"

import { TheImage } from "../../Components/TheImage/TheImage";
import { TimelineHolder } from "./Timeline/TimelineHolder";
import LanguageContext from "../../Context/LanguageContext"

import success_image from '../../Media/Images/Success.webp'

export const Achievements = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    const [displayComp, setDisplay] = useState(true);

    const toggleTo = (toWhich) => {
        if(toWhich !== displayComp){
            setDisplay(toWhich);

            if(toWhich){
                var elementPrev = document.getElementById("btn2");
                elementPrev.classList.remove("selected");

                var elementNext = document.getElementById("btn1");
                elementNext.classList.add("selected");
            }

            else if(!toWhich){
                var elementPrev = document.getElementById("btn1");
                elementPrev.classList.remove("selected");

                var elementNext = document.getElementById("btn2");
                elementNext.classList.add("selected");
            }
        }
    }

    useEffect(() => {
        if(displayComp){
            document.getElementById("tt-achi").textContent = "COMPETETION HISTORY";
        }
        else if(!displayComp){
            document.getElementById("tt-achi").textContent = "COMMUNITY SERVICES";
        }
    }, [displayComp]);


    return(
        <div className="AchievePage" style={{marginTop: "5rem"}}> 
            <TheImage source={success_image} text={getTranslation("success-slogan")}/> 
            <div className='team-title-holder'>
                {/* <h1 className='team-title'> {getTranslation("achi-title")} </h1> */}
                <h1 className='team-title' id="tt-achi"> COMPETETION HISTORY</h1>
            </div>
            <div className="achi-toggle-container">
                <div className="achi-slider">
                    <button className="achi-button selected" id="btn1" onClick={() => toggleTo(true)}>Competetions</button>
                    <button className="achi-button" id="btn2" onClick={() => toggleTo(false)}>Community</button>
                </div>
            </div>
            <TimelineHolder type={displayComp}/>
        </div>
        )
}