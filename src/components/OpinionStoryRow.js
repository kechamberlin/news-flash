import React from 'react';

function StoryRow({ title, byline }) {
  return (
    <div>
      <p>{title}</p>
      <p>{byline.substring(3)}</p>
    </div>
  );
}

export default StoryRow;
