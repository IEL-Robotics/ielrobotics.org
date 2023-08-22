import '../SmallBox/SmallBox.css'
import { useContext, useState, useEffect } from 'react';

import LanguageContext from '../../Context/LanguageContext';
import placeholder from "/OtherImages/Loading/pfpload11.webp"

export const SmallBox = (Props) => {
    const profilePic = Props.image;
    const boxName = Props.name;
    const boxRole = Props.role;
    const linkedin = Props.link;
    const id = Props.idval;

    const { language, getTranslation } = useContext(LanguageContext);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };
/*
    var screenMid = window.innerHeight / 2;
    var elementMid = null;

    useEffect(() => { //Position Val when Resized
        const element = document.getElementById(id);
        const catchResize = () => {
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementMiddle = rect.top + rect.height / 2; //+  rect.height / 2  + window.scrollY
                //console.log(`Element ${id} Top:`, elementMiddle);
                elementMid = elementMiddle;
            }
        };

        catchResize();

        window.addEventListener('resize', catchResize);

        return () => {
            window.removeEventListener('resize', catchResize);
        };
    }, []);

    useEffect(() => { //Position Val when scrolled
        const handleScroll = () => {
            var scrollAmount = window.scrollY;
            var sA =  scrollAmount //+ window.innerHeight / 2
            //console.log('The Mid:', sA);
            screenMid = sA;
            checkFunction();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let checkFunction = () => {
        if(window.innerWidth < 700 && elementMid != null){
            if((elementMid - screenMid) < 20 && (elementMid - screenMid) > -20){
                console.log(`Element ${id} can be considered Middle`);
            }
        }
    }
*/
    return (
        <div className="smallbox-content-holder" id={id}>
            <div className="smallbox-image-container">
                <a href={linkedin} style={{textDecoration: "underline"}} draggable="true" target="_blank">
                    <img 
                        src={imageLoaded ? profilePic: placeholder} 
                        id="smallbox-pic" 
                        className="smallbox-image"
                        onLoad={handleImageLoad}
                    />
                </a>
            </div>
            <div className="smallbox-text-content">
                <h4 id="team-header-name" style={{marginBottom: "5px", padding: "0", textAlign: "center"}}> {boxName} </h4>
                <h5 id="team-header-role" style={{textAlign: "center"}}>  {getTranslation(boxRole)} </h5>
            </div>
        </div>
    )
}
