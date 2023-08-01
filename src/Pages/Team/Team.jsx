import '../Team/Team.css'

import { useContext, useEffect, useState } from "react";

import { TheImage } from "../../Components/TheImage/TheImage";
import { SmallBox } from "../../Components/SmallBox/SmallBox";
import LanguageContext from "../../Context/LanguageContext"

import jsonfile from '../Team/TeamMembers.json'

import pfp from '../../Media/Images/Team/pfp.png'
// import team_image from '../../Media/Images/Team/Team.png'
import team_image from '../../Media/Images/Team/Team.webp'

export const Team = () => {
    const { language, getTranslation } = useContext(LanguageContext);
    const { captains, members, alumnis} = jsonfile;


    return (
        <div className="TeamPage" style={{ marginTop: "5rem" }}>
            <TheImage source={team_image} text={getTranslation("team-slogan")} />

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-mem")} </h1>
            </div>

            <div className="member-wrapper">
                {members.map((mem) => {
                    return (
                        <SmallBox key={mem.id} image={mem.pfp} name={mem.name} role={mem.role} link={mem.linkedin}>  </SmallBox>
                    )
                })}
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-alu")} </h1>
            </div>

            <div className="member-wrapper">
                {alumnis.map((alu) => {
                    return (
                        <SmallBox key={alu.id} image={alu.pfp} name={alu.name} role={alu.role} link={alu.linkedin}>  </SmallBox>
                    )
                })}
            </div>
        </div>
    )
}