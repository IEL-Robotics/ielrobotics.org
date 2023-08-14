import React, { useRef, useState, useContext, useEffect } from 'react';
import achieveData from '../Achievements.json';
import socialData from '../Impact.json';
import './TimelineHolder.css';
import { TimelineItem } from './TimelineItem.jsx';
import { NewTimelineItem } from './NewTimelineItem';

import LanguageContext from '../../../Context/LanguageContext';

export const TimelineHolder = (Props) => {
  const { language, getTranslation } = useContext(LanguageContext);

  const scrollToItem = (ref) => {
    if (ref) {
        const topOffset = ref.getBoundingClientRect().top + window.pageYOffset;

        var scrollOffset = window.innerWidth > 1300 ? window.innerWidth / 500 * 25 + 10 : 75;
        console.log("THIS IS THE SCROLL OFFSET", scrollOffset);
        window.scrollTo({ top: topOffset + -scrollOffset, behavior: 'smooth' });
    }
  };

  const [lanIndex, setLanIndex] = useState(0);

  useEffect(() => {
    if(language === 'en'){
      setLanIndex(0);
    }
    else if(language === 'tr'){
      setLanIndex(1);
    }
    else if(language === 'de'){
      setLanIndex(2);
    }
  },[language]);

  if (achieveData.length > 0 && Props.type === true) {
    return (
      <div className="timelineHolder">
        {achieveData.map((data, index) => (
          <NewTimelineItem key={index} data={data} lan={lanIndex} scrollToItem={scrollToItem} />
        ))}
      </div>
    );
  } 
  else if (socialData.length > 0 && Props.type === false) {
    return (
      <div className="timelineHolder">
        {socialData.map((data, index) => (
          <NewTimelineItem key={index} data={data} lan={lanIndex} scrollToItem={scrollToItem} />
        ))}
      </div>
    );
  }
  else {
    return null;
  }
};
