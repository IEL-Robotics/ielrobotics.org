import '../Team/Team.css'

import { useContext, useEffect, useState } from "react";

import { TheImage } from "../../Components/TheImage/TheImage";
import { SmallBox } from "../../Components/SmallBox/SmallBox";
import LanguageContext from "../../Context/LanguageContext"

import jsonfile from '../Team/TeamMembers.json'

import pfp from '../../Media/Images/Team/pfp.png'
import team_image from '../../Media/Images/Team/Team.png'

export const Team = () => {
    const { language, getTranslation } = useContext(LanguageContext);
    const { captains, members, alumnis} = jsonfile;


    return (
        <div className="TeamPage" style={{ marginTop: "5rem" }}>
            <TheImage source={team_image} text={getTranslation("team-slogan")} />
            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-cap")} </h1>
            </div>
            <div className='captains-wrapper'>
                {captains.map((cap) => {
                    console.log(cap.linkedin)
                    return(
                        <SmallBox key={cap.id} image={cap.pfp} name={cap.name} role={cap.role} link={cap.linkedin}>  </SmallBox>
                    )
                })}
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-mem")} </h1>
            </div>

            <div className="member-wrapper">
                {members.map((mem) => {
                    return (
                        <SmallBox key={mem.id} image={pfp} name={mem.name} role={mem.role} link={mem.linkedin}>  </SmallBox>
                    )
                })}
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-alu")} </h1>
            </div>

            <div className="member-wrapper">
                {alumnis.map((alu) => {
                    return (
                        <SmallBox key={alu.id} image={pfp} name={alu.name} role={alu.role} link={alu.linkedin}>  </SmallBox>
                    )
                })}
            </div>
        </div>
    )
}