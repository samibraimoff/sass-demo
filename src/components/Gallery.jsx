import React from 'react';

import Card from './Card';

const images = [
  {
    id: 1,
    name: 'Food 1',
    price: 23,
    img: './images/gallery-img-1.jpeg',
  },
  {
    id: 2,
    name: 'Food 2',
    price: 33,
    img: './images/gallery-img-2.jpeg',
  },
  {
    id: 3,
    name: 'Food 3',
    price: 45,
    img: './images/gallery-img-3.jpeg',
  },
  {
    id: 4,
    name: 'Food 4',
    price: 25,
    img: './images/gallery-img-4.jpeg',
  },
  {
    id: 5,
    name: 'Food 5',
    price: 14,
    img: './images/gallery-img-5.jpeg',
  },
  {
    id: 6,
    name: 'Food 6',
    price: 12,
    img: './images/gallery-img-6.jpeg',
  },
];

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='wrapper'>
        {images.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
