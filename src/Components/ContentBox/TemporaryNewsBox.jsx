import '../ContentBox/ContentBox.css'

import { useContext, useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import LanguageContext from '../../Context/LanguageContext';


const CustomPrevArrow2 = ({ clickHandler, hasPrev, label }) => {
    return <div className="prev" id="newsprev" style={{ zIndex: '999' }} onClick={clickHandler}>&#10094;</div>;
};

const CustomNextArrow2 = ({ clickHandler, hasPrev, label }) => {
    return <div className="next" id="newsnext" style={{ zIndex: '999', marginRight:"-1px"}} onClick={clickHandler}>&#10095;</div>;
};


export const TemporaryNewsBox = () => {

    const { language, getTranslation } = useContext(LanguageContext);

    return (
        <div className="content-holder-yellow" id="newscontentholder">
            <div id="newsimagecontainer">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={true}
                    renderArrowPrev={(clickHandler, hasPrev, label) => (
                        <CustomPrevArrow2 clickHandler={clickHandler} hasPrev={hasPrev} label={label} />
                      )}
                      renderArrowNext={(clickHandler, hasNext, label) => (
                        <CustomNextArrow2 clickHandler={clickHandler} hasNext={hasNext} label={label} />
                      )}
                    className="slidertemp"
                >
                    <div>
                        <img src={"/OtherImages/Loading/oda4.webp"} className="image" id="newsimage" alt="News" />
                    </div>
                    <div>
                        <img src={"/OtherImages/Loading/oda1.webp"} className="image" id="newsimage" alt="News" />
                    </div>
                    <div>
                        <img src={"/OtherImages/Loading/oda2.webp"} className="image" id="newsimage" alt="News" />
                    </div>
                    <div>
                        <img src={"/OtherImages/Loading/oda3.webp"} className="image" id="newsimage" alt="News" />
                    </div>

                </Carousel>
            </div>
            <div className="text-content">
                <h1 className="content-box-title"> {getTranslation("temp-news-title")} </h1>
                {getTranslation("temp-news-content")}
                <button className="redirect-button">
                    <a
                        draggable="true"
                        href={"www.wikipedia.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &gt; {getTranslation("more")}
                    </a>
                </button>
            </div>
        </div>
    );
};


