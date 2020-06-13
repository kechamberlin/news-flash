import React from 'react';
import Figure from 'react-bootstrap/Figure';

function TopStories({ title, abstract, image, caption, url }) {
  return (
    <div>
      <Figure className='text-center' style={{ width: '18rem' }}>
        <Figure.Image width={200} height={180} alt={caption} src={image} />
        <Figure.Caption as='h1'>
          <strong>{title}</strong>
        </Figure.Caption>
        <Figure.Caption style={{ fontSize: '12px' }}>{abstract}</Figure.Caption>
      </Figure>
    </div>
  );
}

export default TopStories;
