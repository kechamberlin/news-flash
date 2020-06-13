import React from 'react';
import Figure from 'react-bootstrap/Figure';

function OpinionStoryRow({ title, byline, url }) {
  return (
    <div>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Figure className='text-center' style={{ width: '18rem' }}>
          <Figure.Caption as='h1'>
            <strong>{title}</strong>
          </Figure.Caption>
          <Figure.Caption className='mb-2' style={{ fontSize: '12px' }}>
            {byline.substring(3)}
          </Figure.Caption>
        </Figure>
      </a>
    </div>
  );
}

export default OpinionStoryRow;
