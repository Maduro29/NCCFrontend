import React from 'react'
import './Page.css'
import Logo from '../component/Logo/Logo'
import Intro from '../component/Intro/Intro'
import Section from '../component/Section/Section'
import Footer from '../component/Footer/Footer'

const Page = () => {
  return (
    <div className='page'>
      <div className='page-container'>
        <div className='page-box'>
          <Logo />
          <Intro />
          <Section />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page