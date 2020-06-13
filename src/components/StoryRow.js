import React from 'react';

function StoryRow({ image, title }) {
  return (
    <div>
      <img style={{ height: '5rem', width: '5rem' }} src={image} alt='' />
      <p>{title}</p>
    </div>
  );
}

export default StoryRow;
