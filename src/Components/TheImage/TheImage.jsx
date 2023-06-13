import './TheImage.css'
import '../../index.css'

import LanguageContext from '../../Context/LanguageContext'
import myImage from '../../Media/Images/8058.png'

export const TheImage = (props) => {
    return (
        <div className="container">
            <div className="image-wrapper">
                <p> {props.text} </p>
                <img src={props.source} alt="" />
            </div>
        </div>
    )
}