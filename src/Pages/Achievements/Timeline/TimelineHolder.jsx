import React, { useRef } from 'react';
import achieveData from '../Achievements.json';
import './TimelineHolder.css';
import { TimelineItem } from './TimelineItem.jsx';
import { NewTimelineItem } from './NewTimelineItem';

export const TimelineHolder = () => {
  const scrollToItem = (ref) => {
    if (ref) {
        const topOffset = ref.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topOffset + -80, behavior: 'smooth' });
    }
  };

  if (achieveData.length > 0) {
    return (
      <div className="timelineHolder">
        {achieveData.map((data, index) => (
          <NewTimelineItem key={index} data={data} scrollToItem={scrollToItem} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};
