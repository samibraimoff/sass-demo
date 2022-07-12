import React from 'react';

import { RiStarSFill } from 'react-icons/ri';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='aboutUsLeft'>
        <img src='images/about-us-img.png' alt='about us' />
      </div>

      <div className='aboutUsRight'>
        <h1 className='mainHeading'>About Us</h1>
        <h3 className='subHeading'>Introduce To Georgian dishes.</h3>
        <div className='stars'>
          <RiStarSFill className='star' />
          <RiStarSFill className='star' />
          <RiStarSFill className='star' />
        </div>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ipsum officiis voluptatem, inventore odit soluta, rerum praesentium
          voluptatibus et ab delectus aperiam tenetur cupiditate perferendis
          atque nihil corrupti sequi, voluptas amet adipisci magnam aut minima.
          Placeat non fuga odio officia, qui nisi repudiandae esse laboriosam
          doloremque a adipisci quis sed.
        </p>
        <div className='stars'>
          <RiStarSFill className='star' />
          <RiStarSFill className='star' />
          <RiStarSFill className='star' />
        </div>
        <button className='mainBtn'>Read more</button>
      </div>
    </div>
  );
};

export default AboutUs;
