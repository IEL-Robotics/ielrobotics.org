import '../Team/Team.css'

import { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';

import { TheImage } from "../../Components/TheImage/TheImage";
import { SmallBox } from "../../Components/SmallBox/SmallBox";
import LanguageContext from "../../Context/LanguageContext"

import jsonfile from '../Team/TeamMembers.json'

// import team_image from '../../Media/Images/Team/team.webp'

import team_image from '/OtherImages/FastLoadImg/teams.webp'

export const Team = () => {
    const { language, getTranslation } = useContext(LanguageContext);
    const { captains, members, alumnis} = jsonfile;

    const [isPortrait, setIsPortrait] = useState(
        window.innerHeight > window.innerWidth
    );

    useEffect(() => {
        const handleOrientationChange = () => {
            //console.log("Orientation changed:", window.innerHeight, window.innerWidth);
            setIsPortrait(window.innerHeight > window.innerWidth);
            //console.log(isPortrait);
        };

        window.addEventListener('orientationchange', handleOrientationChange);

        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);

    return (
        <div className="TeamPage" style={{ marginTop: "5rem" }}>
            <Helmet>
                <title> {getTranslation("helmet-team")} </title>
                <link rel="shortcut icon" href="morsari-01.ico" type="image/x-icon"/>
                <meta name="description" content="Our wonderful team where every single individual is important
                and works together in harmony"/>
                <link rel="canonical" href="https://www.ielrobotics.org/team"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
            <TheImage source={team_image} text={getTranslation("team-slogan")} />

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-mem")} </h1>
            </div>

            <div className="member-wrapper">
                {members.map((mem) => {
                    return (
                        <SmallBox key={isPortrait ? mem.id : mem.id + 500} image={mem.pfp} name={mem.name} role={mem.role} link={mem.linkedin} idval={mem.id}>  </SmallBox>
                    )
                })}
            </div>

            <div className='team-title-holder'>
                <h1 className='team-title'> {getTranslation("team-titles-alu")} </h1>
            </div>

            <div className="member-wrapper">
                {alumnis.map((alu) => {
                    return (
                        <SmallBox key={isPortrait ? alu.id : alu.id + 500} image={alu.pfp} name={alu.name} role={alu.role} link={alu.linkedin} idval={alu.id}>  </SmallBox>
                    )
                })}
            </div>
        </div>
    )
}