import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header'>
      <div className='brand'>
        <a href='!#' className='logo'>
          <FaUtensils />
        </a>
        <div>
          <h1 className='mainName'>Georgia</h1>
          <p className='subName'>Restaurant</p>
        </div>
      </div>

      <div className='headerBanner'>
        <h1 className='mainHeading'>Welcome</h1>
        <h3 className='subHeading'>Try great georgian dishes.</h3>
        <button className='mainBtn'>Reservation</button>
      </div>
    </header>
  );
};

export default Header;
