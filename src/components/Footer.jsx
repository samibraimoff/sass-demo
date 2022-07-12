import React from 'react';
import {
  FaUtensils,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerHeader'>
        <a href='!#' className='logo'>
          <FaUtensils />
        </a>
        <div>
          <h1 className='mainName'>Georgia</h1>
          <p className='subName'>Restaurant</p>
        </div>
      </div>

      <div className='footerSocialMedia'>
        <ul className='socialMedia'>
          <li className='socialMediaItem'>
            <a href='!#' className='socialMediaLink'>
              <FaFacebookSquare />
            </a>
          </li>
          <li className='socialMediaItem'>
            <a href='!#' className='socialMediaLink'>
              <FaInstagramSquare />
            </a>
          </li>
          <li className='socialMediaItem'>
            <a href='!#' className='socialMediaLink'>
              <FaYoutubeSquare />
            </a>
          </li>
          <li className='socialMediaItem'>
            <a href='!#' className='socialMediaLink'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div className='footerCopyright'>
        <p className='footerCopyrightText'>
          &copy; Copyright Restaurant Georgia. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
