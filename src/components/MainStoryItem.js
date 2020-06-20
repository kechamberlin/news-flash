import React from 'react';
import Image from 'react-bootstrap/Image';

function MainStoryItem({ image, title, abstract, url }) {
  return (
    <div className='main-story'>
      <Image src={image} fluid />
      <h4 className='main-story-title'>{title}</h4>
      <p>{abstract}</p>
    </div>
  );
}

export default MainStoryItem;
