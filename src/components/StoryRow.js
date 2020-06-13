import React from 'react';
import Figure from 'react-bootstrap/Figure';

function StoryRow({ image, title, caption }) {
  return (
    <div>
      <Figure className='text-center' style={{ width: '15rem' }}>
        <Figure.Image width={171} height={180} alt={caption} src={image} />
        <Figure.Caption as='h1'>
          <strong>{title}</strong>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default StoryRow;
