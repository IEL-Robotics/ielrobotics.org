import React, { useRef } from 'react';
import '../Achievements/TimelineItem.css';

export const TimelineItem = ({ data, scrollToItem }) => {
  const itemRef = useRef(null);

  const handleClick = () => {
    scrollToItem(itemRef.current);
  };

  return (
    <div className="achieve-item">
      <div className="achieve-item-content" ref={itemRef} style={{ width: '100%' }}>
        <img src={data.images[0]} style={{ width: '100%', marginBottom: '10px' }} alt="" />
        <h1 className='comp-title'>{data.title}</h1>
        <p className='comp-desc'>{data.description}</p>
        <span className="circle" onClick={handleClick} />
      </div>
    </div>
  );
};

