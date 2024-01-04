import React from 'react'
import LogoIcon from '../../assets/images/logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
     <img src={`${LogoIcon}`}></img>
    </div>
  )
}

export default Logo