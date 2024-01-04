import React from 'react'
import './Intro.css'
import { introHeader, introText } from './Intro.dt'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-container'>
            <span className='intro-header'>{introHeader}</span>
            <span className='intro-text'>{introText}</span>
        </div>
    </div>
  )
}

export default Intro