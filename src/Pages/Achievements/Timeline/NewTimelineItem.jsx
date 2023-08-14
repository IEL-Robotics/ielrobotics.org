import React, { useRef } from 'react';
import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import './NewTimelineItem.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LanguageContext from '../../../Context/LanguageContext';

const CustomPrevArrow = ({ onClick }) => {
    return <div className="prev" style={{ zIndex: '2' }} onClick={onClick}>&#10094;</div>;
};

const CustomNextArrow = ({ onClick }) => {
    return <div className="next" style={{ zIndex: '2', marginRight:"-1px"}} onClick={onClick}>&#10095;</div>;
};

export const NewTimelineItem = ({ data, scrollToItem, lan}) => {
    const itemRef = useRef(null);

    const { language, getTranslation } = useContext(LanguageContext);

    useEffect(() => {
    }, [lan])

    const handleClick = () => {
        scrollToItem(itemRef.current);
    };

    const images = data.images;

    const settings = {
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className='new-achieve-main-container'>
            <div className='new-achieve-sub-container' ref={itemRef}>
                <div className="new-slideshow-container" style={{ width: '100%' }}>
                    <Slider {...settings} className='slider'>
                        {images.map((event_image, index) => (
                            <div key={index}>
                                <img className='slider-image' src={event_image} style={{ width: '100%', zIndex: '9999' }} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='new-space'>
                    <span className="new-circle" onClick={handleClick} />
                </div>
                <div className='new-achieve-textbox'>
                    <div className='new-upper-bar'>
                        <h1 className="new-comp-title">
                            {data.titles[lan]}
                        </h1>
                    </div>
                    <p className="new-comp-desc">{data.descriptions[lan]}</p>
                </div>
            </div>

        </div>
    )
};


//ODTU SON FOTO EKLE, JF17 SON FOTO DUZELT