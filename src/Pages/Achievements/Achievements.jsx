import { useContext, useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../Achievements/Achievements.css"

import { TheImage } from "../../Components/TheImage/TheImage";
import { Helmet } from 'react-helmet-async';
import { TimelineHolder } from "./Timeline/TimelineHolder";
import LanguageContext from "../../Context/LanguageContext"

import success_image from '/OtherImages/FastLoadImg/Successs.webp'

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
            document.getElementById("tt-achi").textContent = getTranslation("achi-titles-1");
        }
        else if(!displayComp){
            document.getElementById("tt-achi").textContent = getTranslation("achi-titles-2");
        }
    }, [displayComp, language]);

    return(
        <div className="AchievementsPage" style={{marginTop: "5rem"}}> 
            <Helmet>
                <title> {getTranslation("helmet-achi")} </title>
                <link rel="shortcut icon" href="morsari-01.ico" type="image/x-icon"/>
                <meta name="description" content="Here's what we have achieved in all types of competetions over the years"/>
                <link rel="canonical" href="https://www.ielrobotics.org/achievements"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
            <TheImage source={success_image} text={getTranslation("success-slogan")}/> 
            <div className='team-title-holder'>
                {/* <h1 className='team-title'> {getTranslation("achi-title")} </h1> */}
                <h1 className='team-title' id="tt-achi"> {getTranslation("achi-titles-1")}</h1>
            </div>
            <div className="achi-toggle-container">
                <div className="achi-slider">
                    <button className="achi-button selected" id="btn1" onClick={() => toggleTo(true)}>{getTranslation("achi-button-1")}</button>
                    <button className="achi-button" id="btn2" onClick={() => toggleTo(false)}>{getTranslation("achi-button-2")}</button>
                </div>
            </div>
            <TimelineHolder type={displayComp}/>
        </div>
        )
}