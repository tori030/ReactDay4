import React from 'react';
import GalleryItem from './Galleryitem';

const GalleryList = ({ data, onView }) => {
  return (
    <ul className='List'>
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} onView={onView} />
      ))}
    </ul>
  );
};

export default GalleryList;
