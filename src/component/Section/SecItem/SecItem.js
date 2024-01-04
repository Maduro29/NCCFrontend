import React from 'react'
import './SecItem.css'
import { secHeader, secText } from './SecItem.dt';

const SecItem = (props) => {

    const { image } = props;
    console.log(image)

  return (
    <div className='secitem'>
        <div className='secitem-container'>
            <span className='secitem-header'>{secHeader}</span>
            <div className='secitem-body'>
                <img src={`${image}`}></img>
                {secText}
            </div>
        </div>
    </div>
  )
}

export default SecItem