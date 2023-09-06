import { useContext} from "react";
import LanguageContext from "../../Context/LanguageContext"

import './NotFound.css'

export const NotFound = () => {

    const { language, getTranslation } = useContext(LanguageContext);
    return(
        <div id="notfound">
            <h1>{getTranslation("error1")}</h1>
            <h2>{getTranslation("error2")}</h2>
        </div>
    )
}