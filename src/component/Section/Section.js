import React from 'react'
import './Section.css'
import SecItem from './SecItem/SecItem'
import sec1 from '../../assets/images/sec1.png'
import sec2 from '../../assets/images/sec2.png'
import sec3 from '../../assets/images/sec3.png'

const Section = () => {

    const secData = [sec1, sec2, sec3]

  return (
    <div className='section'>
        <div className='section-container'>
            {secData.map(data => {
                return <SecItem image={data} />
            })}
        </div>
    </div>
  )
}

export default Section