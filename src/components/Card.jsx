import React from 'react';

const Card = (props) => {
  const {
    image: { id, name, price, img },
  } = props;
  return (
    <div className='card'>
      <div className='cardOverlay'>
        <h1 className='cardOverlayHeading'>{name}</h1>
        <p className='cardOverlayParagraph'>$ {price}</p>
        <button className='cardOverlayBtn'>Order Now</button>
      </div>
      <img src={img} alt={name} />
    </div>
  );
};

export default Card;
