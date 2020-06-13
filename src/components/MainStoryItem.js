import React from 'react';

function MainStoryItem({ image, title, abstract }) {
  return (
    <div>
      <img src={image} alt='' style={{ height: '20rem', width: '40rem' }} />
      <p>{title}</p>
      <p>{abstract}</p>
    </div>
  );
}

export default MainStoryItem;
