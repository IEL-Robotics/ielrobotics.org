import './TheImage.css'
import '../../index.css'

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