import '../Team/Team.css'

import { useContext, useEffect, useState } from "react";

import { TheImage } from "../../Components/TheImage/TheImage";
import { SmallBox } from "../../Components/SmallBox/SmallBox";
import LanguageContext from "../../Context/LanguageContext"

import jsonfile from '../Team/TeamMembers.json'

import pfp from '../../Media/Images/Team/pfp.png'
import team_image from '../../Media/Images/Team/Team.png'

import pic_emel from '../../Media/Images/Team/pfp.png' // Not my proudest idea
import pic_furkan from '../../Media/Images/Team/pfp.png' // pls fix it
import pic_eren from '../../Media/Images/Team/pfp.png' // i beg you
import pic_alperen from '../../Media/Images/Team/pfp.png' // maybe we should really carry all images to a digital database
import pic_igalhan from '../../Media/Images/Team/pfp.png'
import pic_omer from '../../Media/Images/Team/pfp.png'
import pic_umut from '../../Media/Images/Team/pfp.png'


// WE DEFINITELY NEED A SOLUTION
// TOO MANY MEMBER-ALUMNIS
// STORE PHOTOS ONLINE AND LINKS TO JSON FILE

export const Team = () => {
    const { language, getTranslation } = useContext(LanguageContext);
    const { captains, members, alumnis} = jsonfile;

    const captains_pictures = [pic_emel, pic_furkan, pic_eren, pic_alperen, pic_igalhan, pic_omer, pic_umut];
    const members_pictures = [pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp];
    const alumnis_pictures = [pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp, pfp];


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
                        <SmallBox key={cap.id} image={captains_pictures[cap.id -1]} name={cap.name} role={cap.role} link={cap.linkedin}>  </SmallBox>
                    )
                })}
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-mem")} </h1>
            </div>

            <div className="member-wrapper">
                {members.map((mem) => {
                    return (
                        <SmallBox key={mem.id} image={members_pictures[mem.id -1]} name={mem.name} role={mem.role} link={mem.linkedin}>  </SmallBox>
                    )
                })}
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-alu")} </h1>
            </div>

            <div className="member-wrapper">
                {alumnis.map((alu) => {
                    return (
                        <SmallBox key={alu.id} image={alumnis_pictures[alu.id -1]} name={alu.name} role={alu.role} link={alu.linkedin}>  </SmallBox>
                    )
                })}
            </div>
        </div>
    )
}