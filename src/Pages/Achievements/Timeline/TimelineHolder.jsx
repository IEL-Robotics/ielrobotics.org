import React, { useRef, useState, useContext, useEffect } from 'react';
import achieveData from '../Achievements.json';
import socialData from '../Impact.json';
import './TimelineHolder.css';
import { TimelineItem } from './TimelineItem.jsx';
import { NewTimelineItem } from './NewTimelineItem';

import LanguageContext from '../../../Context/LanguageContext';
import scrollIntoView from "scroll-into-view"

export const TimelineHolder = (Props) => {
  const { language, getTranslation } = useContext(LanguageContext);

  const scrollToItem = (ref) => {
    if (ref) {
      const topOffset = ref.getBoundingClientRect().top + window.pageYOffset;

      var scrollOffset = window.innerWidth > 1300 ? window.innerWidth / 500 * 25 + 10 : 75;
      //console.log("THIS IS THE SCROLL OFFSET", scrollOffset);
      window.scrollTo({ top: topOffset + -scrollOffset, behavior: 'smooth' });
    }
  };

  const [lanIndex, setLanIndex] = useState(0);

  useEffect(() => {
    if (language === 'en') {
      setLanIndex(0);
    }
    else if (language === 'tr') {
      setLanIndex(1);
    }
    else if (language === 'de') {
      setLanIndex(2);
    }
  }, [language]);

  const componentRefs = {
    componentId0: useRef(null),
    componentId4: useRef(null),
    componentId8: useRef(null),
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToComponentId = urlParams.get('scrollToComponentId');

    let wi = window.innerWidth
    let scrollConstant = 14 - (0.01 * wi) + (0.000002075 * wi * wi);
    if(wi > 2500){ scrollConstant = 3.5;}

    if (scrollToComponentId && componentRefs[scrollToComponentId]?.current) {
      scrollIntoView(componentRefs[scrollToComponentId].current, {
        time: 1250,
        align: {
          top: 0,
          topOffset: window.innerWidth > 700 ? (((scrollConstant+0.75) * wi) / 100) : 60
        }
      })
    }
  }, []);

  if (achieveData.length > 0 && Props.type === true) {
    return (
      <div className="timelineHolder">
        {achieveData.map((data, index) => {
          let key = `${data.id}-${index}`;
          if (data.id === 100) {
            return (
              <div ref={componentRefs.componentId0} id="componentId0" key={key}>
                <NewTimelineItem data={data} lan={lanIndex} scrollToItem={scrollToItem} markIndex={data.id}/>
              </div>
            );
          } else if (data.id === 104) {
            return (
              <div ref={componentRefs.componentId4} id="componentId4" key={key}>
                <NewTimelineItem data={data} lan={lanIndex} scrollToItem={scrollToItem} markIndex={data.id} />
              </div>
            );
          } else if (data.id === 108) {
            return (
              <div ref={componentRefs.componentId8} id="componentId8" key={key}>
                <NewTimelineItem data={data} lan={lanIndex} scrollToItem={scrollToItem} markIndex={data.id} />
              </div>
            );
          } else {
            return (
                <NewTimelineItem data={data} lan={lanIndex} scrollToItem={scrollToItem} key={key} markIndex={data.id} />
            );
          }
        })}
      </div>

    );
  }
  else if (socialData.length > 0 && Props.type === false) {
    return (
      <div className="timelineHolder">
        {socialData.map((data, index) => (
          <NewTimelineItem key={index + 50} data={data} lan={lanIndex} scrollToItem={scrollToItem} markIndex={data.id} />
        ))}
      </div>
    )
  }
  else {
    return null;
  }
};
