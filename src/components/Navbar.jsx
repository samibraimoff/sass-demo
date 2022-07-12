import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <input type='checkbox' id='check' className='checkbox' hidden />
      <div className='hamburgerMenu'>
        <label htmlFor='check' className='menu'>
          <div className='menuLine menuLineOne'></div>
          <div className='menuLine menuLineTwo'></div>
          <div className='menuLine menuLineThree'></div>
        </label>
      </div>

      <div className='navbarNavigation'>
        <div className='navbarNavigationLeft'>
          <img
            src='./images/nav-img-1.jpeg'
            className='leftImg leftImgOne'
            alt=''
          />
          <img
            src='./images/nav-img-2.jpeg'
            className='leftImg leftImgTwo'
            alt=''
          />
          <img
            src='./images/nav-img-3.jpeg'
            className='leftImg leftImgThree'
            alt=''
          />
        </div>

        <div className='navbarNavigationRight'>
          <ul className='navList'>
            <li className='navListItem'>
              <a href='!#' className='navListItemLink'>
                Home
              </a>
            </li>
            <li className='navListItem'>
              <a href='!#' className='navListItemLink'>
                About us
              </a>
            </li>
            <li className='navListItem'>
              <a href='!#' className='navListItemLink'>
                Gallery
              </a>
            </li>
            <li className='navListItem'>
              <a href='!#' className='navListItemLink'>
                Reservation
              </a>
            </li>
            <li className='navListItem'>
              <a href='!#' className='navListItemLink'>
                Services
              </a>
            </li>
            <li className='navListItem'>
              <a href='!#' className='navListItemLink'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
