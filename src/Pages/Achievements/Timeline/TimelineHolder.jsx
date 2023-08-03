import React, { useRef } from 'react';
import achieveData from '../Achievements.json';
import socialData from '../Impact.json';
import './TimelineHolder.css';
import { TimelineItem } from './TimelineItem.jsx';
import { NewTimelineItem } from './NewTimelineItem';

export const TimelineHolder = (Props) => {
  const scrollToItem = (ref) => {
    if (ref) {
        const topOffset = ref.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topOffset + -80, behavior: 'smooth' });
    }
  };

  if (achieveData.length > 0 && Props.type === true) {
    return (
      <div className="timelineHolder">
        {achieveData.map((data, index) => (
          <NewTimelineItem key={index} data={data} scrollToItem={scrollToItem} />
        ))}
      </div>
    );
  } 
  else if (socialData.length > 0 && Props.type === false) {
    return (
      <div className="timelineHolder">
        {socialData.map((data, index) => (
          <NewTimelineItem key={index} data={data} scrollToItem={scrollToItem} />
        ))}
      </div>
    );
  }
  else {
    return null;
  }
};
