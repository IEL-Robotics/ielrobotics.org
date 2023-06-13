import { useContext } from "react";
import LanguageContext from "../Context/LanguageContext"

export const Sponsors = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    return(
        <div className="SponsorPage" style={{marginTop: "5rem"}}> {getTranslation("sponsorpage")} </div>
    )
}