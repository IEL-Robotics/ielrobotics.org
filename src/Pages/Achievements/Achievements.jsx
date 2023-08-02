import { useContext } from "react";

import "../Achievements/Achievements.css"

import { TheImage } from "../../Components/TheImage/TheImage";
import { TimelineHolder } from "./Timeline/TimelineHolder";
import LanguageContext from "../../Context/LanguageContext"

import success_image from '../../Media/Images/Success.webp'

export const Achievements = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    let currentSwitch = 1;

    const toggleTo = (toWhich) => {
        if(currentSwitch != toWhich){
            currentSwitch = toWhich;
            
            if(toWhich === 1){
                var elementPrev = document.getElementById("btn2");
                elementPrev.classList.remove("selected");

                var elementNext = document.getElementById("btn1");
                elementNext.classList.add("selected");
                console.log("ICERDEYIZ1");
            }
            if(toWhich === 2){
                var elementPrev = document.getElementById("btn1");
                elementPrev.classList.remove("selected");

                var elementNext = document.getElementById("btn2");
                elementNext.classList.add("selected");
                console.log("ICERDEYIZ2");
            }
        }
    }

    return(
        <div className="AchievePage" style={{marginTop: "5rem"}}> 
            <TheImage source={success_image} text={getTranslation("success-slogan")}/> 
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("achi-title")} </h1>
            </div>
            <div className="achi-toggle-container">
                <div className="achi-slider">
                    <button className="achi-button selected" id="btn1" onClick={() => toggleTo(1)}>Competetions</button>
                    <button className="achi-button" id="btn2" onClick={() => toggleTo(2)}>Community</button>
                </div>
            </div>
            <TimelineHolder/>
        </div>
        )
}