import React from 'react';
import Image from 'react-bootstrap/Image';

function MainStoryItem({ image, title, abstract }) {
  return (
    <div>
      <Image src={image} fluid className='main-story-image' />
      <h4>{title}</h4>
      <p>{abstract}</p>
    </div>
  );
}

export default MainStoryItem;
