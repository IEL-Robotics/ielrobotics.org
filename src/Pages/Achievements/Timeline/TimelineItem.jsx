import React, { useRef } from 'react';
import Slider from 'react-slick';
import './TimelineItem.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => {
  return <div className="prev" style={{zIndex: '2'}} onClick={onClick}>&#10094;</div>;
};

const CustomNextArrow = ({ onClick }) => {
  return <div className="next"  style={{zIndex: '2'}} onClick={onClick}>&#10095;</div>;
};

export const TimelineItem = ({ data, scrollToItem }) => {
  const itemRef = useRef(null);

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
    <div className="achieve-item">
      <div className="achieve-item-content" ref={itemRef} style={{ width: '100%' }}>
        <div className="slideshow-container" style={{ width: '100%' }}>
          <Slider {...settings}>
            {images.map((event_image, index) => (
              <div key={index}>
                <img src={event_image} style={{ width: '100%', marginBottom: '10px', zIndex: '9999' }} alt="" />
              </div>
            ))}
          </Slider>
        </div>

        <h1 className="comp-title" style={{ marginBottom: '10px', marginTop: '10px' }}>
          {data.title}
        </h1>
        <p className="comp-desc">{data.description}</p>
        <span className="circle" onClick={handleClick} />
      </div>
    </div>
  );
};