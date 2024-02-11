import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import "./style.scss"

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='social-icons'>
        <a href='https://www.facebook.com/' title='Facebook' target="_blank" rel='noreferrer noopener'><FaFacebook /></a>
        <a href='https://twitter.com/?lang=en' title='Twitter' target="_blank" rel='noreferrer noopener'><FaTwitter /></a>
        <a href='https://www.instagram.com/' title='Instagram' target="_blank" rel='noreferrer noopener'><FaInstagram /></a>
      </div>
      <p>&copy;LectureSchedular 2024.&reg;All rights reserved</p>
    </div>
  )
}

export default Footer