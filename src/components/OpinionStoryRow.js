import React from 'react';
import Figure from 'react-bootstrap/Figure';

function OpinionStoryRow({ title, byline, url }) {
  return (
    <div className='opinion'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Figure>
          <Figure.Caption className='opinion-title'>
            <strong>{title}</strong>
          </Figure.Caption>
          <Figure.Caption className='opinion-abstract'>
            {byline.substring(3)}
          </Figure.Caption>
        </Figure>
      </a>
    </div>
  );
}

export default OpinionStoryRow;
