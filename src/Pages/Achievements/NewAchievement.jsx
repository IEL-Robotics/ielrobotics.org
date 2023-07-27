import React from 'react'
import { TheImage } from '../../Components/TheImage/TheImage'
import success_image from '../../Media/Images/Success.png'

import { useContext } from "react";
import LanguageContext from "../../Context/LanguageContext"
import NewTimeline from './Timeline/NewTimeline';


export default function NewAchievement() {
    const { language, getTranslation } = useContext(LanguageContext);

  return (
    <div className='mt-20'>
          <TheImage source={success_image} text={getTranslation('success-slogan')} />
          <div className='team-title-holder'>
              <h1 className='team-title'>{getTranslation('achi-title')}</h1>
          </div>
          <NewTimeline />
    </div>
  )
}
